import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://www.hugedomains.com/domain_profile.cfm?d=fpune.com');
});