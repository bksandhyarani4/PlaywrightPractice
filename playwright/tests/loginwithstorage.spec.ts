import{test, expect} from '@playwright/test';

const STORAGE_STATE = 'playwright/auth/sauce-session.json';
const LOGIN_URL = 'https://www.saucedemo.com/';

test('login with storage state', async({page}) => {
    await page.goto(LOGIN_URL);
    const Username = page.locator('#user-name');
    const pwd = page.locator('#password');
    const LoginButton = page.locator('#login-button');

     await expect(Username).toBeVisible();
     await expect(pwd).toBeVisible();
     await expect(LoginButton).toBeVisible();
     
    await Username.fill("standard_user");
    await pwd.fill("secret_sauce");
    await LoginButton.click();

    await expect(page.locator(".title")).toHaveText("Products");

    await page.context().storageState({path:STORAGE_STATE});

});