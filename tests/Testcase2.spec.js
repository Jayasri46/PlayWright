const {test,expert}= require ('@playwright/test');
test('Login user with correct email and password',async({page})=>{
    await page.goto("https://automationexercise.com/");
    await page.locator("//a[text()=' Signup / Login']").click();
    //await expect(page.locator("//h2[text()='New User Signup!']")).toBeVisible();
    await page.locator("//input[@placeholder='Name']").click();
    await page.locator("//input[@placeholder='Name']").fill('Jayasri');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('madabhushijayasri36@gmail.com');
    await page.getByRole('button', { name: 'Signup' }).click();
    await page.close();
})