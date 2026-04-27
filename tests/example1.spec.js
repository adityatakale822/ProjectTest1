// @ts-check
import { test, expect } from '@playwright/test';


test('TC1', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});
