import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.fpune.edu.py/v2/pagina/index');
  await page.getByLabel('Nombre Completo').click();
  await page.locator('.nav-link').first().click();
  await page.getByRole('link', { name: 'FPUNE celebra graduación de' }).first().click();
});