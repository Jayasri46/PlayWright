import{test,expert} from'@playwright/test'
test('Download invoice after purchase order',async({page})=>{
    await page.goto('https://automationexercise.com/');
    await page.locator("//a[text()=' Signup / Login']").click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('madabhushijayasri36@gmail.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Yamini@1146');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator("//a[text()=' Products']").click();
    //await page.locator('.overlay-content > .btn').first().click();
    await page.locator("//div[@class=\"productinfo text-center\"]//a[@data-product-id=\"2\"]").hover()
    await page.locator("//div[@class=\"productinfo text-center\"]//a[@data-product-id=\"2\"]").click()

   // await page.locator('.overlay-content > .btn').click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await page.locator("//a[text()=' Cart']").click();
    await page.getByText('Proceed To Checkout').click();
    await page.locator("//h2[text()='Address Details']").click();
    await page.getByRole('heading', { name: 'Your delivery address' }).click();
    await page.getByRole('heading', { name: 'Your billing address' }).click();
    await page.getByRole('heading', { name: 'Review Your Order' }).click();
    await page.getByRole('link', { name: 'Place Order' }).click();
    await page.locator('input[name="name_on_card"]').click();
    await page.locator('input[name="name_on_card"]').fill('hga');
    await page.locator('input[name="card_number"]').click();
    await page.locator('input[name="card_number"]').fill('123');
    await page.getByPlaceholder('ex.').click();
    await page.getByPlaceholder('ex.').fill('21');
    await page.getByPlaceholder('MM').fill('2');
    await page.getByPlaceholder('MM').click();
    await page.getByPlaceholder('MM').fill('21');
    await page.getByPlaceholder('YYYY').click();
    await page.getByPlaceholder('YYYY').fill('2333');
    await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download Invoice' }).click();
    const download = await downloadPromise;
    await page.getByRole('link', { name: 'Continue' }).click();
    await page.close();
});
    