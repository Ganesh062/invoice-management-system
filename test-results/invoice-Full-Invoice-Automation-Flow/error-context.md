# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: invoice.spec.js >> Full Invoice Automation Flow
- Location: tests\invoice.spec.js:7:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | function randomString() {
  4  |   return Math.random().toString(36).substring(7);
  5  | }
  6  | 
  7  | test('Full Invoice Automation Flow', async ({ page }) => {
  8  | 
> 9  |   await page.goto('http://localhost:3000');
     |              ^ Error: page.goto: Target page, context or browser has been closed
  10 |   await page.waitForLoadState('networkidle');
  11 | 
  12 |   const name = `User_${randomString()}`;   // 🔥 added
  13 |   const email = `user_${randomString()}@test.com`;
  14 |   const password = '123456';
  15 | 
  16 |   //  Go to Signup
  17 |   await page.getByText('Signup').click();
  18 | 
  19 |   await page.waitForTimeout(1000);
  20 | 
  21 |   //  Fill ALL fields (Name added)
  22 |   await page.fill('input[placeholder="Name"]', name);
  23 |   await page.fill('input[placeholder="Email"]', email);
  24 |   await page.fill('input[placeholder="Password"]', password);
  25 | 
  26 |   //  Better click method
  27 |   await page.getByRole('button', { name: 'Signup' }).click();
  28 | 
  29 |   await page.waitForTimeout(2000);
  30 | 
  31 |   //  Login
  32 |   await page.fill('input[placeholder="Email"]', email);
  33 |   await page.fill('input[placeholder="Password"]', password);
  34 | 
  35 |   await page.getByRole('button', { name: 'Login' }).click();
  36 | 
  37 |   await page.waitForTimeout(2000);
  38 | 
  39 |   //  Create invoices
  40 |   for (let i = 0; i < 5; i++) {
  41 | 
  42 |     await page.getByRole('button', { name: 'Add Invoice' }).click();
  43 | 
  44 |     await page.waitForTimeout(1000);
  45 | 
  46 |     await page.fill('input[placeholder="Invoice Number"]', `INV${Math.floor(Math.random() * 1000)}`);
  47 |     await page.fill('input[placeholder="Client Name"]', `Client_${randomString()}`);
  48 |     await page.fill('input[type="date"]', '2026-04-18');
  49 |     await page.fill('input[placeholder="Amount"]', `${Math.floor(Math.random() * 5000)}`);
  50 | 
  51 |     await page.selectOption('select', 'Paid');
  52 | 
  53 |     await page.getByRole('button', { name: 'Save Invoice' }).click();
  54 | 
  55 |     await page.waitForTimeout(1500);
  56 |   }
  57 | 
  58 |   //  Delete invoices
  59 |   const deleteButtons = page.getByRole('button', { name: 'Delete' });
  60 |   const count = await deleteButtons.count();
  61 | 
  62 |   for (let i = 0; i < count; i++) {
  63 |     await deleteButtons.first().click();
  64 |     await page.waitForTimeout(500);
  65 |   }
  66 | 
  67 | });
```