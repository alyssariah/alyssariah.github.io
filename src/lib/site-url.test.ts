import { describe, expect, it } from 'vitest';

import { getSiteUrl } from './site-url';

describe('getSiteUrl', () => {
  it('prefers an explicit NEXT_PUBLIC_SITE_URL', () => {
    const url = getSiteUrl({
      NEXT_PUBLIC_SITE_URL: 'https://example.com',
      VERCEL_PROJECT_PRODUCTION_URL: 'ignored.vercel.app',
    });
    expect(url.origin).toBe('https://example.com');
  });

  it('falls back to the Vercel production domain', () => {
    const url = getSiteUrl({ VERCEL_PROJECT_PRODUCTION_URL: 'me.vercel.app' });
    expect(url.origin).toBe('https://me.vercel.app');
  });

  it('falls back to localhost when nothing is set', () => {
    expect(getSiteUrl({}).origin).toBe('http://localhost:3000');
  });

  it('rejects a malformed explicit URL', () => {
    expect(() => getSiteUrl({ NEXT_PUBLIC_SITE_URL: 'not a url' })).toThrow();
  });
});
