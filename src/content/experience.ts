import { experienceSchema, type Experience, type ExperienceInput } from './schema';

/** Work history, most recent first. Mirrors LinkedIn. */
const experienceData: ExperienceInput[] = [
  {
    company: 'Brown Jordan Inc.',
    role: 'Lead Full-Stack Engineer',
    type: 'Full-time · Remote',
    start: 'Aug 2026',
    end: 'Present',
  },
  {
    company: 'Alyssa Jackson Consulting',
    role: 'Independent Software Consultant',
    type: 'Freelance',
    start: 'Jan 2022',
    end: 'Present',
    summary:
      'Embedded 1:1 with enterprise and startup clients to scope, architect, and ship full-stack products end to end.',
    highlights: [
      'Delivered full-stack architectures for 5+ clients, authoring technical proposals, building Figma prototypes, and defining engineering roadmaps.',
      'Re-architected a high-traffic non-profit platform from WordPress to a decoupled Next.js + Sanity stack, eliminating peak-registration downtime while cutting hosting costs.',
      'Built a product-launch e-commerce platform (Next.js, BigCommerce, ButterCMS) with OmniSend marketing automation through high-volume launch traffic.',
    ],
  },
  {
    company: 'Western Governors University',
    role: 'Senior Software Engineer',
    type: 'Full-time · Remote',
    start: 'Nov 2024',
    end: 'Aug 2026',
    summary:
      'Owned org-wide platform infrastructure, CI/CD, and developer tooling for a large TypeScript monorepo.',
    highlights: [
      'Cut deployment times 75% (40m → 10m) with GitHub Actions optimization and a build-once-promote-many strategy.',
      'Built an internal Claude-powered tool on the Anthropic API that automates the local-changes-to-PR workflow: runs tests, suggests fixes, resolves conflicts, drafts and opens the PR.',
      'Built and maintained infrastructure for 5+ microservices on AWS CDK (ECS, Lambda, SQS, RDS, API Gateway).',
      'Reduced Docker image size 83% (3GB → 500MB) with multi-stage builds and minimal runtimes.',
      'Standardized org-wide observability with Datadog and CloudWatch, cutting MTTR 40%.',
    ],
  },
  {
    company: 'Compliancy Group',
    role: 'Senior Software Engineer',
    type: 'Full-time · Remote',
    start: 'Jan 2024',
    end: 'Nov 2024',
    summary:
      'Built compliance SaaS products and led platform modernization across backend and frontend.',
    highlights: [
      'Led migration of 150+ legacy PHP APIs to NestJS with MongoDB/PostgreSQL, cutting query latency 45%.',
      'Delivered a multi-tenant compliance assessment module as the sole engineer, including custom risk-scoring and dynamic reporting pipelines.',
      'Led a cross-functional team of 5 to build an enterprise LMS from scratch in 4 months.',
    ],
  },
  {
    company: 'Compliancy Group',
    role: 'Software Engineer',
    type: 'Full-time · Remote',
    start: 'Jan 2023',
    end: 'Jan 2024',
    highlights: [
      'Built an org-wide Storybook component library with automated visual-regression and accessibility checks via Chromatic.',
      'Served as primary on-call engineer, building Datadog/CloudWatch dashboards to map service dependencies.',
    ],
  },
  {
    company: 'ARKH',
    role: 'Founding Engineer',
    type: 'Contract',
    start: 'Dec 2021',
    end: 'Jan 2023',
    summary:
      'Led web engineering and owned product launches end to end, often as the sole developer.',
    highlights: [
      'Owned the end-to-end launch of a hardware e-commerce platform, integrating SnipCart after vendor trade-off analyses.',
      'Built an enterprise developer portal from scratch with React, GraphQL, and a headless CraftCMS backend.',
      'Architected a WebGL-powered 3D/AR marketplace with React and Three.js.',
    ],
  },
  {
    company: 'SAE International',
    role: 'Software Engineer',
    type: 'Full-time',
    start: 'Sep 2020',
    end: 'Dec 2021',
    summary:
      'Primary frontend engineer for org-wide design systems and large-scale content platforms.',
    highlights: [
      'Built an org-wide reusable component library with the lead UX designer.',
      'Built a content discovery engine in Angular and TypeScript surfacing 40,000+ standards and 150,000+ publications.',
      'Mentored and onboarded 3+ engineers as the domain expert for reusable interface architecture.',
    ],
  },
];

export const experience: readonly Experience[] = experienceData.map((e) =>
  experienceSchema.parse(e),
);
