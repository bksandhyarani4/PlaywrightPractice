import {test ,expect} from '@playwright/test';

const URL = "https://www.ikea.com/de/de/";

test('ikea', async({page})=>{

 await page.goto(URL);
 let Menu = await page.locator('#section-products');
 await page.getByRole("button",{name:"Alle Cookies akzeptieren"}).click();
 await expect(Menu).toBeVisible();

 await Menu.click();
 await expect(page.getByText('Neu bei IKEA')).toBeVisible();
});
browser-invoke the engine  - chrome , firefox or web kit
        browser context--- opening that in mode -- cookies and login
                        page---- tab 

async await will help to wait and load 
async waits for the page to load and perform action without async we cant put await
await is on the locators or elements to be visible or to perform actions we put await 

//Global, navigation, expect, default wait, 