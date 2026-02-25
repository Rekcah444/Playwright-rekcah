import { test,expect,Locator }  from '@playwright/test';

test('dialog usinhg playwright',async({page})=>
    {
        page.on("dialog",async(dialog)=>
        {
            console.log("Dialog message: ",dialog.message());
            expect(dialog.message()).toContain("I am an alert box!");
            console.log("Dialog type: ",dialog.type());
            expect(dialog.type()).toContain("alert");

            dialog.accept();
        });
        
    
    await page.goto("https://testautomationpractice.blogspot.com/");
 
    await page.locator("#alertBtn").click();

    await page.waitForTimeout(5000);

});



test('conversation dialog usinhg playwright',async({page})=>
    {
        page.on("dialog",async(dialog)=>
        {
            console.log("Dialog message: ",dialog.message());
            expect(dialog.message()).toContain("Press a button!");
            console.log("Dialog type: ",dialog.type());
            expect(dialog.type()).toBe("confirm");
            await page.waitForTimeout(5000);
            dialog.accept();
        });
        
    
    await page.goto("https://testautomationpractice.blogspot.com/");
 
    await page.locator("#confirmBtn").click();

    await page.waitForTimeout(5000);
    const demoText: string = await page.locator("#demo").innerText();
    console.log("Demo text: ", demoText);
    expect(demoText).toBe("You pressed OK!");
});

test.only('prompt dialog usinhg playwright',async({page})=>
    {
        page.on("dialog",async(dialog)=>
        {
            console.log("Dialog message: ",dialog.message());
            expect(dialog.message()).toContain("Please enter your name:");
            console.log("Dialog type: ",dialog.type());
            expect(dialog.type()).toBe("prompt");
            await page.waitForTimeout(5000);
            expect(dialog.defaultValue()).toContain("Harry Potter");

            dialog.accept("Kingmaker");
        });
        
    
    await page.goto("https://testautomationpractice.blogspot.com/");
 
    const prompbox=await page.locator("#promptBtn").click();
    
    await page.waitForTimeout(5000);
    const demoText: string = await page.locator("#demo").innerText();
    console.log("Demo text: ", demoText);
    expect(demoText).toBe("Hello Kingmaker! How are you today?");
});
