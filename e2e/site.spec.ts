import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const pages = ['/', '/about', '/projects', '/projects/delano-bats', '/contact'];

test.describe('accessibility', () => {
  for (const path of pages) {
    test(`${path} has no detectable WCAG A/AA violations`, async ({ page }) => {
      await page.goto(path);
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
      expect(results.violations).toEqual([]);
    });
  }
});

test('home page renders every section', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Alyssa Jackson');
  for (const name of [
    'About Me',
    'I Believe in Quality Work',
    'My Skills',
    'Fast. Reliable. Scalable.',
    'Fun Facts About Me',
  ]) {
    await expect(page.getByRole('heading', { level: 2, name, exact: true })).toBeVisible();
  }
});

test('navigates from the hero to a project case study', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /discover my projects/i }).click();
  await expect(page).toHaveURL(/\/projects$/);

  await page.getByRole('button', { name: 'eCommerce' }).click();
  await expect(page.getByRole('main').getByRole('listitem')).toHaveCount(2); // Delano Bats, ARKH Products

  await page.getByRole('link', { name: /delano bats/i }).click();
  await expect(page).toHaveURL(/\/projects\/delano-bats$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Delano Bats' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Project Details' })).toBeVisible();
});

test('project pages link to the live site and load a preview on request', async ({ page }) => {
  await page.goto('/projects/delano-bats');
  await expect(page.getByRole('link', { name: /visit live site/i })).toHaveAttribute(
    'href',
    'https://www.delanobats.com/',
  );
  await expect(page.locator('iframe')).toHaveCount(0);
  await page.getByRole('button', { name: 'Live site' }).click();
  await expect(page.getByTitle('Live preview of Delano Bats')).toHaveAttribute(
    'src',
    'https://www.delanobats.com/',
  );
});

test('primary nav marks the current page', async ({ page }) => {
  await page.goto('/about');
  const nav = page.getByRole('navigation', { name: 'Primary' });
  const menuButton = nav.getByRole('button', { name: /open menu/i });
  if (await menuButton.isVisible()) await menuButton.click();
  await expect(nav.getByRole('link', { name: 'About' })).toHaveAttribute('aria-current', 'page');
  await nav.getByRole('link', { name: 'Contact' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Drop Me A Note' })).toBeVisible();
});

test('about page shows experience and switchable principles', async ({ page }) => {
  await page.goto('/about');
  await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible();
  await page.getByRole('tab', { name: 'Mission' }).click();
  await expect(page.getByRole('tabpanel')).toContainText('empower engineering teams');
});

test('unknown routes show the 404 page', async ({ page }) => {
  const response = await page.goto('/does-not-exist');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
});

// With Cache Components the prerendered shell streams before notFound() runs,
// so the first hit may be a 200. Next.js then renders the not-found UI with
// noindex (see node_modules/next/dist/docs/01-app/02-guides/streaming.md).
test('unknown project slugs render the not-found page with noindex', async ({ page }) => {
  await page.goto('/projects/not-a-project');
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
  await expect(page.locator('meta[name="robots"][content*="noindex"]').first()).toBeAttached();
});
