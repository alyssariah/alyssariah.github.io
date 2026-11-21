import type { Metadata } from 'next';

import { PageHero } from '@/components/ui/page-hero';
import { AboutIntro } from '@/features/about/about-intro';
import { ExperienceTimeline } from '@/features/about/experience-timeline';
import { PrinciplesSection } from '@/features/about/principles-section';
import { CtaBanner } from '@/features/cta/cta-banner';
import { SkillsSection } from '@/features/skills/skills-section';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Lead full-stack engineer with a psychology background, building pipelines, infrastructure, and tools that make developers’ lives easier.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Me" />
      <AboutIntro />
      <ExperienceTimeline />
      <SkillsSection />
      <PrinciplesSection />
      <CtaBanner />
    </>
  );
}
