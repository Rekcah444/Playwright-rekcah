import {test,expect,Locator, chromium} from "@playwright/test"

test("Testing page context", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const page2=await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page2.goto("https://www.selenium.dev/downloads/")
   
    const allpages =context.pages().length;
    console.log("all pages:",allpages)

    await page.waitForTimeout(5000);
    await page2.waitForTimeout(5000);

});