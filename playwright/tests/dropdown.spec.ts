import {test, expect, Locator} from '@playwright/test';

test("dropdowntest", async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

const countryoption =await page.locator("#country");
await countryoption.selectOption("Germany");

await page.waitForTimeout(2000);

await countryoption.selectOption({value:"uk"});

await page.waitForTimeout(2000);

 console.log(await expect(countryoption).toContainText("United Kingdom"));

console.log(await countryoption.textContent());
});


