import { test, expect } from "@playwright/test";  
//data shape
type testdata={
    username:string,
    password:string,
    expectedurl?:string,
    errormsg?:string
}
//actual data
const testdataarray:testdata[]=[
    {
    username:"standard_user",
    password:"secret_sauce",
    expectedurl:"https://www.saucedemo.com/inventory.html"
    },
    {
    username:"locked_out_user",
    password:"secret_sauce",
    errormsg:"Epic sadface: Sorry, this user has been locked out."
    }
]
// register  url:https://tutorialsninja.com/demo/index.php?route=account/register
for (const data of testdataarray) {
    test(`login to sauce with ${data.username}`, async ({ page }) => {

        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill(data.username);
        await page.locator("#password").fill(data.password);
        await page.locator("#login-button").click();

        if(data.errormsg){
           const errormessage = page.locator("h3[data-test='error']");
            await expect(errormessage).toBeVisible();
            await expect(errormessage).toHaveText(data.errormsg);
        }

});

}