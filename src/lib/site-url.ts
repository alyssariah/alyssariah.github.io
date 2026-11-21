import { z } from 'zod';

const urlSchema = z.url();

/**
 * Resolve the canonical site URL.
 * Order: explicit NEXT_PUBLIC_SITE_URL → Vercel production domain → localhost.
 */
interface SiteUrlEnv {
  NEXT_PUBLIC_SITE_URL?: string | undefined;
  VERCEL_PROJECT_PRODUCTION_URL?: string | undefined;
}

// Read each variable explicitly so Next.js can inline NEXT_PUBLIC_* at build time.
const defaultEnv: SiteUrlEnv = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
};

export function getSiteUrl(env: SiteUrlEnv = defaultEnv): URL {
  const explicit = env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(urlSchema.parse(explicit));

  const vercelProd = env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) return new URL(`https://${vercelProd}`);

  return new URL('http://localhost:3000');
}
