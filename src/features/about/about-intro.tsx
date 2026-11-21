import Image from 'next/image';

import aboutBg from '@/assets/backgrounds/about-bg.webp';
import { ButtonLink } from '@/components/ui/button-link';
import { Container } from '@/components/ui/container';
import { aboutContent } from '@/content/about';

export function AboutIntro() {
  const { title, paragraphs, cta } = aboutContent.intro;
  return (
    <section aria-labelledby="intro-heading" className="py-20 sm:py-24">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <Image
          src={aboutBg}
          alt="Taking notes at a desk next to a laptop and coffee"
          placeholder="blur"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="w-full rounded-lg object-cover"
        />
        <div>
          <h2 id="intro-heading" className="text-3xl font-semibold">
            {title}
          </h2>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-6 text-muted">
              {p}
            </p>
          ))}
          <ButtonLink href={cta.href} className="mt-8">
            {cta.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
