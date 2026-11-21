import type { Metadata } from 'next';

import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/ui/page-hero';
import { projectCategories, projects } from '@/content/projects';
import { ProjectGallery } from '@/features/projects/project-gallery';

const description =
  'A diverse range of projects, from responsive marketing sites to full-stack web applications — each combining strong engineering with a keen eye for design.';

export const metadata: Metadata = { title: 'My Projects', description };

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="My Projects" description={description} />
      <Container className="py-16">
        <ProjectGallery projects={projects} categories={projectCategories} />
      </Container>
    </>
  );
}
