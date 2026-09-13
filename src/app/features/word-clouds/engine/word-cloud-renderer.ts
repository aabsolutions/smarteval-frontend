import { Placement } from './word-cloud-layout';
import { ResolvedAppearance, WatermarkInfo } from '../models/word-cloud.model';

/**
 * Dibujo de la nube sobre Canvas 2D.
 *
 * Canvas y no SVG por una razón concreta: el export a JPG sale del mismo buffer
 * que ya se está pintando (`toBlob`), sin re-parsear DOM, sin discrepancias de
 * fuentes y sin una sola dependencia nueva (ni html2canvas ni dom-to-image).
 * El precio es hit-testing y a11y manuales; los AABB ya los da el packer y la
 * accesibilidad se compensa con una lista visually-hidden al lado del canvas.
 */

export interface RenderOptions {
  appearance: ResolvedAppearance;
  backgroundImage?: HTMLImageElement | null;
  /** Palabra bajo el mouse: se realza. */
  hoveredKey?: string | null;
  watermark?: WatermarkInfo | null;
  /** Opacidad por palabra, para el fade-in de las nuevas. */
  opacityOf?: (key: string) => number;
}

export const WATERMARK_BAND_HEIGHT = 90;

/** Carga una imagen lista para canvas SIN contaminarlo. */
export function loadCrossOriginImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    // crossOrigin ANTES de src, siempre. Al revés el navegador ya arrancó la
    // request sin CORS, el canvas queda tainted y toBlob tira SecurityError.
    // Cloudinary responde Access-Control-Allow-Origin: *, así que alcanza.
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`No se pudo cargar la imagen: ${url}`));
    img.src = url;
  });
}

/**
 * Espera a que la fuente esté REALMENTE disponible.
 * Sin esto, `measureText` mide con la fuente de fallback, todo el packing queda
 * mal y la nube "salta" cuando la real termina de cargar.
 */
export async function ensureFontReady(fontFamily: string, sizes: number[] = [48]): Promise<void> {
  if (typeof document === 'undefined' || !document.fonts) return;
  try {
    await Promise.all(sizes.map((size) => document.fonts.load(`700 ${size}px "${fontFamily}"`)));
    await document.fonts.ready;
  } catch {
    // fuente no disponible: seguimos con el fallback del stack
  }
}

/** Medición con la fuente real; la inyectamos en el packer. */
export function createMeasurer(ctx: CanvasRenderingContext2D, fontStack: string) {
  return (text: string, fontSize: number) => {
    ctx.font = `700 ${fontSize}px ${fontStack}`;
    const metrics = ctx.measureText(text);
    // actualBoundingBox da la caja real de los glifos: con `fontSize` a secas
    // las palabras sin ascendentes ni descendentes dejan huecos enormes.
    const ascent = metrics.actualBoundingBoxAscent || fontSize * 0.75;
    const descent = metrics.actualBoundingBoxDescent || fontSize * 0.25;
    return { width: metrics.width, height: ascent + descent };
  };
}

/** Configura el canvas a devicePixelRatio: sin esto, en proyector o retina sale borroso. */
export function setupCanvas(
  canvas: HTMLCanvasElement,
  cssWidth: number,
  cssHeight: number,
  dpr = window.devicePixelRatio || 1,
): CanvasRenderingContext2D {
  canvas.width = Math.round(cssWidth * dpr);
  canvas.height = Math.round(cssHeight * dpr);
  canvas.style.width = `${cssWidth}px`;
  canvas.style.height = `${cssHeight}px`;

  const ctx = canvas.getContext('2d')!;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);
  return ctx;
}

/** Dibuja la imagen de fondo con matemática de `cover`, sin deformarla. */
function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number,
) {
  const scale = Math.max(width / img.width, height / img.height);
  const w = img.width * scale;
  const h = img.height * scale;
  ctx.drawImage(img, (width - w) / 2, (height - h) / 2, w, h);
}

export function renderCloud(
  ctx: CanvasRenderingContext2D,
  placements: Placement[],
  width: number,
  height: number,
  options: RenderOptions,
) {
  const { appearance, backgroundImage, hoveredKey, watermark, opacityOf } = options;

  ctx.clearRect(0, 0, width, height);

  // SIEMPRE pintar el color primero. JPEG no tiene canal alpha: si el fondo es
  // un PNG transparente y no rellenamos, esas zonas salen NEGRAS en el export.
  ctx.fillStyle = appearance.backgroundColor || '#FFFFFF';
  ctx.fillRect(0, 0, width, height);

  if (backgroundImage) {
    drawCover(ctx, backgroundImage, width, height);

    if (appearance.backgroundDim > 0) {
      ctx.fillStyle = `rgba(0, 0, 0, ${appearance.backgroundDim})`;
      ctx.fillRect(0, 0, width, height);
    }
  }

  const palette = appearance.palette?.length ? appearance.palette : ['#111827'];

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  placements.forEach((p) => {
    const opacity = opacityOf ? opacityOf(p.key) : 1;
    if (opacity <= 0) return;

    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.translate(p.x, p.y);
    if (p.rotation === 90) ctx.rotate(-Math.PI / 2);

    ctx.font = `700 ${p.fontSize}px ${appearance.fontStack}`;
    ctx.fillStyle = palette[p.colorIndex % palette.length];

    if (hoveredKey === p.key) {
      // Realce del hover: halo, no cambio de color (el color es semántico y
      // viene del servidor; cambiarlo rompería la paridad con el celular)
      ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
      ctx.shadowBlur = 18;
    }

    ctx.fillText(p.text, 0, 0);
    ctx.restore();
  });

  if (watermark) {
    drawWatermark(ctx, width, height, watermark);
  }
}

export function drawWatermark(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  watermark: WatermarkInfo,
) {
  const bandTop = height - WATERMARK_BAND_HEIGHT;

  ctx.save();
  ctx.globalAlpha = 1;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
  ctx.fillRect(0, bandTop, width, WATERMARK_BAND_HEIGHT);

  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  ctx.font = '600 26px system-ui, sans-serif';
  ctx.fillText(watermark.studentLine, width / 2, bandTop + 30);

  ctx.font = '400 20px system-ui, sans-serif';
  ctx.fillText(watermark.promptLine, width / 2, bandTop + 62);

  ctx.restore();
}
