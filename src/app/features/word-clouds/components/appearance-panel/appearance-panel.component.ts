import { Component, EventEmitter, Input, OnDestroy, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AppearanceOptions,
  AppearancePayload,
  ResolvedAppearance,
} from '../../models/word-cloud.model';
import { WordCloudApiService } from '../../services/word-cloud-api.service';

const EMIT_DEBOUNCE_MS = 400;

/**
 * Panel de apariencia del docente.
 *
 * Un color picker dispara `input` decenas de veces por segundo. La regla acá es:
 * el cambio se aplica LOCALMENTE en el acto (preview sin red) y recién se emite
 * con debounce. Del lado del servidor hay además un guard de 1 persistencia/seg.
 */
@Component({
  selector: 'app-appearance-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appearance-panel.component.html',
  styleUrls: ['./appearance-panel.component.css'],
})
export class AppearancePanelComponent implements OnDestroy {
  private api = inject(WordCloudApiService);

  @Input() sessionId!: string;
  @Input() appearance: ResolvedAppearance | null = null;
  @Input() options: AppearanceOptions | null = null;

  /** Preview inmediato, sin esperar el round-trip. */
  @Output() previewChange = new EventEmitter<ResolvedAppearance>();
  /** Persistencia real, ya debounced. */
  @Output() appearanceChange = new EventEmitter<AppearancePayload>();

  uploading = false;
  uploadError: string | null = null;

  private debounceId: any = null;
  private pending: AppearancePayload = {};

  ngOnDestroy() {
    if (this.debounceId) clearTimeout(this.debounceId);
  }

  /** Aplica el cambio localmente ya, y lo agenda para emitir. */
  private patch(change: AppearancePayload, immediate = false) {
    if (!this.appearance) return;

    const preview: ResolvedAppearance = { ...this.appearance, ...(change as any) };

    if (change.paletteKey && this.options) {
      const palette = this.options.palettes.find((p) => p.key === change.paletteKey);
      if (palette) preview.palette = palette.colors;
    }
    if (change.customPalette?.length) {
      preview.palette = change.customPalette;
    }
    if (change.backgroundPresetKey && this.options) {
      const preset = this.options.presets.find((p) => p.key === change.backgroundPresetKey);
      if (preset) {
        preview.backgroundImageUrl = preset.url || undefined;
        preview.backgroundColor = preset.fallbackColor;
      }
    }

    this.appearance = preview;
    this.previewChange.emit(preview);

    this.pending = { ...this.pending, ...change };

    if (this.debounceId) clearTimeout(this.debounceId);
    if (immediate) {
      this.flush();
    } else {
      this.debounceId = setTimeout(() => this.flush(), EMIT_DEBOUNCE_MS);
    }
  }

  private flush() {
    if (Object.keys(this.pending).length === 0) return;
    this.appearanceChange.emit(this.pending);
    this.pending = {};
  }

  // ═══ Handlers ═══

  /** El picker dispara mientras arrastrás: preview sí, red no. */
  onColorInput(value: string) {
    this.patch({ backgroundType: 'color', backgroundColor: value, backgroundPresetKey: undefined });
  }

  /** Soltar el picker (change/blur) sí persiste de inmediato. */
  onColorCommit(value: string) {
    this.patch(
      { backgroundType: 'color', backgroundColor: value, backgroundPresetKey: undefined },
      true,
    );
  }

  onPresetSelect(key: string) {
    const preset = this.options?.presets.find((p) => p.key === key);
    this.patch(
      {
        backgroundType: 'preset',
        backgroundPresetKey: key,
        backgroundDim: preset?.suggestedDim ?? this.appearance?.backgroundDim ?? 0,
      },
      true,
    );
  }

  onDimInput(value: number) {
    this.patch({ backgroundDim: Number(value) });
  }

  onDimCommit(value: number) {
    this.patch({ backgroundDim: Number(value) }, true);
  }

  onFontSelect(font: string) {
    this.patch({ fontFamily: font }, true);
  }

  onBaseSizeInput(value: number) {
    this.patch({ baseFontSize: Number(value) });
  }

  onBaseSizeCommit(value: number) {
    this.patch({ baseFontSize: Number(value) }, true);
  }

  onPaletteSelect(key: string) {
    this.patch({ paletteKey: key, customPalette: [] }, true);
  }

  async onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.uploading = true;
    this.uploadError = null;

    this.api.uploadBackground(this.sessionId, file).subscribe({
      next: (session) => {
        this.uploading = false;
        input.value = '';
        // El servidor ya persistió url + publicId; solo hay que reflejarlo.
        // No emitimos appearanceChange: sería un segundo write al pedo.
        if (this.appearance) {
          this.appearance = {
            ...this.appearance,
            backgroundType: 'image',
            backgroundImageUrl: session.appearance.backgroundImageUrl,
            backgroundPresetKey: undefined,
          };
          this.previewChange.emit(this.appearance);
        }
      },
      error: (err) => {
        this.uploading = false;
        this.uploadError = err?.error?.message ?? 'No se pudo subir la imagen';
      },
    });
  }

  isPaletteActive(key: string): boolean {
    return this.appearance?.paletteKey === key;
  }

  isPresetActive(key: string): boolean {
    return (
      this.appearance?.backgroundType === 'preset' && this.appearance?.backgroundPresetKey === key
    );
  }
}
