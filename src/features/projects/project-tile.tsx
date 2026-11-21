import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/content/schema';

/** Screenshot tile that reveals the title and summary on hover/focus. */
export function ProjectTile({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden bg-surface"
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        placeholder="blur"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-foreground/85 p-6 text-center text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-xs tracking-widest uppercase">{project.categories.join(' · ')}</p>
      </div>
      <span className="sr-only">: view case study</span>
    </Link>
  );
}
