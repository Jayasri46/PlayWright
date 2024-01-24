const {test,expect}=require('@playwright/test')
test('Login Functionlity',async({page})=>{
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //await page.click()
    await expect(page).toHaveTitle('OrangeHRM');
    await page.locator("//input[@name='username']").fill('Admin');
    await page.locator("//input[@name='password']").type('admin123');
    await page.click("//button[@type='submit']")
    await page.close();
}
)



