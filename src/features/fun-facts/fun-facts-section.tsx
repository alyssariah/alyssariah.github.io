import { Coffee, Footprints, Glasses, Mountain, type LucideIcon } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { funPhotos } from '@/content/fun-photos';
import { homeContent, type FunFactIcon } from '@/content/home';

import { CountUp } from './count-up';
import { PhotoCarousel } from './photo-carousel';

const icons: Record<FunFactIcon, LucideIcon> = {
  coffee: Coffee,
  mountain: Mountain,
  glasses: Glasses,
  footprints: Footprints,
};

export function FunFactsSection() {
  const { title, body, stats } = homeContent.funFacts;
  return (
    <section aria-labelledby="fun-facts-heading" className="py-20 sm:py-24">
      <Container>
        <SectionTitle id="fun-facts-heading" title={title} description={body} />
        <div className="grid items-center gap-12 md:grid-cols-2">
          <dl className="grid grid-cols-2 gap-10">
            {stats.map((stat) => {
              const Icon = icons[stat.icon];
              return (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <dt className="order-last mt-1 text-sm text-muted">{stat.label}</dt>
                  <dd className="flex flex-col items-center">
                    <Icon aria-hidden className="size-9 text-primary" strokeWidth={1.75} />
                    <span className="mt-3 text-3xl font-semibold">
                      <CountUp value={stat.value} />
                    </span>
                  </dd>
                </div>
              );
            })}
          </dl>
          <PhotoCarousel slides={funPhotos} />
        </div>
      </Container>
    </section>
  );
}
