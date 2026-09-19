import{test, expect, locator} from '@playwright/test';

class reusemethod{
    static async checkthecheckbox(locator:locator):Promise<void>{
        await locator.check();
        //await expect(locator).ToBeChecked();

    }
static async uncheckthecheckbox(locator:locator):Promise<void>{
        await locator.uncheck();
        //await expect(locator).not.toBeChecked();;

    }

static async checkischecked(locator:locator):Promise<void>{
    await this.checkthecheckbox(locator);
    await expect(locator).toBechecked();
}
}



test ("Checkbox resue methods", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    const check= await page.locator("input[type='checkbox']").nth(0);
    await reusemethod.checkthecheckbox(check);
    await reusemethod.uncheckthecheckbox(check);

    

});