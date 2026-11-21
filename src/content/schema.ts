import type { StaticImageData } from 'next/image';
import { z } from 'zod';

const staticImageSchema = z.custom<StaticImageData>(
  (value) =>
    typeof value === 'object' &&
    value !== null &&
    'src' in value &&
    'width' in value &&
    'height' in value,
  'Expected a statically imported image',
);

/** Client-facing service categories, in filter display order. */
export const projectCategorySchema = z.enum([
  'Websites & CMS',
  'eCommerce',
  'Web Apps & Integrations',
  'UX & Product Design',
]);

export const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug must be kebab-case'),
  title: z.string().min(1),
  summary: z.string().min(1),
  categories: z.array(projectCategorySchema).min(1),
  image: z.object({ src: staticImageSchema, alt: z.string().min(1) }),
  details: z.array(z.object({ label: z.string().min(1), value: z.string().min(1) })).min(1),
  body: z.array(z.string().min(1)).min(1),
  highlights: z.array(z.string().min(1)).default([]),
  highlightsTitle: z.string().default('Key features'),
  links: z.object({ live: z.url().optional(), code: z.url().optional() }).default({}),
});

export const experienceSchema = z.object({
  company: z.string().min(1),
  role: z.string().min(1),
  type: z.string().min(1),
  start: z.string().min(1),
  end: z.string().min(1),
  summary: z.string().optional(),
  highlights: z.array(z.string().min(1)).default([]),
});

export type Project = z.infer<typeof projectSchema>;
export type ProjectInput = z.input<typeof projectSchema>;
export type ProjectCategory = z.infer<typeof projectCategorySchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type ExperienceInput = z.input<typeof experienceSchema>;
