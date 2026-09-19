import{test, locator} from '@playwright/test';


test ("javascript dialog", async({page})=>{
    page.on("dialog", async(dialog)=>{
    if (await dialog.type() =="alert"){
        await dialog.accept();
    }
    if (await dialog.type() =="confirm"){
        await dialog.dismiss();
    }   
    if(await dialog.type() =="prompt"){
        await dialog.accept("san");
    }

});
   

   

 

 await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.getByText("Click for JS Alert").click();
    await page.getByText("Click for JS confirm").click();
    await page.getByText("Click for JS prompt").click();
    
});