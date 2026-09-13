import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  Output,
  EventEmitter,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicCloud, PublicWord, ResolvedAppearance } from '../../models/word-cloud.model';
import {
  createMeasurer,
  ensureFontReady,
  loadCrossOriginImage,
  renderCloud,
  setupCanvas,
} from '../../engine/word-cloud-renderer';
import { easeInOutCubic, Placement, WordCloudLayout } from '../../engine/word-cloud-layout';

interface AnimatedPlacement extends Placement {
  /** Estado de entrada: 0 → 1 en 350ms (fade + scale 0.7→1). */
  enterProgress: number;
}

const ENTER_DURATION_MS = 350;
const REFLOW_DURATION_MS = 500;
const UPDATE_DEBOUNCE_MS = 250;

/**
 * Componente reusable. Lo usan la pantalla del alumno (`interactive=false`) y la
 * del docente (`interactive=true`, clic → explicaciones).
 */
@Component({
  selector: 'app-word-cloud-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-cloud-canvas.component.html',
  styleUrls: ['./word-cloud-canvas.component.css'],
})
export class WordCloudCanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasEl') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('container') containerRef!: ElementRef<HTMLDivElement>;

  @Output() wordClick = new EventEmitter<string>();

  private zone = inject(NgZone);

  private _cloud: PublicCloud | null = null;
  private _appearance: ResolvedAppearance | null = null;

  @Input() interactive = false;
  @Input() emptyMessage = 'Todavía no hay palabras. ¡Sé el primero!';

  @Input()
  set cloud(value: PublicCloud | null | undefined) {
    this._cloud = value ?? null;
    this.scheduleUpdate();
  }
  get cloud(): PublicCloud | null {
    return this._cloud;
  }

  @Input()
  set appearance(value: ResolvedAppearance | null | undefined) {
    const previous = this._appearance;
    this._appearance = value ?? null;

    // La fuente cambia TODAS las métricas: no hay update incremental posible
    const needsReflow =
      !previous ||
      previous.fontFamily !== value?.fontFamily ||
      previous.baseFontSize !== value?.baseFontSize;

    void this.applyAppearance(needsReflow);
  }
  get appearance(): ResolvedAppearance | null {
    return this._appearance;
  }

  /** Palabras accesibles por teclado y lector de pantalla. El canvas no tiene a11y. */
  get accessibleWords(): PublicWord[] {
    return this._cloud?.words ?? [];
  }

  get isEmpty(): boolean {
    return !this._cloud || this._cloud.words.length === 0;
  }

  hoveredKey: string | null = null;

  private ctx: CanvasRenderingContext2D | null = null;
  private layout = new WordCloudLayout();
  private animated = new Map<string, AnimatedPlacement>();
  private backgroundImage: HTMLImageElement | null = null;

  private rafId: number | null = null;
  private debounceId: any = null;
  private resizeObserver: ResizeObserver | null = null;
  private destroyed = false;

  /** Re-flow animado en curso: layout viejo → nuevo, interpolado. */
  private reflowFrom: Map<string, Placement> | null = null;
  private reflowStart = 0;

  /**
   * Semilla de barajado LOCAL, solo para el botón "Reorganizar".
   *
   * El packer es determinista a propósito: mismo `layoutSeed` + mismas palabras
   * = misma nube en la web y en el celular. El efecto colateral es que un
   * re-flow "a mano" da el layout idéntico y el botón parece no hacer nada.
   * Este nonce se mezcla con el seed del servidor solo cuando el docente lo
   * pide, así que la paridad entre dispositivos se mantiene hasta que lo toque.
   */
  private reshuffleNonce = 0;

  private get effectiveSeed(): number {
    const seed = this._cloud?.layoutSeed ?? 1;
    return this.reshuffleNonce === 0 ? seed : (seed ^ this.reshuffleNonce) >>> 0;
  }

  async ngAfterViewInit() {
    this.setupResizeObserver();
    await this.applyAppearance(true);
  }

  ngOnDestroy() {
    this.destroyed = true;
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    if (this.debounceId) clearTimeout(this.debounceId);
    this.resizeObserver?.disconnect();
  }

  private setupResizeObserver() {
    const container = this.containerRef?.nativeElement;
    if (!container || typeof ResizeObserver === 'undefined') return;

    // Fuera de la zona de Angular: un resize dispara decenas de callbacks y
    // no cambia nada del template, solo el canvas.
    this.zone.runOutsideAngular(() => {
      this.resizeObserver = new ResizeObserver(() => {
        if (this.debounceId) clearTimeout(this.debounceId);
        this.debounceId = setTimeout(() => this.reflow(), UPDATE_DEBOUNCE_MS);
      });
      this.resizeObserver.observe(container);
    });
  }

  private async applyAppearance(needsReflow: boolean) {
    const appearance = this._appearance;
    if (!appearance) return;

    // Esperar la fuente ANTES del primer layout: si medimos con el fallback,
    // todo el packing queda mal y la nube salta cuando carga la real.
    await ensureFontReady(appearance.fontFamily, [
      Math.round(appearance.baseFontSize * 0.6),
      appearance.baseFontSize,
      Math.round(appearance.baseFontSize * 3.2),
    ]);

    if (this.destroyed) return;

    if (appearance.backgroundImageUrl) {
      try {
        this.backgroundImage = await loadCrossOriginImage(appearance.backgroundImageUrl);
      } catch {
        this.backgroundImage = null;
      }
    } else {
      this.backgroundImage = null;
    }

    if (this.destroyed) return;
    if (needsReflow) this.reflow();
    else this.requestRender();
  }

  private ensureContext(): CanvasRenderingContext2D | null {
    const canvas = this.canvasRef?.nativeElement;
    const container = this.containerRef?.nativeElement;
    if (!canvas || !container) return null;

    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width === 0 || height === 0) return null;

    this.ctx = setupCanvas(canvas, width, height);
    return this.ctx;
  }

  private scheduleUpdate() {
    if (this.debounceId) clearTimeout(this.debounceId);
    // 10 alumnos enviando a la vez → un solo paso de layout, no diez
    this.debounceId = setTimeout(() => this.update(), UPDATE_DEBOUNCE_MS);
  }

  private update() {
    const ctx = this.ensureContext();
    const cloud = this._cloud;
    const appearance = this._appearance;
    if (!ctx || !cloud || !appearance) return;

    const container = this.containerRef.nativeElement;
    const configChanged = this.layout.configure({
      width: container.clientWidth,
      height: container.clientHeight,
      baseFontSize: appearance.baseFontSize,
      seed: this.effectiveSeed,
    });

    if (configChanged) {
      this.reflow();
      return;
    }

    const measure = createMeasurer(ctx, appearance.fontStack);
    const diff = this.layout.update(cloud.words, cloud.maxCount, measure);

    diff.removed.forEach((key) => this.animated.delete(key));

    this.layout.placed.forEach((placement) => {
      const existing = this.animated.get(placement.key);
      this.animated.set(placement.key, {
        ...placement,
        // Las que ya estaban no re-animan la entrada
        enterProgress: existing?.enterProgress ?? 0,
      });
    });

    // Demasiadas palabras no pudieron crecer donde estaban: reorganizamos,
    // pero ANIMADO — nunca teletransportando la nube entera.
    if (diff.needsReflow) {
      this.reflow();
      return;
    }

    this.requestRender();
  }

  /** Re-flow completo: guarda el layout viejo e interpola hacia el nuevo. */
  reflow() {
    const ctx = this.ensureContext();
    const cloud = this._cloud;
    const appearance = this._appearance;
    if (!ctx || !cloud || !appearance) return;

    const container = this.containerRef.nativeElement;
    const previous = this.layout.snapshot();

    this.layout.configure({
      width: container.clientWidth,
      height: container.clientHeight,
      baseFontSize: appearance.baseFontSize,
      seed: this.effectiveSeed,
    });

    const measure = createMeasurer(ctx, appearance.fontStack);
    const placements = this.layout.reflow(cloud.words, cloud.maxCount, measure);

    const next = new Map<string, AnimatedPlacement>();
    placements.forEach((placement) => {
      next.set(placement.key, {
        ...placement,
        enterProgress: previous.has(placement.key) ? 1 : 0,
      });
    });
    this.animated = next;

    // Solo interpolamos si había algo antes; el primer render entra con fade
    this.reflowFrom = previous.size > 0 ? previous : null;
    this.reflowStart = performance.now();

    this.requestRender();
  }

  private requestRender() {
    if (this.rafId !== null || this.destroyed) return;
    this.zone.runOutsideAngular(() => {
      this.rafId = requestAnimationFrame((time) => this.renderFrame(time));
    });
  }

  private renderFrame(time: number) {
    this.rafId = null;
    const ctx = this.ctx;
    const appearance = this._appearance;
    if (!ctx || !appearance) return;

    const container = this.containerRef.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    let stillAnimating = false;

    const reflowProgress = this.reflowFrom
      ? Math.min(1, (time - this.reflowStart) / REFLOW_DURATION_MS)
      : 1;
    if (this.reflowFrom && reflowProgress >= 1) this.reflowFrom = null;
    if (this.reflowFrom) stillAnimating = true;

    const eased = easeInOutCubic(reflowProgress);

    const frame: Placement[] = [];

    this.animated.forEach((placement) => {
      if (placement.enterProgress < 1) {
        placement.enterProgress = Math.min(
          1,
          placement.enterProgress + 16 / ENTER_DURATION_MS,
        );
        stillAnimating = true;
      }

      const from = this.reflowFrom?.get(placement.key);
      const x = from ? from.x + (placement.x - from.x) * eased : placement.x;
      const y = from ? from.y + (placement.y - from.y) * eased : placement.y;
      const fontSize = from
        ? from.fontSize + (placement.fontSize - from.fontSize) * eased
        : placement.fontSize;

      // Entrada: scale 0.7 → 1
      const scale = 0.7 + 0.3 * placement.enterProgress;

      frame.push({
        ...placement,
        x,
        y,
        fontSize: from ? fontSize : fontSize * scale,
      });
    });

    renderCloud(ctx, frame, width, height, {
      appearance,
      backgroundImage: this.backgroundImage,
      hoveredKey: this.interactive ? this.hoveredKey : null,
      opacityOf: (key) => this.animated.get(key)?.enterProgress ?? 1,
    });

    if (stillAnimating) this.requestRender();
  }

  // ═══ Interacción (solo el host) ═══

  onCanvasClick(event: MouseEvent) {
    if (!this.interactive) return;
    const placement = this.pick(event);
    if (placement) this.wordClick.emit(placement.key);
  }

  onCanvasMove(event: MouseEvent) {
    if (!this.interactive) return;
    const placement = this.pick(event);
    const key = placement?.key ?? null;
    if (key !== this.hoveredKey) {
      this.hoveredKey = key;
      this.requestRender();
    }
  }

  onCanvasLeave() {
    if (this.hoveredKey !== null) {
      this.hoveredKey = null;
      this.requestRender();
    }
  }

  private pick(event: MouseEvent): Placement | null {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    // Coordenadas en px CSS: el canvas está escalado por dpr internamente,
    // pero getBoundingClientRect ya devuelve px CSS.
    return this.layout.hitTest(event.clientX - rect.left, event.clientY - rect.top);
  }

  /** Entrada por teclado desde la lista accesible. */
  onAccessibleWordActivate(key: string) {
    if (!this.interactive) return;
    this.wordClick.emit(key);
  }

  /**
   * Reorganiza la nube. Lo llama el botón "Reorganizar" del host.
   *
   * Cambia el nonce ANTES del reflow: sin eso el packer es determinista y
   * devolvería exactamente el mismo layout, que es como se veía roto.
   */
  forceReflow() {
    this.reshuffleNonce = (Math.floor(Math.random() * 0xffffffff) || 1) >>> 0;
    this.reflow();
  }
}
