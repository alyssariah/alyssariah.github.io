import type { NextConfig } from 'next';

/**
 * Two build targets from one codebase:
 * - default (`pnpm build`): Vercel, with Cache Components and on-the-fly image
 *   optimization.
 * - static export (`pnpm build:static`, NEXT_OUTPUT=export): plain HTML in
 *   `out/` for GitHub Pages. No server, so no Cache Components/partial
 *   prerendering (they require one) and images are served as-is (source
 *   assets in src/assets are pre-sized to keep them light).
 *
 * Every page is fully static either way, so both targets render the same HTML.
 */
const isStaticExport = process.env.NEXT_OUTPUT === 'export';

const nextConfig: NextConfig = {
  env: {
    // Inlined at build time so no component reads the clock during render.
    NEXT_PUBLIC_BUILD_YEAR: String(new Date().getFullYear()),
  },
  ...(isStaticExport
    ? { output: 'export', images: { unoptimized: true } }
    : { cacheComponents: true, partialPrefetching: true }),
};

export default nextConfig;
