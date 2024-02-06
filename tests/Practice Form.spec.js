import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('listitem').getByText('Practice Form').click();
  await expect(page.getByText('Name')).toBeVisible();
  await expect(page.getByText('Email')).toBeVisible();
  await expect(page.getByText('Gender')).toBeVisible();
  await expect(page.getByText('Mobile(10 Digits')).toBeVisible();
  await expect(page.getByText('Date of Birth')).toBeVisible();
  await expect(page.getByText('Subjects')).toBeVisible();
  await expect(page.getByText('Hobbies')).toBeVisible();
  await expect(page.getByText('Picture', { exact: true })).toBeVisible();
  await expect(page.getByText('Current Address')).toBeVisible();
  await expect(page.getByText('State and City')).toBeVisible();
  await expect(page.getByText('Submit')).toBeVisible();
  await page.close();
});