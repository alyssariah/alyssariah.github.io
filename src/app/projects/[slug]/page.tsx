import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PageHero } from '@/components/ui/page-hero';
import { getProjectBySlug, projects } from '@/content/projects';
import { CtaBanner } from '@/features/cta/cta-banner';
import { ProjectDetail } from '@/features/projects/project-detail';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/projects/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { images: [{ url: project.image.src.src, alt: project.image.alt }] },
  };
}

export default async function ProjectPage({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero title={project.title} />
      <ProjectDetail project={project} />
      <CtaBanner />
    </>
  );
}
