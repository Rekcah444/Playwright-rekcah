import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://web.openrainbow.com/rb/2.165.18/index.html#/login');
  await page.getByRole('textbox', { name: 'Please enter your login' }).click();
  await page.getByRole('textbox', { name: 'Please enter your login' }).fill('usrnmae');
  await page.getByRole('textbox', { name: 'Please enter your login' }).press('Tab');
  // await page.getByRole('button', { name: 'Continue' }).press('Enter');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('password');
  await page.getByRole('main').locator('svg').click();
  await page.getByRole('checkbox', { name: 'Keep my session alive' }).press('Tab');
  // await page.getByRole('button', { name: 'Connect' }).press('Enter');
  await page.getByRole('button', { name: 'Connect' }).click();
  // await page.waitForTimeout(50000);.
  // await page.goto('https://web.openrainbow.com/rb/2.165.18/index.html#/main/home');
  await page.locator('div').filter({ hasText: 'Sahithi AvulaPresence : Do' }).nth(3).click();
  await page.getByRole('main').getByRole('textbox').click();
  await page.locator('tiptap-editor').getByRole('paragraph').filter({ hasText: /^$/ }).click();
  await page.getByRole('main').getByRole('textbox').fill('hey paithyakkari');
  await page.getByRole('button', { name: 'Send your message'}).click();
});