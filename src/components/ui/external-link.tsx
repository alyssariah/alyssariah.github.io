import type { ComponentProps } from 'react';

type ExternalLinkProps = Omit<ComponentProps<'a'>, 'target' | 'rel'>;

/** Anchor that opens in a new tab with safe rel attributes. */
export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
