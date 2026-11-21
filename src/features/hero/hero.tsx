import homeBg from '@/assets/backgrounds/home-bg.jpg';
import { ButtonLink } from '@/components/ui/button-link';
import { ImageBanner } from '@/components/ui/image-banner';
import { homeContent } from '@/content/home';
import { siteConfig } from '@/content/site';

import { Typewriter } from './typewriter';

export function Hero() {
  const { typedStrings, tagline, cta } = homeContent.hero;
  return (
    <ImageBanner image={homeBg} priority parallax className="min-h-[480px] py-24">
      <h1 className="font-display text-[38px] leading-tight sm:text-5xl">
        <span className="sr-only">
          {siteConfig.name}, {siteConfig.role}
        </span>
        <Typewriter strings={typedStrings} />
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-muted">{tagline}</p>
      <ButtonLink href={cta.href} className="mt-10">
        {cta.label}
      </ButtonLink>
    </ImageBanner>
  );
}
