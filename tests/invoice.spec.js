const { test, expect } = require('@playwright/test');

function randomString() {
  return Math.random().toString(36).substring(7);
}

test('Full Invoice Automation Flow', async ({ page }) => {

  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  const name = `User_${randomString()}`;   // 🔥 added
  const email = `user_${randomString()}@test.com`;
  const password = '123456';

  //  Go to Signup
  await page.getByText('Signup').click();

  await page.waitForTimeout(1000);

  //  Fill ALL fields (Name added)
  await page.fill('input[placeholder="Name"]', name);
  await page.fill('input[placeholder="Email"]', email);
  await page.fill('input[placeholder="Password"]', password);

  //  Better click method
  await page.getByRole('button', { name: 'Signup' }).click();

  await page.waitForTimeout(2000);

  //  Login
  await page.fill('input[placeholder="Email"]', email);
  await page.fill('input[placeholder="Password"]', password);

  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForTimeout(2000);

  //  Create invoices
  for (let i = 0; i < 5; i++) {

    await page.getByRole('button', { name: 'Add Invoice' }).click();

    await page.waitForTimeout(1000);

    await page.fill('input[placeholder="Invoice Number"]', `INV${Math.floor(Math.random() * 1000)}`);
    await page.fill('input[placeholder="Client Name"]', `Client_${randomString()}`);
    await page.fill('input[type="date"]', '2026-04-18');
    await page.fill('input[placeholder="Amount"]', `${Math.floor(Math.random() * 5000)}`);

    await page.selectOption('select', 'Paid');

    await page.getByRole('button', { name: 'Save Invoice' }).click();

    await page.waitForTimeout(1500);
  }

  //  Delete invoices
  const deleteButtons = page.getByRole('button', { name: 'Delete' });
  const count = await deleteButtons.count();

  for (let i = 0; i < count; i++) {
    await deleteButtons.first().click();
    await page.waitForTimeout(500);
  }

});