import {test,expect}from'@playwright/test'
test('Contact form',async({page})=>{
    await page.goto('https://automationexercise.com/');
    await page.locator("//a[text()=' Contact us']").click();
    //await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
    await expect(page.locator("//h2[text()='Get In Touch']")).toBeVisible();
    await page.getByPlaceholder('Name').click();
    await page.getByPlaceholder('Name').press('CapsLock');
    await page.getByPlaceholder('Name').fill('Jayasri');
    await page.getByPlaceholder('Email', { exact: true }).click();
    await page.getByPlaceholder('Email', { exact: true }).fill('madabhushijayasri36@gmail.com');
    await page.getByPlaceholder('Subject').click();
    await page.getByPlaceholder('Subject').fill('Testing');
    await page.getByPlaceholder('Your Message Here').click();
    await page.getByPlaceholder('Your Message Here').fill('Testing');
    await page.locator('input[name="upload_file"]').click();
    await page.locator('input[name="upload_file"]').setInputFiles('.lesshst');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.close();
})