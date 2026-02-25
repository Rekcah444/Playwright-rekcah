import { test, expect,chromium } from '@playwright/test';


test("handle popups",async({browser})=>{
  // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const parentpage= await context.newPage();
    // // const page2=await context.newPage();.

    const context= await browser.newContext();
    const page =await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    

    //Multiple popups
    await page.waitForTimeout(5000);
    await Promise.all([page.waitForEvent('popup'),page.locator("#PopUp").click()]);
    const totalpages=context.pages();
    console.log("totalpages",totalpages.length);

    console.log(totalpages[1].url());
    for (let pg of totalpages)
    {
      const title=await pg.title();
      if (title.includes('Playwright'))
      {
        pg.close()
      }
    }
    await page.waitForTimeout(5000);
});