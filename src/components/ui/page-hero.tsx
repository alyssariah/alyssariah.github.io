import homeBg from '@/assets/backgrounds/home-bg.jpg';

import { ImageBanner } from './image-banner';

interface PageHeroProps {
  title: string;
  description?: string;
}

/** Banner at the top of inner pages (About, Projects, Contact…). */
export function PageHero({ title, description }: PageHeroProps) {
  return (
    <ImageBanner image={homeBg} priority parallax className="min-h-[260px] py-16">
      <h1 className="text-4xl sm:text-5xl">{title}</h1>
      {description && <p className="mx-auto mt-5 max-w-2xl text-muted">{description}</p>}
    </ImageBanner>
  );
}
