const {chromium}= require ('playwright');
const { expect} = require ('@playwright/test');
(async()=>{
    const browser= await  chromium.launch();
    const tab = await browser.newPage();
    await tab.goto('https://www.saucedemo.com');
    await expect(tab).toHaveURL('https://www.saucedemo.com');
    const title= await tab.title();
    console.log(`both do the same thing the upper line and this ${title}`);
    await tab.locator('#user-name').fill('problem_user');
    await tab.locator('#password').fill('secret_sauce');
    await tab.locator('#login-button').click();
    await expect(tab).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log('we are at the inventory page but its fixed i think no broken images');
    const image1 = await tab.locator('.inventory_item_img').nth(0).getAttribute('src');
    const image2 = await tab.locator('inventory_item_img').nth(1).getAttribute('src');
    await expect (image1).not.toBe(image2);
    






await browser.close();
})();