import { CloudWord, fontSizeFor, MeasureFn, mulberry32, WordCloudLayout } from './word-cloud-layout';

/**
 * Medición determinista: ancho proporcional a los caracteres, alto al fontSize.
 * Con esto el packer se testea sin canvas, que es justamente para lo que la
 * medición entra inyectada.
 */
const measure: MeasureFn = (text, fontSize) => ({
  width: text.length * fontSize * 0.55,
  height: fontSize,
});

function word(key: string, count: number, rotation: 0 | 90 = 0): CloudWord {
  return { key, text: key, count, weight: 1, colorIndex: 0, rotation };
}

function overlaps(a: any, b: any): boolean {
  return (
    Math.abs(a.x - b.x) * 2 < a.width + b.width &&
    Math.abs(a.y - b.y) * 2 < a.height + b.height
  );
}

describe('WordCloudLayout', () => {
  const options = { width: 1200, height: 700, baseFontSize: 44, seed: 918273 };

  it('es determinista: mismo input y misma semilla dan el mismo output', () => {
    const words = [word('innovacion', 5), word('equipo', 3), word('futuro', 1)];

    const first = new WordCloudLayout(options).reflow(words, 5, measure);
    const second = new WordCloudLayout(options).reflow(words, 5, measure);

    expect(first.length).toBe(second.length);
    first.forEach((p, i) => {
      expect(p.key).toBe(second[i].key);
      expect(p.x).toBeCloseTo(second[i].x, 6);
      expect(p.y).toBeCloseTo(second[i].y, 6);
      expect(p.fontSize).toBe(second[i].fontSize);
    });
  });

  it('no deja AABB solapados', () => {
    const words = Array.from({ length: 40 }, (_, i) => word(`palabra-${i}`, 40 - i));
    const placed = new WordCloudLayout(options).reflow(words, 40, measure);

    expect(placed.length).toBeGreaterThan(0);
    for (let i = 0; i < placed.length; i++) {
      for (let j = i + 1; j < placed.length; j++) {
        expect(overlaps(placed[i], placed[j]))
          .withContext(`${placed[i].key} solapa con ${placed[j].key}`)
          .toBe(false);
      }
    }
  });

  it('la inserción incremental NO mueve ninguna palabra existente', () => {
    const layout = new WordCloudLayout(options);
    const initial = [word('innovacion', 3), word('equipo', 2)];
    layout.reflow(initial, 3, measure);

    const before = layout.snapshot();

    const diff = layout.update([...initial, word('nueva', 1)], 3, measure);

    expect(diff.added.length).toBe(1);
    expect(diff.added[0].key).toBe('nueva');

    before.forEach((placement, key) => {
      const after = layout.snapshot().get(key)!;
      expect(after.x).toBe(placement.x);
      expect(after.y).toBe(placement.y);
    });
  });

  it('libera las celdas de una palabra eliminada', () => {
    const layout = new WordCloudLayout(options);
    layout.reflow([word('a', 2), word('b', 1)], 2, measure);

    const diff = layout.update([word('a', 2)], 2, measure);

    expect(diff.removed).toEqual(['b']);
    expect(layout.placed.map((p) => p.key)).toEqual(['a']);
  });

  it('escala con la raíz de la frecuencia y respeta los clamps', () => {
    const base = 44;

    // 10× la frecuencia NO es 10× el tamaño: con escala lineal el área
    // (que crece al cuadrado) reventaría el canvas
    const small = fontSizeFor(1, 10, base);
    const big = fontSizeFor(10, 10, base);
    expect(big / small).toBeLessThan(2);

    expect(fontSizeFor(0, 10, base)).toBeGreaterThanOrEqual(Math.round(base * 0.6));
    expect(fontSizeFor(1000, 1000, base)).toBeLessThanOrEqual(Math.round(base * 3.2));
  });

  it('rota el AABB cuando la palabra va a 90°', () => {
    const layout = new WordCloudLayout(options);
    const [placed] = layout.reflow([word('vertical', 1, 90)], 1, measure);

    const metrics = measure('vertical', placed.fontSize);
    expect(placed.width).toBeCloseTo(metrics.height, 6);
    expect(placed.height).toBeCloseTo(metrics.width, 6);
  });

  it('hitTest encuentra la palabra bajo el punto', () => {
    const layout = new WordCloudLayout(options);
    const [placed] = layout.reflow([word('innovacion', 1)], 1, measure);

    expect(layout.hitTest(placed.x, placed.y)?.key).toBe('innovacion');
    expect(layout.hitTest(0, 0)).toBeNull();
  });

  it('marca needsReflow cuando demasiadas palabras quedaron sucias', () => {
    // Canvas apretado a propósito: al crecer, casi ninguna entra donde está
    const tight = new WordCloudLayout({ ...options, width: 320, height: 200 });
    const words = Array.from({ length: 12 }, (_, i) => word(`w${i}`, 1));
    tight.reflow(words, 1, measure);

    const grown = words.map((w) => ({ ...w, count: 9 }));
    const diff = tight.update(grown, 9, measure);

    expect(diff.dirtyRatio).toBeGreaterThan(0);
    expect(diff.needsReflow).toBe(diff.dirtyRatio > 0.3);
  });
});

describe('mulberry32', () => {
  it('da la misma secuencia para la misma semilla', () => {
    const a = mulberry32(918273);
    const b = mulberry32(918273);
    for (let i = 0; i < 20; i++) {
      expect(a()).toBe(b());
    }
  });

  it('devuelve valores en [0, 1)', () => {
    const rand = mulberry32(42);
    for (let i = 0; i < 200; i++) {
      const value = rand();
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(1);
    }
  });
});
