import Image, { type StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';

interface BackgroundImageProps {
  image: StaticImageData;
  sizes: string;
  priority?: boolean;
  /**
   * Fixed-background parallax (like CSS `background-attachment: fixed`): the
   * photo stays still in the viewport while the section scrolls over it.
   */
  parallax?: boolean;
  className?: string;
  /** Classes for the <img> itself, e.g. `object-left` to pin the focal point. */
  imageClassName?: string;
}

/**
 * Decorative photo that fills its nearest positioned ancestor.
 *
 * Parallax uses the clip-path + fixed-layer technique: the photo layer is
 * `position: fixed` (pinned to the viewport) and this wrapper's
 * `clip-path: inset(0)` clips it to the section's bounds. No JS or scroll
 * listeners, and unlike `background-attachment: fixed` it works on iOS Safari
 * and keeps next/image optimization. Users who prefer reduced motion get a
 * normal, scrolling image.
 *
 * Note: an ancestor with `transform`, `filter`, `perspective`, `contain` or
 * `will-change` would become the fixed layer's containing block and break this.
 */
export function BackgroundImage({
  image,
  sizes,
  priority = false,
  parallax = false,
  className,
  imageClassName,
}: BackgroundImageProps) {
  return (
    <div
      aria-hidden
      data-parallax={parallax || undefined}
      className={cn('absolute inset-0', parallax && '[clip-path:inset(0)]', className)}
    >
      <div
        data-parallax-layer={parallax || undefined}
        className={cn('inset-0', parallax ? 'fixed motion-reduce:absolute' : 'absolute')}
      >
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          placeholder="blur"
          sizes={sizes}
          className={cn('object-cover', imageClassName)}
        />
      </div>
    </div>
  );
}
