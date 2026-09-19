import {test, expect, locator} from '@playwright/test';


test("read static table data", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
const table = await page.locator("//table[@name='BookTable']");
const headerrows =await table.locator("tr").locator("th");
const trowdata = await table.locator("//tbody/tr[td]");

await expect(table).toBeVisible();
const headerdata = await headerrows.allInnerTexts();
await expect(headerdata).toEqual(["BookName","Author","Subject","Price"]);
console.log("Header data",+headerdata);

await expect(trowdata).toHaveCount(6);

let total=0
console.log("TABLE ROW DATA");
const rows = await trowdata.all();
for (const row of rows){
    const rowdata=await row.locator("td").allInnerTexts();
    console.log(rowdata);

    for (const data of rowdata){
    const data=await row.locator('td').nth(3).allInnerTexts();
    total+=Number(data);
    console.log("price column total", +total);
}}


});