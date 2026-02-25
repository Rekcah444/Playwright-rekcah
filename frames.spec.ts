import {test,expect,Locator} from '@playwright/test';

// test('testing frames using playwright',async({page})=>{
//     await page.goto("https://ui.vision/demo/webtest/frames/");
// //total no of frmaes in the page
// const frames = page.frames();
// console.log("Total number of frames:", frames.length);
// expect(frames.length).toBe(7);
// //approach1:using frame itself using page.frame()....
// // const Frame = page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1.html"});

// // if (Frame)
// // {
// //     await Frame.locator("[name='mytext1']").fill("Welcome to Frame 1");
// //     // Frame.fill("[name='mytext1']","Welcome to Frame 1");
// //     const text1 = await Frame.locator("[name='mytext1']").inputValue();
// //     console.log("Text in frame 1: ",text1);
// //     expect(text1).toBe("Welcome to Frame 1");
// // } 
// // else
// //     {
// //     console.log("Frame not found");    
// //     }

// //approach2:using frame itself using page.frame()....

// const Framewithlocator=await page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']").fill("Welcome to Frame 1 using frame locator");


// });



test('testing child frames using playwright',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");

//approach1:using frame itself using page.frame()....

// const frame3=page.frameLocator("[src='frame_3.html']");
const frame3=page.frame({url : "https://ui.vision/demo/webtest/frames/frame_3.html"});

if (frame3)
{
await frame3.locator("[name='mytext3']").fill("test typed in frame 3");
console.log("Text in frame 3: ",await frame3.locator("[name='mytext3']").inputValue());
const childframes =await frame3.childFrames()
console.log("Total number of child frames in frame 3: ",childframes.length);
const radio=childframes[0].getByLabel("I am a human");
await radio.check();
await expect(radio).toBeChecked();

}

else{
    console.log("Frame not found");
}


await page.waitForTimeout(5000);
});