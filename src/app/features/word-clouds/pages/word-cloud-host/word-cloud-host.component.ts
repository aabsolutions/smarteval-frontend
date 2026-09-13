import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherWordCloudService } from '../../services/teacher-word-cloud.service';
import { WordCloudApiService } from '../../services/word-cloud-api.service';
import { WordCloudCanvasComponent } from '../../components/word-cloud-canvas/word-cloud-canvas.component';
import { WordDetailsPanelComponent } from '../../components/word-details-panel/word-details-panel.component';
import { AppearancePanelComponent } from '../../components/appearance-panel/appearance-panel.component';
import {
  AppearanceOptions,
  AppearancePayload,
  ResolvedAppearance,
} from '../../models/word-cloud.model';
import { buildWatermark, exportCloudAsJpg } from '../../engine/word-cloud-export';

/**
 * Proyector del docente, full-screen (sin sidebar). Es la única pantalla que
 * recibe explicaciones, vía la room `wc:${id}:teacher`.
 */
@Component({
  selector: 'app-word-cloud-host',
  standalone: true,
  imports: [
    CommonModule,
    WordCloudCanvasComponent,
    WordDetailsPanelComponent,
    AppearancePanelComponent,
  ],
  templateUrl: './word-cloud-host.component.html',
  styleUrls: ['./word-cloud-host.component.css'],
})
export class WordCloudHostComponent implements OnInit, OnDestroy {
  @ViewChild(WordCloudCanvasComponent) canvas?: WordCloudCanvasComponent;

  private service = inject(TeacherWordCloudService);
  private api = inject(WordCloudApiService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  appearanceOptions: AppearanceOptions | null = null;
  showAppearancePanel = false;
  downloading = false;
  downloadError: string | null = null;
  /** Fallo del REST de arranque. Antes se tragaba en un catch vacío. */
  loadError: string | null = null;
  private dismissedError: string | null = null;

  /**
   * PIN/título/consigna traídos por REST al entrar.
   *
   * El socket también los manda en `session:opened`, pero eso depende de que la
   * conexión se establezca: hasta entonces el proyector mostraba `······` donde
   * va el dato más importante de la pantalla. REST para lo estático, socket
   * para lo vivo.
   */
  private hydrated: { pin?: string; title?: string; prompt?: string } = {};

  /** Preview local de apariencia: se pinta antes de que el servidor confirme. */
  private previewAppearance: ResolvedAppearance | null = null;

  get state() {
    return this.service.state();
  }

  get appearance(): ResolvedAppearance | null {
    return this.previewAppearance ?? this.state.appearance ?? null;
  }

  get sessionId(): string {
    return this.route.snapshot.paramMap.get('id') ?? '';
  }

  /** El socket manda el valor canónico; el REST cubre el arranque. */
  get pin(): string {
    return this.state.pin ?? this.hydrated.pin ?? '';
  }

  get title(): string {
    return this.state.title ?? this.hydrated.title ?? '';
  }

  get prompt(): string {
    return this.state.prompt ?? this.hydrated.prompt ?? '';
  }

  /** Los 6 dígitos, uno por casilla. Un PIN en tiles se lee de lejos. */
  get pinDigits(): string[] {
    return (this.pin || '••••••').split('');
  }

  /** Un solo lugar por donde salen todos los errores de esta pantalla. */
  get errorMessage(): string | null {
    const message = this.state.error ?? this.downloadError ?? this.loadError;
    return message && message !== this.dismissedError ? message : null;
  }

  dismissError() {
    this.dismissedError = this.errorMessage;
    this.downloadError = null;
    this.loadError = null;
  }

  /**
   * Medidor de participación: un segmento por alumno conectado, encendido
   * si ya escribió. No es una barra de progreso: es la clase, hecha abstracta.
   */
  get pulseSegments(): boolean[] {
    const online = Math.max(this.state.onlineCount, this.state.submittedCount);
    const total = Math.min(Math.max(online, 1), 40);
    return Array.from({ length: total }, (_, i) => i < this.state.submittedCount);
  }

  get entriesOpen(): boolean {
    return this.state.sessionStatus === 'open';
  }

  get isFinished(): boolean {
    return this.state.sessionStatus === 'finished';
  }

  get canDownload(): boolean {
    return !!this.state.cloud && this.state.cloud.words.length > 0;
  }

  ngOnInit() {
    const id = this.sessionId;
    if (!id) {
      this.router.navigate(['/teacher/word-clouds']);
      return;
    }

    this.service.openSession(id);

    this.api.getSession(id).subscribe({
      next: (session) => {
        this.hydrated = { pin: session.pin, title: session.title, prompt: session.prompt };
        if (!session.pin) {
          this.loadError = 'La sesión no tiene PIN asignado. Creala de nuevo.';
        }
      },
      error: (err) => {
        // Sin esto el fallo era invisible: pantalla con puntitos y cero pistas
        console.error('[WordCloudHost] No se pudo cargar la sesión', err);
        this.loadError =
          err?.status === 0
            ? 'No hay conexión con el servidor. Revisá que el backend esté levantado.'
            : `No se pudo cargar la sesión (HTTP ${err?.status ?? '?'}): ${
                err?.error?.message ?? 'error desconocido'
              }`;
      },
    });

    this.api.getAppearanceOptions().subscribe({
      next: (options) => (this.appearanceOptions = options),
      error: () => (this.appearanceOptions = null),
    });
  }

  ngOnDestroy() {
    this.service.leave();
  }

  onWordClick(wordKey: string) {
    this.service.selectWord(wordKey);
  }

  closeDetails() {
    this.service.clearSelectedWord();
  }

  removeEntry(userId: string) {
    this.service.removeEntry(userId);
  }

  toggleEntries() {
    this.service.setEntriesOpen(!this.entriesOpen);
  }

  finish() {
    this.service.finish();
  }

  reorganize() {
    this.canvas?.forceReflow();
  }

  toggleAppearancePanel() {
    this.showAppearancePanel = !this.showAppearancePanel;
  }

  /** Preview inmediato: el docente ve el cambio sin esperar el round-trip. */
  onAppearancePreview(appearance: ResolvedAppearance) {
    this.previewAppearance = appearance;
  }

  onAppearanceChange(payload: AppearancePayload) {
    this.service.updateAppearance(payload);
    // El broadcast `session:appearance` traerá la versión canónica del servidor
    this.previewAppearance = null;
  }

  exit() {
    this.service.leave();
    this.router.navigate(['/teacher/word-clouds']);
  }

  async downloadJpg() {
    const state = this.state;
    const appearance = this.appearance;
    if (!state.cloud || !appearance) return;

    this.downloading = true;
    this.downloadError = null;

    try {
      await exportCloudAsJpg({
        words: state.cloud.words,
        maxCount: state.cloud.maxCount,
        layoutSeed: state.cloud.layoutSeed,
        appearance,
        watermark: buildWatermark({
          studentName: state.title,
          prompt: state.prompt ?? '',
          finishedAtLabel: state.finishedAtLabel,
        }),
        fileName: `nube-${(state.title ?? 'palabras').replace(/\s+/g, '-').toLowerCase()}.jpg`,
      });
    } catch (err: any) {
      this.downloadError = err?.message ?? 'No se pudo generar la imagen';
    } finally {
      this.downloading = false;
    }
  }

  downloadExcel() {
    const id = this.sessionId;
    if (!id) return;

    this.api.downloadExcel(id).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = `${(this.state.title ?? 'nube-de-palabras')
          .replace(/[^\w\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-')}.xlsx`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      },
      error: () => (this.downloadError = 'No se pudo descargar el sumario'),
    });
  }
}
