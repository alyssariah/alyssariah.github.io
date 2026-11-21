import Image from 'next/image';

import psychology from '@/assets/backgrounds/psychology.jpg';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { homeContent } from '@/content/home';

export function AboutPreview() {
  const { title, lead, body } = homeContent.about;
  return (
    <section aria-labelledby="about-heading" className="py-20 sm:py-24">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionTitle id="about-heading" title={title} align="left" />
          <p className="-mt-6 text-muted italic">{lead}</p>
          <p className="mt-6 text-muted">{body}</p>
        </div>
        <Image
          src={psychology}
          alt="Writing notes at a desk with a cup of coffee"
          placeholder="blur"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[4/3] w-full rounded-lg object-cover shadow-lg"
        />
      </Container>
    </section>
  );
}
