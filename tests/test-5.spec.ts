import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=FPUNE&oq=FPUNE&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE3OTBqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Facultad Politécnica - Universidad Nacional del Este fpune https://www.fpune.' }).click();
});
await page.getByRole('link', { name: 'Académico' }).first().click();
await page.getByRole('link', { name: 'Ingeniería de Sistemas' }).click();
await page.getByRole('heading', { name: 'Ingeniería de Sistemas' }).first().click();
await page.getByRole('heading', { name: 'PLANTEL DE COORDINACIÓN DE' }).click();