const {chromium} = require ('playwright');
const {expect} = require ('@playwright/test');
(async ()=> {
const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto('https://www.saucedemo.com');
const title = await page.title();
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.locator('#add-to-cart-sauce-labs-backpack').click();
await expect(page.locator('.shopping_cart_badge').innerText()).resolves.toBe('1');
console.log (`page title is ${title}` );
console.log(`i fucking did it`);

await browser.close();






})();