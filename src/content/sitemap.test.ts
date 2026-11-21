import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { projects } from './projects';
import { siteConfig } from './site';

/**
 * robots.txt and sitemap.xml are static files in public/ (route-handler
 * versions can't be statically exported with Cache Components on). This
 * guards against the sitemap drifting out of date.
 */
const sitemap = readFileSync(join(process.cwd(), 'public/sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>(.+?)<\/loc>/g)].map((m) => new URL(m[1]!).pathname);

describe('public/sitemap.xml', () => {
  it('lists every top-level page', () => {
    for (const { href } of siteConfig.nav) expect(locs).toContain(href);
  });

  it('lists every project case study', () => {
    for (const { slug } of projects) expect(locs).toContain(`/projects/${slug}`);
  });

  it('lists no pages that do not exist', () => {
    const known = new Set([
      ...siteConfig.nav.map((n) => n.href),
      ...projects.map((p) => `/projects/${p.slug}`),
    ]);
    for (const loc of locs) expect(known).toContain(loc);
  });
});
