import {
  Bug,
  CloudUpload,
  Code,
  Database,
  PenTool,
  Server,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { skillsContent, type SkillIcon } from '@/content/skills';

const icons: Record<SkillIcon, LucideIcon> = {
  code: Code,
  server: Server,
  workflow: Workflow,
  bug: Bug,
  database: Database,
  wrench: Wrench,
  'cloud-upload': CloudUpload,
  'pen-tool': PenTool,
};

export function SkillsSection() {
  const { title, description, items } = skillsContent;
  return (
    <section aria-labelledby="skills-heading" className="py-20 sm:py-24">
      <Container>
        <SectionTitle id="skills-heading" title={title} description={description} />
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.name} className="text-center">
                <Icon aria-hidden className="mx-auto size-10 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-sm font-semibold tracking-wide uppercase">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.content}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
