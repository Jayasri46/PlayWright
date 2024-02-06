import {test,expect} from '@playwright/test'
test('Xpath',async ({page})=>
{
    await page.goto('https://demoqa.com/automation-practice-form')
    await page.locator("//div[text()='Elements']").click();
    await page.locator("//span[text()='Text Box']");
    await page.locator("//span[text()='Check Box']");
    await page.locator("//span[text()='Radio Button']");
    await page.locator("//span[text()='Web Tables']");
    await page.locator("//span[text()='Buttons']");
    await page.locator("//span[text()='Links']");
    await page.locator("//span[text()='Broken Links - Images']");
    await page.locator("//span[text()='Upload and Download']");
    await page.locator("//span[text()='Dynamic Properties']");
    await page.close()
}
)