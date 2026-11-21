'use client';

import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { useState, type ReactNode } from 'react';

import { ExternalLink } from '@/components/ui/external-link';
import { cn } from '@/lib/utils';

interface LivePreviewProps {
  url: string;
  title: string;
  /** The static screenshot, shown by default. */
  children: ReactNode;
}

type View = 'screenshot' | 'live';

/**
 * Screenshot by default, with an opt-in "Live site" view that embeds the real
 * site in a browser-style frame. The iframe only loads when requested, so the
 * client site's scripts never slow down the project page on their own.
 */
export function LivePreview({ url, title, children }: LivePreviewProps) {
  const [view, setView] = useState<View>('screenshot');
  const host = new URL(url).host;

  return (
    <div>
      <div role="group" aria-label="Preview mode" className="mb-3 inline-flex">
        {(
          [
            ['screenshot', 'Screenshot'],
            ['live', 'Live site'],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            aria-pressed={view === value}
            onClick={() => setView(value)}
            className={cn(
              'border px-4 py-1.5 text-xs tracking-wider uppercase transition-colors first:rounded-l-md last:rounded-r-md',
              view === value
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border text-muted hover:text-primary',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {view === 'screenshot' ? (
        children
      ) : (
        <div className="overflow-hidden rounded-md border border-border shadow-sm">
          <div className="flex items-center gap-3 border-b border-border bg-surface px-3 py-2">
            <span aria-hidden className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
            </span>
            <span className="flex-1 truncate rounded bg-background px-3 py-1 text-xs text-muted">
              {host}
            </span>
            <ExternalLink
              href={url}
              className="flex items-center gap-1 text-xs text-primary hover:underline"
            >
              <ExternalLinkIcon aria-hidden className="size-3.5" />
              Open
            </ExternalLink>
          </div>
          <iframe
            src={url}
            title={`Live preview of ${title}`}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            referrerPolicy="strict-origin-when-cross-origin"
            className="aspect-[16/10] w-full bg-background"
          />
        </div>
      )}
    </div>
  );
}
