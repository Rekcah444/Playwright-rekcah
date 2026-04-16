import { test as base ,Page} from '@playwright/test'
// type fixture={
//     Homepage:any;
// }

// export const test=base.extend<fixture>({
//     Homepage: async ({Page},use)=>{},

// });



type MyFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    await page.goto('https://example.com/login');
    await page.fill('#username', 'user');
    await page.fill('#password', 'pass');
    await page.click('#login');

    // provide fixture
    await use(page);

    // optional teardown
  }
});