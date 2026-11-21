import Link from 'next/link';

import { SocialIcon } from '@/components/icons/social-icon';
import { Container } from '@/components/ui/container';
import { ExternalLink } from '@/components/ui/external-link';
import { siteConfig } from '@/content/site';

/** Set at build time in next.config.ts; every deploy rebuilds, so it stays current. */
const copyrightYear = process.env.NEXT_PUBLIC_BUILD_YEAR;

export function SiteFooter() {
  return (
    <footer className="bg-surface py-12 text-sm text-muted">
      <Container className="flex flex-col items-center gap-6">
        <nav aria-label="Footer">
          <ul className="flex gap-8">
            {siteConfig.nav
              .filter((item) => item.href !== '/')
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <ul className="flex gap-5">
          {siteConfig.socials.map((s) => (
            <li key={s.href}>
              <ExternalLink href={s.href} className="block transition-colors hover:text-primary">
                <SocialIcon name={s.icon} className="size-5" />
                <span className="sr-only">{s.label}</span>
              </ExternalLink>
            </li>
          ))}
        </ul>
        <p>
          &copy; {copyrightYear} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
