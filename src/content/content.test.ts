import { describe, expect, it } from 'vitest';

import { experience } from './experience';
import { getProjectBySlug, projectCategories, projects } from './projects';
import { projectSchema } from './schema';

describe('projects content', () => {
  it('has unique slugs', () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('gives every category at least one project', () => {
    for (const category of projectCategories) {
      expect(projects.some((p) => p.categories.includes(category))).toBe(true);
    }
  });

  it('uses https for every external link', () => {
    for (const { links } of projects) {
      for (const url of [links.live, links.code].filter(Boolean)) {
        expect(new URL(url!).protocol).toBe('https:');
      }
    }
  });

  it('looks projects up by slug', () => {
    expect(getProjectBySlug('delano-bats')?.title).toBe('Delano Bats');
    expect(getProjectBySlug('missing')).toBeUndefined();
  });
});

describe('projectSchema', () => {
  const image = { src: '/a.png', width: 10, height: 10 };
  const valid = {
    slug: 'my-project',
    title: 'My Project',
    summary: 'A thing.',
    categories: ['Websites & CMS'],
    image: { src: image, alt: 'Screenshot' },
    details: [{ label: 'Client', value: 'Me' }],
    body: ['Paragraph.'],
  };

  it('applies defaults for optional fields', () => {
    const parsed = projectSchema.parse(valid);
    expect(parsed.highlights).toEqual([]);
    expect(parsed.highlightsTitle).toBe('Key features');
    expect(parsed.links).toEqual({});
  });

  it('rejects a non-kebab-case slug', () => {
    expect(projectSchema.safeParse({ ...valid, slug: 'My Project' }).success).toBe(false);
  });

  it('rejects an unknown category', () => {
    expect(projectSchema.safeParse({ ...valid, categories: ['Games'] }).success).toBe(false);
  });

  it('requires a statically imported image with alt text', () => {
    expect(
      projectSchema.safeParse({ ...valid, image: { src: 'https://x.dev/a.png', alt: 'A' } })
        .success,
    ).toBe(false);
    expect(projectSchema.safeParse({ ...valid, image: { src: image, alt: '' } }).success).toBe(
      false,
    );
  });
});

describe('experience content', () => {
  it('lists the current role first', () => {
    expect(experience[0]?.end).toBe('Present');
  });
});
