import { test, expect,chromium } from '@playwright/test';


test("handle tabs",async()=>{

    
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const parentpage= await context.newPage();
    // const page2=await context.newPage();

    await parentpage.goto("https://testautomationpractice.blogspot.com/");

    const childpage =await Promise.all([context.waitForEvent('page'),parentpage.getByRole("button",{name:"New Tab"}).click()]);

    await parentpage.waitForTimeout(5000);

    //switch between 2 pages and get titiles:
    const pages =context.pages();
    console.log("no of created pages:",pages.length)  
    

});
