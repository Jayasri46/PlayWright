import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.locator('//h5[text()]')).toBeVisible();
  await page.getByPlaceholder('Username').click();
  await page.locator("//input[@placeholder='Username']").fill('Admin');
 // await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.locator("//button[text()=' Login ']").click();
  //await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator("//span[text()='Dashboard']")).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.locator("//button[text()=' Add ']").click();
  await expect(page.locator("//label[text()='User Role']")).toBeVisible();
  //await page.locator("//div[text()='-- Select --']").click();
  //Here we are  selecting   first value in  user role from the dropdown
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  //Here we are searching the specified employeename from the employee name 
  await page.getByPlaceholder('Type for hints...').click();
  await page.getByPlaceholder('Type for hints...').press('CapsLock');
  await page.getByPlaceholder('Type for hints...').fill('B');
  await page.getByPlaceholder('Type for hints...').press('CapsLock');
  await page.getByPlaceholder('Type for hints...').fill('Bob');
  await page.getByRole('option', { name: 'Bob Tester' }).locator('span').click();
  await page.getByText('-- Select --').click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).press('CapsLock');
  await page.getByRole('textbox').nth(2).fill('B');
  await page.getByRole('textbox').nth(2).press('CapsLock');
  await page.getByRole('textbox').nth(2).fill('Bob ');
  await page.getByRole('textbox').nth(2).press('CapsLock');
  await page.getByRole('textbox').nth(2).fill('Bob M');
  await page.getByRole('textbox').nth(2).press('CapsLock');
  await page.getByRole('textbox').nth(2).fill('Bob Marker');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('admin123');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('admin123');
  await page.getByRole('button', { name: 'Save' }).click();
  //await page.locator("//button[text()=' Save ']").click();
  await page.close();
});
