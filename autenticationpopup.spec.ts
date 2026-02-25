import { test, expect,chromium } from '@playwright/test';


test("handle popups",async({browser})=>{
  // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const parentpage= await context.newPage();
    // // const page2=await context.newPage();.

    const context= await browser.newContext({httpCredentials:{username:"admin",password:"admin"}});
    const page =await context.newPage();
//     await page.waitForLoadState();
//     await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    
//     await expect(page.locator("text=Congratulations")).toBeVisible();

//    await page.waitForTimeout(5000); 


   ///approach 2
    await page.waitForLoadState();
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    
    await expect(page.locator("text=Congratulations")).toBeVisible();

   await page.waitForTimeout(5000); 


});