import{test, locator, expect} from '@playwright/test';


test("Product Search list", async({page})=>{
    await page.goto("https://www.amazon.de/");
    const cookiesaccept= await page.locator("#sp-cc-accept"); 
    if (await cookiesaccept.isVisible()){
        await cookiesaccept.click();
    }

    const searchItem = await page.getByRole('searchbox',{name:"Search Amazon.de"});
    searchItem.waitFor({timeout:5000});
    await searchItem.fill("Iphone 14");
    await searchItem.press("Enter");
    await page.waitForTimeout(8000);
    const productTitles= await page.locator('//div[@class="puisg-row"]/descendant::div[@class="puisg-col-inner"]/descendant::h2');
    await expect(productTitles.first()).toBeVisible();
    const result=await productTitles.allTextContents();
    //await page.waitForTimeout(8000);
    //console.log(productTitles.length);
    //await(expect(productTitles.length).toBeGreaterThan(0));
    console.log(result.length);
   console.log(result[13]);

});//npx playwright test amazonproduct.spec.ts
//span[@class='a-declarative']/child::span[@role='link']
//div[@class="puisg-row"]/descendant::div[@class="puisg-col-inner"]/descendant::h2