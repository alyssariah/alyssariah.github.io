'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';

import { cn } from '@/lib/utils';

interface Principle {
  name: string;
  content: string;
}

/** Accessible tabs (WAI-ARIA pattern): arrow keys, Home and End move between tabs. */
export function PrinciplesTabs({ items }: { items: readonly Principle[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const focusTab = (i: number) => {
    const next = (i + items.length) % items.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const keys: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: items.length - 1,
    };
    const target = keys[e.key];
    if (target === undefined) return;
    e.preventDefault();
    focusTab(target);
  };

  return (
    <div>
      <div role="tablist" aria-label="Vision, mission and approach" className="flex justify-center">
        {items.map((item, i) => (
          <button
            key={item.name}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`${baseId}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`${baseId}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={onKeyDown}
            className={cn(
              'border px-6 py-2.5 text-sm tracking-wider uppercase transition-colors first:rounded-l-md last:rounded-r-md',
              i === active
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border text-muted hover:text-primary',
            )}
          >
            {item.name}
          </button>
        ))}
      </div>
      {items.map((item, i) => (
        <div
          key={item.name}
          id={`${baseId}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={i !== active}
          className="mx-auto mt-8 max-w-3xl text-center text-muted"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
