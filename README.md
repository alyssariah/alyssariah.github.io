# Alyssa Jackson — Portfolio

Personal site built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.
Deployed on Vercel.

## Getting started

Requires Node 22+ and pnpm.

```bash
pnpm install
pnpm dev
```

## Scripts

| Script          | What it does                                        |
| --------------- | --------------------------------------------------- |
| `pnpm dev`      | Start the dev server                                |
| `pnpm check`    | Prettier check, ESLint, TypeScript, unit tests      |
| `pnpm test:e2e` | Playwright E2E + accessibility scan on a prod build |
| `pnpm build`    | Production build                                    |

## Editing content

All copy and project data live in `src/content/`. Projects are validated with
Zod, so a malformed entry fails the build. See `CLAUDE.md` for architecture
and conventions.
