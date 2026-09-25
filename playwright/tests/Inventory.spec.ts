import{test , expect, Locator} from '@playwright/test';
import {LoginPage} from '../pages/Loginpage.spec';
import { Inventorypage } from '../pages/Inventorypage.spec';
//import { LoginPage } from '../pages/Loginpage.spec';

test.describe("Verifying the inventory Page",()=>{

    test("login to page", async({page})=>{

        const login = new LoginPage(page);
        const inventory = new Inventorypage(page);
        await login.navigateToLoginPage();
        await login.Login("standard_user","secret_sauce");

        
    // }); 


    //test("verify the inventory page ", async({page})=>{ 
        //const inventory = new Inventorypage(page);
        await inventory.VerifyInventorypage();
        await inventory.VerifyInventoryItems();
        await inventory.VerifyItemAvailable("Sauce Labs Backpack");

     });

});