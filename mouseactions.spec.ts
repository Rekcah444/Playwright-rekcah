import {test,expect,Locator} from "@playwright/test"

test("testing mouse actions",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // const hoverelement =page.locator(".dropbtn");
    const hoverelement =page.locator(".dropdown");

    await hoverelement.hover();
    const laptop =page.locator(".dropdown-content>a:nth-child(2)");
    await laptop.hover();
    
    

    //right click

    const text =page.getByText('Double Click', { exact: true });
    await text.click({button:"right"});
    
    //double click
    const element =page.getByText("Copy Text");
    await element.dblclick();

    await page.waitForTimeout(50000);
});