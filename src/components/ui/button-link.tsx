import Link from 'next/link';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: 'primary' | 'neutral' | 'outline';
};

const variants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
  neutral: 'bg-muted text-primary-foreground hover:bg-foreground',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground',
} as const;

/** Uppercase, letter-spaced call-to-action link in the site's button style. */
export function ButtonLink({ variant = 'primary', className, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        'inline-block rounded-md px-7 py-3 text-sm tracking-wider uppercase transition-colors',
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
