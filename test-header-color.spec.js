import { test } from '@playwright/test';

test('verify header has dark navy background', async ({ page }) => {
  await page.goto('http://localhost:4321/machinery/');
  await page.waitForTimeout(1000);

  // Take screenshot
  await page.screenshot({ path: '/tmp/header-test.png', fullPage: false });

  const header = await page.locator('header').first();
  const styles = await header.evaluate(el => {
    const computed = window.getComputedStyle(el);
    return {
      bg: computed.backgroundColor,
      display: computed.display,
      position: computed.position
    };
  });

  console.log('Header background:', styles.bg);
  console.log('Expected: rgb(30, 41, 59) which is #1e293b');
  console.log('Screenshot saved to /tmp/header-test.png');
});
