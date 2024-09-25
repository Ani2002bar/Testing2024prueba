import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.fpune.edu.py/v2/pagina/index');
  await page.getByRole('link', { name: 'Académico' }).click();
  await page.getByRole('link', { name: 'Académico' }).click();
  await page.getByRole('link', { name: 'Académico' }).click();
  await page.getByRole('link', { name: 'Académico' }).click();
  await page.getByRole('link', { name: 'Académico' }).first().click();
  await page.getByRole('link', { name: 'Ingeniería de Sistemas' }).click();
  await page.getByRole('heading', { name: 'Ingeniería de Sistemas' }).first().click();
});