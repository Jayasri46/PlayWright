 const { test, expect } = require('@playwright/test')

test.only('Home page',async ({page})=>{

    await page.goto('https://demoqa.com/');

    const pageTitle = await page.title();
    console.log(pageTitle);

    await expect(page).toHaveTitle('DEMOQA');
    const pageurl= await page.url();
    console.log(pageurl);
    await expect(page).toHaveURL('https://demoqa.com/');
    await page.close();
})
