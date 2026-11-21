'use client';

import { useEffect, useRef, useState } from 'react';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { swing } from '@/lib/easing';

interface CountUpProps {
  value: number;
  durationMs?: number;
}

/**
 * Counts from 0 up to `value` once the number scrolls into view, like the Hugo
 * site's counters. Screen readers always get the final value (the animated
 * digits are aria-hidden). With reduced motion — and in the server-rendered
 * HTML — the final value shows immediately.
 */
export function CountUp({ value, durationMs = 1000 }: CountUpProps) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (reducedMotion || !el) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = (now - start) / durationMs;
          setCurrent(Math.floor(swing(progress) * value));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [reducedMotion, value, durationMs]);

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden data-count-up>
        {reducedMotion ? value : current}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
