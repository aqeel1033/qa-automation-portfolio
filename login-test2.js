const {chromium}= require ('playwright');
const {expect}= require ('@playwright/test');
(async()=>{
const browser = await chromium.launch();
const tab = await browser.newPage();
await tab.goto('https://www.saucedemo.com')
const title = await tab.title();

console.log (`title is ${title}`);
await tab.locator ('#user-name').fill('locked_out_user')
await tab.locator ('#password').fill('secret_sauce');
await tab.locator ('#login-button').click();
await expect (tab.locator('[data-test="error"]')).toContainText('locked out');

console.log("what");

await browser.close();
})();

