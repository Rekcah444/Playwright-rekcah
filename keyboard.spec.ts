import {test,expect} from '@playwright/test'

test("testing keyboard actions ",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#input1").fill("Hi this is user");
    
    //copy the entire text
    await page.keyboard.press("Control+A");
    await page.keyboard.up("Control");
  

    //pastinto the another text

  await page.waitForTimeout(30000);
});