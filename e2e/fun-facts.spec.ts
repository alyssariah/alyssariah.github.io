import { expect, test, type Page } from '@playwright/test';

const miles = (page: Page) =>
  page.locator('dl div').filter({ hasText: 'Miles ran' }).locator('[data-count-up]');

test('fun-fact numbers count up when scrolled into view', async ({ page }) => {
  await page.goto('/');
  await expect(miles(page)).toHaveText('0'); // hydrated, waiting off-screen
  await miles(page).scrollIntoViewIfNeeded();
  await expect(miles(page)).toHaveText('2000');
});

test('fun-fact numbers show final values with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(miles(page)).toHaveText('2000');
});
