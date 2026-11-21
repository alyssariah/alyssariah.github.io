import { describe, expect, it } from 'vitest';

import { isActivePath } from './site-nav';

describe('isActivePath', () => {
  it('matches home only on the exact root', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/about', '/')).toBe(false);
  });

  it('matches a section and its nested pages', () => {
    expect(isActivePath('/projects', '/projects')).toBe(true);
    expect(isActivePath('/projects/delano-bats', '/projects')).toBe(true);
  });

  it('does not match on a shared prefix', () => {
    expect(isActivePath('/projects-archive', '/projects')).toBe(false);
  });
});
