import { expect, type Page, type Locator } from '@playwright/test';

//readonly variables
//constructor initialize
//methods 



export class LoginPage {
    readonly page:Page;
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    readonly errormsg:Locator;

constructor (page:Page)
{
    this.page = page;
    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errormsg = page.locator("div h3");

}

async navigateToLoginPage():Promise<void>{
    await this.page.goto("https://www.saucedemo.com/");
}

async enterUserName(username:string):Promise<void>{
    await this.usernameInput.fill(username);
}
    async enterPassword(password:string):Promise<void>{
    await this.passwordInput.fill(password);
}

 async clickLoginButton():Promise<void>{
    await this.loginButton.click();
}

async Login(username:string, password:string){
    await this.enterUserName(username);
    await this.enterPassword(password);
    //await this.clickLoginButton();

}

async verifyError(expectedmessage:string):Promise<void>{
    
    await expect(this.errormsg).toContainText(expectedmessage);
}

}