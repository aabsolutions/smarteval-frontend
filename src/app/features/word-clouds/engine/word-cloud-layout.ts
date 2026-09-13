/**
 * Packer de la nube de palabras — capa GEOMÉTRICA (dueña del cliente).
 *
 * La capa semántica (qué palabras, count, weight, colorIndex, rotation, orden)
 * la define el servidor y llega ya resuelta. Acá solo decidimos DÓNDE cae cada
 * palabra, porque solo el cliente puede medir texto con la fuente real.
 *
 * Este archivo es PURO: la medición entra inyectada (`MeasureFn`), así se testea
 * sin canvas y el puerto a Dart (`word_cloud_layout.dart`) es literal.
 * Si tocás el algoritmo acá, tocá el de Flutter en el mismo commit o las nubes
 * dejan de verse iguales entre plataformas.
 */

export interface CloudWord {
  key: string;
  text: string;
  count: number;
  weight: number;
  colorIndex: number;
  rotation: 0 | 90;
}

export interface Placement {
  key: string;
  text: string;
  /** Centro de la palabra, en px CSS. */
  x: number;
  y: number;
  /** AABB ya rotado (con 90° es w/h intercambiados). */
  width: number;
  height: number;
  fontSize: number;
  rotation: 0 | 90;
  colorIndex: number;
  count: number;
  /** Quedó con el tamaño viejo porque el nuevo no entraba donde está. */
  dirty: boolean;
}

/** Medición del texto sin rotar, con la fuente real. */
export type MeasureFn = (text: string, fontSize: number) => { width: number; height: number };

export interface LayoutOptions {
  width: number;
  height: number;
  baseFontSize: number;
  seed: number;
}

export interface LayoutDiff {
  added: Placement[];
  removed: string[];
  resized: Placement[];
  /** Proporción de palabras que no pudieron crecer donde estaban. */
  dirtyRatio: number;
  /** true si conviene un re-flow completo (animado, nunca teletransportando). */
  needsReflow: boolean;
}

/** Celda del bitmap de ocupación: 4×4 px es el punto dulce precisión/costo. */
const CELL = 4;
const REFLOW_DIRTY_THRESHOLD = 0.3;
/** Margen entre palabras, en px. Sin esto quedan pegadas y se leen mal. */
const PADDING = 3;
const SPIRAL_STEP = 2;
const SPIRAL_MAX_RADIUS_FACTOR = 0.75;
const SHRINK_RETRY_FACTOR = 0.82;

/** PRNG sembrado. Mismo resultado bit a bit que el del backend y que Dart. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1) >>> 0;
    t = (t ^ (t + Math.imul(t ^ (t >>> 7), t | 61))) >>> 0;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hash32(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

/**
 * El tamaño escala con la RAÍZ de la frecuencia, no linealmente.
 * El área crece con el cuadrado del tamaño: con escala lineal, una palabra dicha
 * 10 veces ocuparía 100× el área y reventaría el canvas.
 */
export function fontSizeFor(count: number, maxCount: number, baseSize: number): number {
  const ratio = maxCount > 0 ? Math.sqrt(count / maxCount) : 0;
  const size = baseSize * (0.55 + 0.45 * ratio);
  return Math.round(Math.min(Math.max(size, baseSize * 0.6), baseSize * 3.2));
}

export class WordCloudLayout {
  private width = 0;
  private height = 0;
  private baseFontSize = 44;
  private seed = 1;

  private gridWidth = 0;
  private gridHeight = 0;
  private bitmap = new Uint32Array(0);

  /** key → placement, en orden de colocación (el hit-testing lo recorre al revés). */
  private placements = new Map<string, Placement>();
  private maxCount = 0;

  constructor(options?: Partial<LayoutOptions>) {
    if (options?.width && options?.height) {
      this.resize(options.width, options.height);
    }
    if (options?.baseFontSize) this.baseFontSize = options.baseFontSize;
    if (options?.seed) this.seed = options.seed;
  }

  get placed(): Placement[] {
    return [...this.placements.values()];
  }

  get size(): { width: number; height: number } {
    return { width: this.width, height: this.height };
  }

  configure(options: Partial<LayoutOptions>): boolean {
    let changed = false;
    if (options.baseFontSize !== undefined && options.baseFontSize !== this.baseFontSize) {
      this.baseFontSize = options.baseFontSize;
      changed = true;
    }
    if (options.seed !== undefined && options.seed !== this.seed) {
      this.seed = options.seed;
      changed = true;
    }
    if (
      options.width !== undefined &&
      options.height !== undefined &&
      (options.width !== this.width || options.height !== this.height)
    ) {
      this.resize(options.width, options.height);
      changed = true;
    }
    return changed;
  }

  private resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.gridWidth = Math.ceil(width / CELL);
    this.gridHeight = Math.ceil(height / CELL);
    this.bitmap = new Uint32Array(Math.ceil((this.gridWidth * this.gridHeight) / 32));
    this.placements.clear();
  }

  clear() {
    this.bitmap.fill(0);
    this.placements.clear();
  }

  // ═══ Bitmap de ocupación ═══

  private cellsOf(x: number, y: number, w: number, h: number) {
    const left = Math.floor((x - w / 2 - PADDING) / CELL);
    const right = Math.ceil((x + w / 2 + PADDING) / CELL);
    const top = Math.floor((y - h / 2 - PADDING) / CELL);
    const bottom = Math.ceil((y + h / 2 + PADDING) / CELL);
    return { left, right, top, bottom };
  }

  private fits(x: number, y: number, w: number, h: number, ignoreKey?: string): boolean {
    const { left, right, top, bottom } = this.cellsOf(x, y, w, h);
    if (left < 0 || top < 0 || right > this.gridWidth || bottom > this.gridHeight) return false;

    // Al testear si una palabra puede CRECER in situ, sus propias celdas no cuentan
    const ignored = ignoreKey ? this.placements.get(ignoreKey) : undefined;

    for (let row = top; row < bottom; row++) {
      for (let col = left; col < right; col++) {
        const index = row * this.gridWidth + col;
        const occupied = (this.bitmap[index >> 5] & (1 << (index & 31))) !== 0;
        if (!occupied) continue;
        if (ignored && this.cellBelongsTo(ignored, row, col)) continue;
        return false;
      }
    }
    return true;
  }

  private cellBelongsTo(p: Placement, row: number, col: number): boolean {
    const { left, right, top, bottom } = this.cellsOf(p.x, p.y, p.width, p.height);
    return col >= left && col < right && row >= top && row < bottom;
  }

  private stamp(x: number, y: number, w: number, h: number, value: boolean) {
    const { left, right, top, bottom } = this.cellsOf(x, y, w, h);
    for (let row = Math.max(0, top); row < Math.min(this.gridHeight, bottom); row++) {
      for (let col = Math.max(0, left); col < Math.min(this.gridWidth, right); col++) {
        const index = row * this.gridWidth + col;
        if (value) this.bitmap[index >> 5] |= 1 << (index & 31);
        else this.bitmap[index >> 5] &= ~(1 << (index & 31));
      }
    }
  }

  // ═══ Colocación ═══

  /** Espiral de Arquímedes desde el centro, con jitter determinista por palabra. */
  private findSpot(
    word: CloudWord,
    w: number,
    h: number,
  ): { x: number; y: number } | null {
    const cx = this.width / 2;
    const cy = this.height / 2;
    const rand = mulberry32((this.seed ^ hash32(word.key)) >>> 0);

    // El jitter evita que dos palabras del mismo tamaño empiecen a probar
    // exactamente en el mismo punto y salgan siempre en la misma diagonal.
    const angleOffset = rand() * Math.PI * 2;
    // La nube se estira a lo ancho como un canvas 16:9, no queda circular
    const aspect = this.width / Math.max(this.height, 1);

    const maxRadius = Math.max(this.width, this.height) * SPIRAL_MAX_RADIUS_FACTOR;
    const angleStep = SPIRAL_STEP / 12;

    for (let angle = 0; ; angle += angleStep) {
      const radius = SPIRAL_STEP * angle * 0.5;
      if (radius > maxRadius) return null;

      const x = cx + Math.cos(angle + angleOffset) * radius * aspect;
      const y = cy + Math.sin(angle + angleOffset) * radius;

      if (this.fits(x, y, w, h)) return { x, y };
    }
  }

  private place(word: CloudWord, measure: MeasureFn): Placement | null {
    let fontSize = fontSizeFor(word.count, this.maxCount, this.baseFontSize);

    // Dos intentos: tamaño ideal y, si la espiral se agota, un paso más chico
    for (let attempt = 0; attempt < 2; attempt++) {
      const metrics = measure(word.text, fontSize);
      const w = word.rotation === 90 ? metrics.height : metrics.width;
      const h = word.rotation === 90 ? metrics.width : metrics.height;

      const spot = this.findSpot(word, w, h);
      if (spot) {
        const placement: Placement = {
          key: word.key,
          text: word.text,
          x: spot.x,
          y: spot.y,
          width: w,
          height: h,
          fontSize,
          rotation: word.rotation,
          colorIndex: word.colorIndex,
          count: word.count,
          dirty: false,
        };
        this.stamp(spot.x, spot.y, w, h, true);
        this.placements.set(word.key, placement);
        return placement;
      }

      fontSize = Math.round(fontSize * SHRINK_RETRY_FACTOR);
    }

    return null; // no entró: se descarta esta vuelta, entra en el próximo re-flow
  }

  private remove(key: string) {
    const placement = this.placements.get(key);
    if (!placement) return;
    this.stamp(placement.x, placement.y, placement.width, placement.height, false);
    this.placements.delete(key);
  }

  // ═══ API pública ═══

  /**
   * Layout completo desde cero. Solo para el primer render, un cambio de
   * apariencia/tamaño, el botón "Reorganizar" o el export offscreen.
   */
  reflow(words: CloudWord[], maxCount: number, measure: MeasureFn): Placement[] {
    this.maxCount = maxCount;
    this.clear();
    words.forEach((word) => this.place(word, measure));
    return this.placed;
  }

  /**
   * Diff incremental — el caso común, y la razón de que la nube no salte.
   *
   * Una palabra nueva busca lugar respetando el bitmap actual: NINGUNA existente
   * se mueve. Si una creció y su AABB nuevo no entra donde está, se marca `dirty`
   * y se queda con el tamaño viejo hasta el próximo re-flow.
   */
  update(words: CloudWord[], maxCount: number, measure: MeasureFn): LayoutDiff {
    this.maxCount = maxCount;

    const incoming = new Map(words.map((w) => [w.key, w]));
    const added: Placement[] = [];
    const resized: Placement[] = [];
    const removed: string[] = [];

    // 1) Palabras que ya no están: liberan sus celdas
    for (const key of [...this.placements.keys()]) {
      if (!incoming.has(key)) {
        this.remove(key);
        removed.push(key);
      }
    }

    // 2) Palabras existentes cuyo count cambió
    incoming.forEach((word, key) => {
      const current = this.placements.get(key);
      if (!current) return;

      current.text = word.text;
      current.colorIndex = word.colorIndex;

      const newFontSize = fontSizeFor(word.count, maxCount, this.baseFontSize);
      if (newFontSize === current.fontSize && word.count === current.count) {
        return;
      }

      const metrics = measure(word.text, newFontSize);
      const w = word.rotation === 90 ? metrics.height : metrics.width;
      const h = word.rotation === 90 ? metrics.width : metrics.height;

      if (this.fits(current.x, current.y, w, h, key)) {
        this.stamp(current.x, current.y, current.width, current.height, false);
        current.width = w;
        current.height = h;
        current.fontSize = newFontSize;
        current.count = word.count;
        current.dirty = false;
        this.stamp(current.x, current.y, w, h, true);
        resized.push(current);
      } else {
        // No entra donde está: se queda con el tamaño viejo y espera el re-flow
        current.count = word.count;
        current.dirty = true;
      }
    });

    // 3) Palabras nuevas, en el orden que mandó el servidor
    words.forEach((word) => {
      if (this.placements.has(word.key)) return;
      const placement = this.place(word, measure);
      if (placement) added.push(placement);
    });

    const total = this.placements.size || 1;
    const dirtyCount = this.placed.filter((p) => p.dirty).length;
    const dirtyRatio = dirtyCount / total;

    return {
      added,
      removed,
      resized,
      dirtyRatio,
      needsReflow: dirtyRatio > REFLOW_DIRTY_THRESHOLD,
    };
  }

  /** Hit-testing: orden inverso al de colocación (lo último dibujado gana). */
  hitTest(x: number, y: number): Placement | null {
    const list = this.placed;
    for (let i = list.length - 1; i >= 0; i--) {
      const p = list[i];
      if (
        x >= p.x - p.width / 2 &&
        x <= p.x + p.width / 2 &&
        y >= p.y - p.height / 2 &&
        y <= p.y + p.height / 2
      ) {
        return p;
      }
    }
    return null;
  }

  snapshot(): Map<string, Placement> {
    return new Map([...this.placements].map(([key, p]) => [key, { ...p }]));
  }
}

/** Interpolación del re-flow: nunca teletransportar, siempre animar. */
export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
