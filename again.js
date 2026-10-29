const {chromium} = require ('playwright');
const {expect} = require ('@playwright/test');
(async()=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();
   await page.goto('https://www.saucedemo.com');
   const title = await page.title();
console.log (`page title is wooohooo ${title}`);
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
await  expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.locator('#shopping_cart_container').click();
await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
await page.locator('#checkout').click();
await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
await page.goto('https://www.saucedemo.com/inventory.html');
await page.locator('#add-to-cart-sauce-labs-backpack').click();
await expect(page.locator('.shopping_cart_badge').innerText()).resolves.toBe('1');
console.log("blahblahjblahblahpopopooppoopop");



await browser.close();



})();