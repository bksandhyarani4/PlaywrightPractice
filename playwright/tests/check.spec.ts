import{test, expect, locator} from '@playwright/test';

test("Checkbox action", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    const checks = await page.locator('input[type="checkbox"]');

     await expect(checks).toHaveCount(2);
     const check1= await checks.nth(0);
    const  check2= await checks.nth(1);

    await expect(check1).not.toBeChecked();
    await expect(check2).not.toBeChecked();


   await check1.check();
   await expect(check1).toBeChecked();
   await expect(check2).not.toBeChecked();

   const checkboxs = await checks.all();
   for (const check of checkboxs){
    await check.check();
    await expect(check).toBeChecked();
   }
   


});