import { test, expect } from "@playwright/test";
import * as fs from 'fs';

type regdata = 
{
        firstName:string;
        lastName:string;
        email:string;
        telephone:string;
        password:string;
        //confirmPassword:string;
        subscribenewsletter:'Yes'|'No' ;
}

const registerdata:regdata[]= JSON.parse(fs.readFileSync("playwright/tests/data/register.json", 'utf-8'));
for (const data of registerdata){
    test(`register to tutorialsninja with ${data.firstName}`, async({page})=>{
        await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
      const fname  = await page.getByRole("textbox",{name:"First Name"}).fill(data.firstName);
       const lname = await page.getByRole("textbox",{name:"Last Name"}).fill(data.lastName);
        const em = await page.getByRole("textbox",{name:"E-Mail"}).fill(data.email);;
        const phone = await page.getByRole("textbox",{name:"Telephone"}).fill(data.telephone);;
        const pwd = await page.locator("#input-password").fill(data.password);;
        //const cpwd = await page.locator("input-confirm").fill(data.confirmPassword);

        // await expect(fname).toBeVisible();
        // await expect(lname).toBeVisible();
        // await expect(em).toBeVisible();
        // await expect(phone).toBeVisible();
        // await expect(pwd).toBeVisible();

        // await fname.fill(data.firstName);
        // await lname.fill(data.lastName)
        // await em.fill(data.email);
        // await phone.fill(data.telephone);
        // await pwd.fill(data.password);

        
        if (data.subscribenewsletter==='Yes'){
            await page.getByLabel('Yes').check();
        } else {
            await page.getByLabel('No').check();
        }
        await page.locator("input[name='agree']").check;
        await page.locator("input[type='submit']").click();
        await expect(page.locator("div[id='content'] h1")).toHaveText("Register Account");
    }); 
}