import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ProductPage } from '../pages/productPage';

test.describe('Add to cart functionality', () => {
  let homePage: HomePage;
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
  });

  test('should allow a user to add a product to the cart', async ({ page }) => {
    await homePage.goto();
    await homePage.search('iPhone');
    await page.locator('.product-layout').first().click();
    await productPage.addToCart();
    const successMessage = page.locator('.alert-success');
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText('Success: You have added iPhone to your shopping cart!');
  });
});
