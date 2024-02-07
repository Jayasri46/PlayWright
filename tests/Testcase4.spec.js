import {test,expert} from '@playwright/test'
test ('Log out User',async({page})=>{
    await page.goto("https://automationexercise.com/");
    await page.locator("//a[text()=' Signup / Login']").click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('madabhushijayasri36@gmail.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Yamini@1146');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: ' Logout' }).click();
})