import { PublicWord, ResolvedAppearance, WatermarkInfo } from '../models/word-cloud.model';
import { WordCloudLayout } from './word-cloud-layout';
import {
  createMeasurer,
  drawWatermark,
  ensureFontReady,
  loadCrossOriginImage,
  renderCloud,
  WATERMARK_BAND_HEIGHT,
} from './word-cloud-renderer';

export const EXPORT_WIDTH = 1920;
export const EXPORT_HEIGHT = 1080;

export interface ExportOptions {
  words: PublicWord[];
  maxCount: number;
  layoutSeed: number;
  appearance: ResolvedAppearance;
  watermark?: WatermarkInfo | null;
  fileName?: string;
  quality?: number;
}

/**
 * Render OFFSCREEN a resolución fija, no captura del canvas en pantalla.
 *
 * El canvas visible está dimensionado al viewport: en un celular daría un JPG de
 * 380px de ancho. Así que armamos uno de 1920×1080 y re-corremos el packer a esas
 * dimensiones con el MISMO layoutSeed — misma semántica, geometría adecuada al
 * formato de salida.
 */
export async function renderCloudToBlob(options: ExportOptions): Promise<Blob> {
  const { words, maxCount, layoutSeed, appearance, watermark } = options;

  const canvas = document.createElement('canvas');
  canvas.width = EXPORT_WIDTH;
  canvas.height = EXPORT_HEIGHT;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('No se pudo crear el contexto de canvas para exportar');

  // Mismo guard que el render en pantalla: si la fuente no cargó, el offscreen
  // mide con el fallback y el JPG sale con otro layout que el que se vio.
  await ensureFontReady(appearance.fontFamily, [32, 48, 96]);

  let backgroundImage: HTMLImageElement | null = null;
  if (appearance.backgroundImageUrl) {
    try {
      backgroundImage = await loadCrossOriginImage(appearance.backgroundImageUrl);
    } catch {
      // Sin fondo es mejor que sin descarga: seguimos con el color plano
      backgroundImage = null;
    }
  }

  // El área útil excluye la banda de marca de agua, o las palabras quedan tapadas
  const usableHeight = watermark ? EXPORT_HEIGHT - WATERMARK_BAND_HEIGHT : EXPORT_HEIGHT;

  const layout = new WordCloudLayout({
    width: EXPORT_WIDTH,
    height: usableHeight,
    // El canvas de export es mucho más grande que el de pantalla: la fuente base
    // escala con él, si no la nube queda como una islita en el medio.
    baseFontSize: Math.round(appearance.baseFontSize * 1.6),
    seed: layoutSeed,
  });

  const measure = createMeasurer(ctx, appearance.fontStack);
  const placements = layout.reflow(
    words.map((w) => ({ ...w })),
    maxCount,
    measure,
  );

  renderCloud(ctx, placements, EXPORT_WIDTH, usableHeight, {
    appearance,
    backgroundImage,
  });

  // El fondo de la banda se pinta sobre el canvas completo, después de las palabras
  if (watermark) {
    // Rellenar la franja con el color de fondo antes de la banda: el reflow usó
    // solo `usableHeight`, así que abajo quedó transparente → negro en JPEG.
    ctx.fillStyle = appearance.backgroundColor || '#FFFFFF';
    ctx.fillRect(0, usableHeight, EXPORT_WIDTH, EXPORT_HEIGHT - usableHeight);
    drawWatermark(ctx, EXPORT_WIDTH, EXPORT_HEIGHT, watermark);
  }

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        // Si el fondo se cargó sin CORS el canvas quedó tainted y toBlob da null
        else reject(new Error('No se pudo generar la imagen (canvas contaminado)'));
      },
      'image/jpeg',
      options.quality ?? 0.92,
    );
  });
}

/** Dispara la descarga en el navegador y libera la object URL. */
export function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  // El revoke inmediato aborta la descarga en algunos navegadores
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function exportCloudAsJpg(options: ExportOptions): Promise<void> {
  const blob = await renderCloudToBlob(options);
  downloadBlob(blob, options.fileName ?? 'nube-de-palabras.jpg');
}

/**
 * Arma la banda de marca de agua.
 * `finishedAtLabel` viene del SERVIDOR: el JPG del alumno y el del docente tienen
 * que decir exactamente lo mismo, sin depender del reloj ni la zona del dispositivo.
 */
export function buildWatermark(params: {
  studentName?: string;
  username?: string;
  groupName?: string;
  prompt: string;
  finishedAtLabel: string | null;
}): WatermarkInfo {
  const identity = [params.studentName, params.username, params.groupName]
    .filter((part) => !!part && part.trim().length > 0)
    .join(' · ');

  const promptParts = [`"${params.prompt}"`];
  if (params.finishedAtLabel) promptParts.push(params.finishedAtLabel);

  return {
    studentLine: identity || 'SmartEval',
    promptLine: promptParts.join(' · '),
  };
}
