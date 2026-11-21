'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/utils';

export interface CarouselSlide {
  image: StaticImageData;
  alt: string;
  caption: string;
}

/** Manually advanced photo carousel (no autoplay, so it never moves unexpectedly). */
export function PhotoCarousel({ slides }: { slides: readonly CarouselSlide[] }) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const slide = slides[index];
  if (!slide) return null;

  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  return (
    <figure
      aria-roledescription="carousel"
      aria-label="Photos from outside of work"
      className="rounded-lg border border-border bg-background p-4 shadow-sm"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded">
        <Image
          key={index}
          src={slide.image}
          alt={slide.alt}
          placeholder="blur"
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption aria-live="polite" className="mt-4 min-h-12 text-center text-muted italic">
        {slide.caption}
      </figcaption>
      <div className="mt-3 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          className="rounded-full p-1.5 text-primary hover:bg-surface"
        >
          <ChevronLeft aria-hidden className="size-5" />
          <span className="sr-only">Previous photo</span>
        </button>
        <ol className="flex gap-2">
          {slides.map((s, i) => (
            <li key={s.alt}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-current={i === index ? 'true' : undefined}
                className={cn(
                  'block size-2.5 rounded-full transition-colors',
                  i === index ? 'bg-primary' : 'bg-border hover:bg-muted',
                )}
              >
                <span className="sr-only">
                  Photo {i + 1} of {count}
                </span>
              </button>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={() => go(1)}
          className="rounded-full p-1.5 text-primary hover:bg-surface"
        >
          <ChevronRight aria-hidden className="size-5" />
          <span className="sr-only">Next photo</span>
        </button>
      </div>
    </figure>
  );
}
