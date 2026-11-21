'use client';

import { useEffect, useState } from 'react';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

interface TypewriterProps {
  strings: readonly string[];
  typeMs?: number;
  deleteMs?: number;
  pauseMs?: number;
}

/**
 * Types and deletes each string in a loop. Purely decorative: the text is
 * aria-hidden, so screen readers get the static heading instead. Users who
 * prefer reduced motion see the first string without animation.
 */
export function Typewriter({
  strings,
  typeMs = 80,
  deleteMs = 40,
  pauseMs = 1500,
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const animate = !usePrefersReducedMotion();

  const current = strings[index % strings.length] ?? '';

  useEffect(() => {
    if (!animate) return;

    const doneTyping = !deleting && length === current.length;
    const doneDeleting = deleting && length === 0;

    const delay = doneTyping ? pauseMs : deleting ? deleteMs : typeMs;
    const timer = setTimeout(() => {
      if (doneTyping) setDeleting(true);
      else if (doneDeleting) {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else setLength((l) => l + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [animate, current, deleting, length, typeMs, deleteMs, pauseMs]);

  return (
    <span aria-hidden>
      {animate ? current.slice(0, length) : strings[0]}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-current align-middle">
        &nbsp;
      </span>
    </span>
  );
}
