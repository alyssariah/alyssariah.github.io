'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { siteConfig } from '@/content/site';
import { cn } from '@/lib/utils';

export function isActivePath(pathname: string, href: string): boolean {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

/** Primary navigation: highlights the current page and collapses on mobile. */
export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Primary">
      <button
        type="button"
        className="p-2 text-primary md:hidden"
        aria-expanded={open}
        aria-controls="primary-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X aria-hidden /> : <Menu aria-hidden />}
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
      </button>
      <ul
        id="primary-menu"
        className={cn(
          'absolute inset-x-0 top-full flex-col border-b border-border bg-background px-4 pb-4 md:static md:flex md:flex-row md:gap-8 md:border-0 md:p-0',
          open ? 'flex' : 'hidden',
        )}
      >
        {siteConfig.nav.map((item) => {
          const active = isActivePath(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  'block py-2 text-sm tracking-wide uppercase transition-colors hover:text-primary',
                  active ? 'font-semibold text-foreground' : 'text-muted',
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
