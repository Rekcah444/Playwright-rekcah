
import {test,expect,Locator,Page} from "@playwright/test"

let page:Page;
//open page
test.beforeAll("testing before all-open browser",async({browser})=>{

    page=await browser.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");

});

//close page 
test.afterAll("testing after all-open browser",async()=>{
    await page.close();
});
//beforeeach
