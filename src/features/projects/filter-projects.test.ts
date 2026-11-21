import { describe, expect, it } from 'vitest';

import { projects } from '@/content/projects';

import { filterProjects } from './filter-projects';

describe('filterProjects', () => {
  it('returns every project for "All"', () => {
    expect(filterProjects(projects, 'All')).toHaveLength(projects.length);
  });

  it('returns only projects in the chosen category', () => {
    const result = filterProjects(projects, 'eCommerce');
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((p) => p.categories.includes('eCommerce'))).toBe(true);
  });

  it('does not mutate the input', () => {
    const copy = [...projects];
    filterProjects(projects, 'UX & Product Design');
    expect(projects).toEqual(copy);
  });
});
