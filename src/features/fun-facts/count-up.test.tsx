import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { CountUp } from './count-up';

let reducedMotion = false;
let intersect: (visible: boolean) => void = () => {};
let frames: FrameRequestCallback[] = [];

/** Run queued animation frames at the given timestamp. */
function runFrame(time: number) {
  const queued = frames;
  frames = [];
  act(() => queued.forEach((cb) => cb(time)));
}

beforeEach(() => {
  frames = [];
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches: reducedMotion && query.includes('reduce'),
    addEventListener: () => {},
    removeEventListener: () => {},
  }));
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(cb: IntersectionObserverCallback) {
        intersect = (visible) =>
          act(() => cb([{ isIntersecting: visible } as IntersectionObserverEntry], this as never));
      }
      observe() {}
      disconnect() {}
    },
  );
  vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => frames.push(cb));
  vi.stubGlobal('cancelAnimationFrame', () => {});
  vi.spyOn(performance, 'now').mockReturnValue(0);
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  reducedMotion = false;
});

const shown = () => document.querySelector('[data-count-up]')?.textContent;

describe('CountUp', () => {
  it('waits at 0 until scrolled into view, then counts up to the value', () => {
    render(<CountUp value={200} durationMs={1000} />);
    expect(shown()).toBe('0');

    intersect(false);
    expect(frames).toHaveLength(0);

    intersect(true);
    runFrame(500);
    expect(Number(shown())).toBeGreaterThan(0);
    expect(Number(shown())).toBeLessThan(200);

    runFrame(1000);
    expect(shown()).toBe('200');
    expect(frames).toHaveLength(0); // animation finished
  });

  it('always exposes the final value to screen readers', () => {
    render(<CountUp value={217} />);
    expect(screen.getByText('217')).toHaveClass('sr-only');
  });

  it('shows the final value immediately with reduced motion', () => {
    reducedMotion = true;
    render(<CountUp value={99} />);
    expect(shown()).toBe('99');
  });
});
