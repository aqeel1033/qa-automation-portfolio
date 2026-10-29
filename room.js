const {chromium}= require ('playwright');
const {expect}= require ('@playwright/test');
(async ()=>{
    const browser = await chromium.launch();
    const tab= await browser.newPage();
    await tab.goto('https://www.saucedemo.com');
    await expect(tab).toHaveURL('https://www.saucedemo.com');
        console.log("so vroom vroom");
     const title= await tab.title();  
     console.log(`i think this is going good ${title}`); 
     await tab.locator('#user-name').fill('problem_user');
     await tab.locator('#password').fill('secret_sauce');
     await tab.locator('#login-button').click();
     await expect(tab).toHaveURL('https://www.saucedemo.com/inventory.html');
     console.log("we are at the new concept");
     const image1=await tab.locator('.inventory_item_img img').nth(0).getAttribute('src');
     const image2=await tab.locator('.inventory_item_img img').nth(1).getAttribute('src');
     expect (image1).not.toBe(image2);
     console.log("it is passed it should be a fail");
     await browser.close();
}

)();