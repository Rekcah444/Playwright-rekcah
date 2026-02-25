import {test,expect,Locator, chromium} from "@playwright/test"

test("Testing autowaiting", async ({page}) => {

    test.setTimeout(60000);
    test.slow();

    //assetion defauls time-5s and for actions default time -30s

    await page.goto("https://demowebshop.tricentis.com/");
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:1000});
    
    await page.locator("#small-searchterms").fill("laptop",{force:true});

});