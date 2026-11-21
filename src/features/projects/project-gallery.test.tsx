import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { projectCategories, projects } from '@/content/projects';

import { ProjectGallery } from './project-gallery';

describe('ProjectGallery', () => {
  const renderGallery = () =>
    render(<ProjectGallery projects={projects} categories={projectCategories} />);

  it('shows all projects by default', () => {
    renderGallery();
    expect(screen.getAllByRole('listitem')).toHaveLength(projects.length);
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('filters when a category is selected', async () => {
    renderGallery();
    await userEvent.click(screen.getByRole('button', { name: 'UX & Product Design' }));

    const expected = projects.filter((p) => p.categories.includes('UX & Product Design'));
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(expected.length);
    expect(screen.getByRole('button', { name: 'UX & Product Design' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(within(items[0]!).getByRole('link')).toHaveAttribute(
      'href',
      `/projects/${expected[0]!.slug}`,
    );
  });
});
