'use client';

import { useState } from 'react';

import type { Project, ProjectCategory } from '@/content/schema';
import { cn } from '@/lib/utils';

import { filterProjects, type ProjectFilter as Filter } from './filter-projects';
import { ProjectTile } from './project-tile';

interface ProjectGalleryProps {
  projects: readonly Project[];
  categories: readonly ProjectCategory[];
}

/** Project grid with category filter buttons. */
export function ProjectGallery({ projects, categories }: ProjectGalleryProps) {
  const [filter, setFilter] = useState<Filter>('All');
  const visible = filterProjects(projects, filter);
  const filters: Filter[] = ['All', ...categories];

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-10 flex flex-wrap justify-center gap-2"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={f === filter}
            onClick={() => setFilter(f)}
            className={cn(
              'rounded border px-5 py-2 text-sm transition-colors',
              f === filter
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border hover:border-primary hover:text-primary',
            )}
          >
            {f}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="sr-only">
        Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
      </p>
      <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.slug}>
            <ProjectTile project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
