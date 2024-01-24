const { test, expect } = require('@playwright/test')
test.only('Admin', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');
    await page.locator("//input[@name='username']").fill('Admin');
    await page.locator("//input[@name='password']").type('admin123');
    await page.click("//button[@type='submit']")
});
