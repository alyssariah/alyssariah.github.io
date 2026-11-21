import { AboutPreview } from '@/features/about/about-preview';
import { CtaBanner } from '@/features/cta/cta-banner';
import { FunFactsSection } from '@/features/fun-facts/fun-facts-section';
import { Hero } from '@/features/hero/hero';
import { QualitySection } from '@/features/quality/quality-section';
import { SkillsSection } from '@/features/skills/skills-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <QualitySection />
      <SkillsSection />
      <CtaBanner />
      <FunFactsSection />
    </>
  );
}
