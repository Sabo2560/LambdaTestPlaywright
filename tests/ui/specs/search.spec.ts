import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Search functionality', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('should show relevant results for a valid search', async ({ page }) => {
    await homePage.search('iPhone');
    await expect(page).toHaveURL(/search=iPhone/);
    const product = page.locator('.product-layout');
    await expect(product).toBeVisible();
  });

  test('should show a "no results" message for an invalid search', async ({ page }) => {
    await homePage.search('nonexistentproduct');
    const noResultsMessage = page.locator('#content p');
    await expect(noResultsMessage).toBeVisible();
    await expect(noResultsMessage).toContainText('There is no product that matches the search criteria.');
  });
});
