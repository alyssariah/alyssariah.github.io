import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { siteConfig } from '@/content/site';

import { SiteNav } from './site-nav';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
      <Container className="relative flex min-h-[60px] items-center justify-between">
        <Link href="/" className="text-xl text-primary sm:text-2xl">
          {siteConfig.name}
        </Link>
        <SiteNav />
      </Container>
    </header>
  );
}
