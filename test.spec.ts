import { test, expect } from '@playwright/test';

const usr="";
const pwd="";

test('basic test', async ({ page }) => {
  await page.goto('https://web.openrainbow.com/');
  await page.fill('[name="username"]',usr);
  const userbtn = page.getByRole("button",{name :' Continue '});
  await userbtn.click();
  await page.getByLabel("Enter your password").fill(pwd);
  const passwdbtn = page.getByRole("button",{name :" Connect "})
  await passwdbtn.click();
  await expect(page).toHaveTitle("");


});

