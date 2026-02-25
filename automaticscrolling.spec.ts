import {test,expect,Locator,} from "@playwright/test"


////scrolling is automatically take care by the playwright

// test(" scrolling actions",async ({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     const scrl=page.locator("#comboBox")


// });

test("testing infinite scrolling",async({page})=>{

await page.goto("https://www.booksbykilo.in/new-books");

let pre=0
while(true){
const current = await page.evaluate(()=>{
    return document.body.scrollHeight;
});


console.log(pre,current);
if (current === pre)
{
    break;
}

pre=current

}

});
