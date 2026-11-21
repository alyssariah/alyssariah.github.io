import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vitest/config';

/**
 * Next.js turns static image imports into `StaticImageData` objects; Vite turns
 * them into URL strings. Mirror Next's shape so content schemas and
 * `next/image` behave the same in tests as in the app.
 */
function nextStaticImages(): Plugin {
  const IMAGE = /\.(png|jpe?g|webp|gif|avif)$/;
  return {
    name: 'next-static-images',
    enforce: 'pre',
    load(id) {
      if (!IMAGE.test(id)) return null;
      const src = JSON.stringify(id);
      return `export default { src: ${src}, width: 800, height: 600, blurDataURL: 'data:image/png;base64,' };`;
    },
  };
}

export default defineConfig({
  plugins: [nextStaticImages(), react()],
  resolve: { tsconfigPaths: true },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    css: false,
  },
});
