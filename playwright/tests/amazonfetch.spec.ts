import { test, expect } from '@playwright/test';

test("Product Search list", async ({ page }) => {
    await page.goto("https://www.amazon.de/");

    const cookiesAccept = page.locator("button[type='submit']");
    if (await cookiesAccept.isVisible()) {
        await cookiesAccept.click();
    }


    const searchItem = page.getByRole('searchbox', { name: "Search Amazon.de" });
    await searchItem.fill("iPhone 14");
    await searchItem.press("Enter");

    // const results = page.locator('[data-component-type="s-search-result"]');
    // await expect(results.first()).toBeVisible();

    // const productTitles = await results.locator('h2').allTextContents();
    // expect(productTitles.length).toBeGreaterThan(0);
    // console.log(productTitles.length);
    // console.log("14th product is ",productTitles[13]);
});//npx playwright test amazonfetch.spec.ts