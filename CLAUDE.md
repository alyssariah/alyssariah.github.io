# Portfolio — alyssariah.github.io

Personal portfolio for Alyssa Jackson. Next.js 16 (App Router) + React 19,
TypeScript (strict), Tailwind CSS v4, deployed on Vercel. Visual design and
copy follow the earlier Hugo portfolio (github.com/alyssariah/hugo-portfolio);
work history mirrors LinkedIn.

@AGENTS.md

## Commands (pnpm only)

- `pnpm dev` — dev server (Turbopack) at http://localhost:3000
- `pnpm check` — format check + lint + typecheck + unit tests. **Run before calling work done.**
- `pnpm test` / `pnpm test:watch` — Vitest unit/component tests
- `pnpm test:e2e` — Playwright against a production build (port 3100), incl. axe a11y scan
- `pnpm build` — production build; confirms routes still prerender as static (`○`)
- `pnpm format` / `pnpm lint:fix` — auto-fix

## Architecture

```
src/
  app/          Routes and file conventions only: / , /about, /projects,
                /projects/[slug] (generateStaticParams), /contact, not-found,
                sitemap, robots, icon. Pages compose features; no logic here.
  features/     One folder per section/domain (hero, about, quality, skills, cta,
                fun-facts, projects, contact). Components + colocated tests and
                pure helpers (e.g. projects/filter-projects.ts).
  components/
    ui/         Content-agnostic primitives (Container, SectionTitle, ButtonLink,
                ImageBanner, PageHero, ExternalLink).
    layout/     Site chrome (SiteHeader, SiteNav, SiteFooter).
    icons/      Inline brand SVGs (lucide-react covers everything else).
  content/      All copy and data. `schema.ts` holds Zod schemas; projects and
                experience are parsed at module load so bad content fails the build.
  hooks/        Shared client hooks (usePrefersReducedMotion).
  lib/          Pure utilities (cn, getSiteUrl). No React.
  assets/       Statically imported images (blur placeholders + intrinsic sizing).
e2e/            Playwright specs (incl. axe scan of every page).
```

Dependency direction: `app → features → components, content, hooks, lib`.
`components/ui` and `lib` never import from `features` or `content`.

## Conventions

- **Server Components by default.** Client components are small interactive
  leaves only: SiteNav, Typewriter, PhotoCarousel, PrinciplesTabs,
  ProjectGallery. Keep data/markup in the server parent and pass props down.
- **Cache Components is on** (`cacheComponents: true`). Anything that reads
  time, randomness, or uncached data must be in `'use cache'` (with
  `cacheLife`) or under `<Suspense>`, or the build fails. Keep the home page
  fully static. See `node_modules/next/dist/docs/01-app/02-guides/public-static-pages.md`.
- **Content changes go in `src/content/`**, never hardcoded in components.
  New project → put the screenshot in `src/assets/projects/` and add an entry
  to `projects.ts` (it gets a page at `/projects/<slug>` automatically).
  Setting `links.live` adds a "Visit live site" link and a click-to-load
  "Live site" iframe preview — only use URLs whose headers allow framing
  (no `X-Frame-Options`/`frame-ancestors` block).
- **Styling:** use semantic tokens from `globals.css` (`bg-primary`,
  `text-muted`, `bg-surface`, `border-border`…). No raw hex in components.
  Light theme only (matches the Hugo design). Fonts: Montserrat (`font-sans`),
  Barlow Condensed (`font-display`). Section titles via `<SectionTitle>`,
  CTAs via `<ButtonLink>`. Merge classes with `cn()`.
- **Images:** always `next/image` with meaningful `alt` and `sizes`.
- **Parallax:** banner photos use `<BackgroundImage parallax>` — a fixed photo
  layer clipped to its section with `clip-path: inset(0)` (the modern,
  iOS-safe `background-attachment: fixed`). Off for reduced motion. Don't add
  `transform`/`filter`/`contain`/`will-change` to any ancestor of a banner: it
  re-anchors the fixed layer and breaks the effect. `e2e/parallax.spec.ts`
  guards this.
- **External links:** use `<ExternalLink>` (safe `rel`, screen-reader hint).
- **Accessibility:** one `h1` per page, sections labelled by their heading,
  respect `prefers-reduced-motion` (`usePrefersReducedMotion`), no autoplaying
  motion. The E2E axe scan must stay clean on every page.
- **File names:** kebab-case (`project-card.tsx`); components are named exports.
- **Imports:** `@/` alias; type-only imports use `import type`.

## Testing

- Unit-test pure logic in `lib/` and content schemas; component-test anything
  with conditional rendering. Query by role/label, not test IDs or classes.
- Vitest can't render `async` Server Components — cover those with Playwright.
- `vitest.config.mts` maps image imports to Next's `StaticImageData` shape.

## Deployment

- Vercel, from GitHub. `main` → production; every branch/PR gets a preview URL.
- Optional env: `NEXT_PUBLIC_SITE_URL` (canonical URL; otherwise derived from
  `VERCEL_PROJECT_PRODUCTION_URL`). See `.env.example`.
