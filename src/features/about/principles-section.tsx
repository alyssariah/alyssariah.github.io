import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { aboutContent } from '@/content/about';

import { PrinciplesTabs } from './principles-tabs';

export function PrinciplesSection() {
  return (
    <section aria-labelledby="principles-heading" className="py-20 sm:py-24">
      <Container>
        <SectionTitle id="principles-heading" title="How I Work" />
        <PrinciplesTabs items={aboutContent.principles} />
      </Container>
    </section>
  );
}
