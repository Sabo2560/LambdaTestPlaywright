import { test, expect } from '@playwright/test';

test('Test Scenario 2', async ({ page }) => {
  // 1. Open the https://www.lambdatest.com/selenium-playground page
  await page.goto('https://www.lambdatest.com/selenium-playground');

  // Click “Drag & Drop Sliders”
  await page.click('text=Drag & Drop Sliders');

  // 2. Select the slider “Default value 15” and drag the bar to make it 95
  const slider = await page.$('input[value="15"]');
  if (slider) {
    await slider.fill('95');
  }

  // validating whether the range value shows 95
  const rangeValue = await page.textContent('#rangeSuccess');
  expect(rangeValue).toContain('95');
});
