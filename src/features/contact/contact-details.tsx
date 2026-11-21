import { Mail } from 'lucide-react';

import { SocialIcon } from '@/components/icons/social-icon';
import { ButtonLink } from '@/components/ui/button-link';
import { Container } from '@/components/ui/container';
import { ExternalLink } from '@/components/ui/external-link';
import { siteConfig } from '@/content/site';

export function ContactDetails() {
  return (
    <Container className="max-w-3xl py-20 text-center">
      <h2 className="text-2xl font-semibold tracking-wide uppercase">Let&apos;s work together</h2>
      <p className="mt-4 text-muted">
        Whether you need a new website, a platform built end to end, or help with cloud
        infrastructure and CI/CD — I&apos;d love to hear about it. I&apos;m also open to
        forward-deployed, founding, and senior full-stack roles.
      </p>
      <ButtonLink href={`mailto:${siteConfig.email}`} className="mt-8">
        Email me
      </ButtonLink>
      <ul className="mt-10 flex flex-col items-center gap-4 text-muted sm:flex-row sm:justify-center sm:gap-10">
        <li className="flex items-center gap-2">
          <Mail aria-hidden className="size-5 text-primary" />
          <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
            {siteConfig.email}
          </a>
        </li>
        {siteConfig.socials.map((s) => (
          <li key={s.href}>
            <ExternalLink href={s.href} className="flex items-center gap-2 hover:text-primary">
              <SocialIcon name={s.icon} className="size-5 text-primary" />
              {s.label}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </Container>
  );
}
