import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { BackgroundImage } from './background-image';

interface ImageBannerProps {
  image: StaticImageData;
  /** Washes the image out so dark text stays readable on top of it. */
  overlay?: boolean;
  priority?: boolean;
  parallax?: boolean;
  className?: string;
  children: ReactNode;
}

/** Full-width section with a background photo and centered content. */
export function ImageBanner({
  image,
  overlay = true,
  priority = false,
  parallax = false,
  className,
  children,
}: ImageBannerProps) {
  return (
    <div
      className={cn('relative isolate flex items-center justify-center overflow-hidden', className)}
    >
      <BackgroundImage
        image={image}
        sizes="100vw"
        priority={priority}
        parallax={parallax}
        className="-z-20"
      />
      {overlay && <div aria-hidden className="absolute inset-0 -z-10 bg-white/75" />}
      <div className="relative w-full px-4 text-center">{children}</div>
    </div>
  );
}
