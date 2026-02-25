import { test,expect,Locator }  from '@playwright/test';

test('testing tables usinhg playwright',async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/");

        const table:Locator =page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();

    //count the number of rows in the table
    const rows:Locator=page.locator("table[name='BookTable'] tbody tr");
    await expect(rows).toHaveCount(7);

    const rowcount=await rows.count();
    console.log("Number of rows in the table: ",rowcount);
    expect(rowcount).toBe(7); 

    //count the number of coloumn in the table
    const columns:Locator=rows.locator("th");
    await expect(columns).toHaveCount(4);
    //read all data from 2nd row
    const secondrow:Locator=rows.nth(1).locator("td");
    const secondrowtext:string[]=await secondrow.allInnerTexts();
    console.log("Data in the second row: ",secondrowtext);

    await expect(secondrow).toHaveText(secondrowtext);

     //read all data from the table
    
const allrowdata: Locator[] = await rows.all();

for (let r of allrowdata)
{
const rowdata = await r.locator("td").allInnerTexts();
console.log(rowdata.join('\n'));
}

    //based on the condition read the data from the table
    console.log("Books resturn by mukesh: ");

const mukeshbokk:string[]=[];
 for (let r of allrowdata)
{
const cells = await r.locator("td").allInnerTexts();
const author=cells[1];
const bookname=cells[0];
if (author === "Mukesh")
{
console.log(bookname,":",author);
mukeshbokk.push(bookname);
}

}

expect(mukeshbokk).toHaveLength(2);

    


//based on the condition read the data from the table
let totalprice=0;
for (let r of allrowdata.slice(1))
{
    const cells = await r.locator("td").allInnerTexts();
    const price=cells[3];

    totalprice = totalprice +parseInt(price);

}
console.log("Total price of all books: ",totalprice);
expect(totalprice).toBe(7100);

})