import type { Project, ProjectCategory } from '@/content/schema';

export type ProjectFilter = ProjectCategory | 'All';

export function filterProjects(projects: readonly Project[], filter: ProjectFilter): Project[] {
  return filter === 'All' ? [...projects] : projects.filter((p) => p.categories.includes(filter));
}
