const {test, expect}=require('@playwright/test')
//import {test,expect} from '@playwright/test'
test('locators',async ({page})=>
{
    await page.goto('https://demoqa.com/automation-practice-form');
    
    //await page.locator('id=userName-label ').click()
    //click on login button
    //await page.click('id=userName-label');
    //provide username first and last names
    //await page.locator('id=firstName').fill('Yamini');
    await page.fill('id=firstName','Yamini');
    //await page.locator('id=lastName').fill('')
    await page.fill('id=lastName','Jayasri');
    await page.type('id=userEmail','jayasrimadabhushi@gmail.com');
    await page.close();
})