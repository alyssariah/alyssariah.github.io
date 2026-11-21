import { describe, expect, it } from 'vitest';

import { swing } from './easing';

describe('swing', () => {
  it('starts at 0, ends at 1 and is halfway at the midpoint', () => {
    expect(swing(0)).toBe(0);
    expect(swing(1)).toBe(1);
    expect(swing(0.5)).toBeCloseTo(0.5);
  });

  it('eases in: slower than linear early on', () => {
    expect(swing(0.2)).toBeLessThan(0.2);
  });

  it('clamps out-of-range progress', () => {
    expect(swing(-1)).toBe(0);
    expect(swing(2)).toBe(1);
  });
});
