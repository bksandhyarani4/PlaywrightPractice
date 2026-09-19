import {test, locator, expect, chromium} from '@playwright/test';


test("browser context", async({})=>{

    const browser = await chromium.launch({channel:'chrome', headless:false});
    const bctxt = await browser.newContext();
    const page = await bctxt.newPage();
    await page.goto("https://orangehrm.com/")
    await page.locator("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection").click();
    await page.locator('//img[@alt="facebook"]').click();
    await page.waitForTimeout(2000);
    await page.locator('//a[contains(@href,"https://www.linkedin.com/company/orangehrm/mycompany/")]').click();
    await page.waitForTimeout(2000);
    await page.locator('//a[contains(@href,"https://x.com/orangehrm")]').click();
    await page.waitForTimeout(2000);

    const pages= await bctxt.pages();
    console.log(pages.length);

    for(const pge of pages)
        if (pge !== page){
            console.log(await pge.title());
            await pge.close();
            

        }
await page.bringToFront();
console.log(await page.title());

});
