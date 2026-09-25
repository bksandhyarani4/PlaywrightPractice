import{test, expect, Locator} from '@playwright/test';
import { LoginPage } from '../pages/Loginpage.spec';


test.describe('verifying login functionality',async ()=>{
    
    test("verify valid login to page", async ({page})=>{
    let LoginPageObj = new LoginPage(page);
    await LoginPageObj.navigateToLoginPage();
    await LoginPageObj.Login('standard_user','secret_sauce');
});
    test("verify invalid login to page", async ({page})=>{
    let LoginPageObj = new LoginPage(page);
    await LoginPageObj.navigateToLoginPage();
    await LoginPageObj.Login('standard_','secret_sace');
    await LoginPageObj.verifyError("Username and password do not match ");
});

});