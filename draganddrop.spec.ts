import {test,expect,Locator} from "@playwright/test"

test("testing drag and drop actions",async ({page})=>{
    //approach 1
    await page.goto("https://vinothqaacademy.com/mouse-event/");
    const element1=page.locator("#draggableElement");
    const element2=page.locator("#droppableElement");
    // await element1.hover();
    // await page.mouse.down();
    // await element2.hover();
    // await page.mouse.up();


    //approach 2:

    await element1.dragTo(element2);

    await page.waitForTimeout(5000);
});