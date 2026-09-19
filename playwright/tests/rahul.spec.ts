import{test, expect, Locator} from '@playwright/test';

// test("droptownvalue", async({page})=>{
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

//     const dropdown:Locator = await page.locator("#dropdown-class-example");


//   await  selectdropdownByvisibletext(dropdown,"Option1");

// });


// async function selectdropdownByvisibletext(element:Locator,text:string):Promise<void>{
// await element.selectOption({label:text});
// await expect(element.locator('option:checked')).toHaveText(text);
//console.log(await element.textContent());
//console.log(await element.locator('option:checked').textContent());


//npx playwright test rahul.spec.ts
