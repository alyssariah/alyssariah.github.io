/** jQuery's "swing" easing (slow start and end), as used by the Hugo counters. */
export function swing(progress: number): number {
  const p = Math.min(Math.max(progress, 0), 1);
  return 0.5 - Math.cos(p * Math.PI) / 2;
}
