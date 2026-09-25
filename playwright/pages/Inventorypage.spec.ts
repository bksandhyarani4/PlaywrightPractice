import {Page, Locator, expect} from '@playwright/test';


export class Inventorypage{
    [x: string]: any;

    readonly page:Page;
    readonly inventorytitle:Locator;
    readonly inventorylitems:Locator;
    readonly inventoryMenu:Locator;
    readonly inventoryfilter:Locator;
    readonly carticon:Locator;
    readonly cartlink:Locator;

constructor(page:Page){
    this.page = page;
    this.inventorytitle= page.locator("[data-test='title']");
    this.inventorylitems= page.locator("[data-test='inventory-item']");
    this.inventoryMenu = page.locator("#react-burger-menu-btn");
    this.inventoryfilter = page.locator(".product_sort_container");
    this.cartlink = page.locator("[data-test='shopping-cart-link']");
    this.carticon = page.locator("[data-test='shopping-cart-badge']");

}

async VerifyInventorypage():Promise<void>{
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.inventorytitle).toHaveText("Products")
}

async VerifyInventoryItems():Promise<number>{
    return await this.inventorylitems.count();
}

async VerifyItemAvailable(itemName:string):Promise<void>{
   const product = this.inventorylitems.filter({ hasText: itemName });
  await expect(product).toHaveCount(1);
  await expect(product.locator("[data-test='inventory-item-name']")).toHaveText(itemName);
  await expect(product.locator("[data-test='inventory-item-price']")).toBeVisible();
   //await expect(productPrice).toBeVisible();
   }
}

