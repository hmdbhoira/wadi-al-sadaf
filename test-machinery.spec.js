import { test, expect } from '@playwright/test';

test.use({ baseURL: 'http://localhost:4321' });

test('machinery landing page loads correctly', async ({ page }) => {
  await page.goto('/machinery/');

  // Take screenshot
  await page.screenshot({ path: 'machinery-page.png', fullPage: true });

  // Check page title
  const title = await page.title();
  console.log('Page title:', title);

  // Check heading
  const heading = await page.locator('main h1').first().textContent();
  console.log('Main heading:', heading);

  // Count category cards
  const categoryCards = await page.locator('a[href^="/machinery/"]').count();
  console.log('Number of category cards:', categoryCards);

  // Check if images are loaded
  const images = await page.locator('img').all();
  console.log('Number of images:', images.length);

  // Check breadcrumbs
  const breadcrumbs = await page.locator('nav[aria-label="Breadcrumb"]').textContent();
  console.log('Breadcrumbs:', breadcrumbs);

  // Check header exists (use role to avoid dev toolbar)
  const header = await page.getByRole('banner').first().isVisible();
  console.log('Header visible:', header);

  // Check footer exists (use contentinfo role)
  const footer = await page.getByRole('contentinfo').first().isVisible();
  console.log('Footer visible:', footer);

  // Check category links exist
  const electricalLinks = await page.locator('a[href="/machinery/electrical/"]').count();
  const automationLinks = await page.locator('a[href="/machinery/automation/"]').count();
  console.log('Electrical links found:', electricalLinks);
  console.log('Automation links found:', automationLinks);

  console.log('\n✅ Page loaded successfully!');
});
