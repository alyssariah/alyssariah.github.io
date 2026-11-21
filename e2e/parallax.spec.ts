import { expect, test, type Page } from '@playwright/test';

const banners = ['quality-heading', 'cta-heading'];

/** Viewport-relative tops of a banner section and its photo layer. */
async function tops(page: Page, headingId: string) {
  return page.locator(`section[aria-labelledby="${headingId}"]`).evaluate((section) => {
    const layer = section.querySelector('[data-parallax-layer]');
    if (!layer) throw new Error('parallax layer not found');
    return {
      section: Math.round(section.getBoundingClientRect().top),
      photo: Math.round(layer.getBoundingClientRect().top),
    };
  });
}

async function scrollSection(page: Page, headingId: string, block: 'start' | 'center' | 'end') {
  await page.locator(`section[aria-labelledby="${headingId}"]`).evaluate((el, b) => {
    document.documentElement.style.scrollBehavior = 'auto';
    el.scrollIntoView({ block: b });
  }, block);
}

test.describe('banner parallax', () => {
  for (const id of banners) {
    test(`${id}: photo stays pinned while the section scrolls over it`, async ({ page }) => {
      await page.goto('/');
      const seen = new Set<number>();
      for (const block of ['end', 'center', 'start'] as const) {
        await scrollSection(page, id, block);
        const { section, photo } = await tops(page, id);
        seen.add(section);
        expect(photo).toBe(0);
      }
      expect(seen.size).toBeGreaterThan(1); // the section really moved
    });
  }

  test('photos scroll with their section when the user prefers reduced motion', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    for (const id of banners) {
      await scrollSection(page, id, 'center');
      const { section, photo } = await tops(page, id);
      expect(photo).toBe(section);
    }
  });
});
