import type { MetadataRoute } from 'next';

import { projects } from '@/content/projects';
import { getSiteUrl } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const url = (path: string) => new URL(path, base).toString();
  return [
    { url: url('/'), changeFrequency: 'monthly', priority: 1 },
    { url: url('/about'), changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/projects'), changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/contact'), changeFrequency: 'yearly', priority: 0.5 },
    ...projects.map((p) => ({
      url: url(`/projects/${p.slug}`),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
