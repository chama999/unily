import {expect, test } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { ProductPage } from '../../pages/product.page';
import { CartPage } from '../../pages/cart.page';
test.describe('Products Test Suite', () => {
    test.beforeEach(async ({ page }) => {
        // Initialize the pages
        const homePage = new HomePage(page);
        const productPage = new ProductPage(page);

        // Navigate to the homepage
        await homePage.navigateToHomePage();

        //Navigate to the products page
        await productPage.navigateToProductsPage();
        expect(page.url()).toContain('/products');
    });
        
    test('Search product', async ({ page }) => {
            const productPage = new ProductPage(page);

            //test params
            let productName='Jeans'
            let productSearchTitle='SEARCHED PRODUCTS'

            // Search for a product
            await productPage.searchProduct(productName);
            expect(page.url()).toContain('/products?search=' + productName);
            
            // Validate the search results
            // validate SEARCHED PRODUCTS title
            await expect(page.getByText(productSearchTitle)).toBeVisible();
            // validate the product name
            // for each product
            const products = page.locator('div.features_items').locator('div.productinfo').locator('p');
            const productCount = await products.count();
            for (let i = 0; i < productCount; i++) {
                const product = products.nth(i);
                await expect(product).toContainText(productName);
            }
        });

        test('Add Products in Cart ', async ({ page }) => {
            const productPage = new ProductPage(page);
            const cartPage = new CartPage(page);
            
            // Hover first product and add to cart
            await productPage.hoverProductAndAddToCart(0);
            await productPage.continueShopping();
            
            // Hover second product and add to cart
            await productPage.hoverProductAndAddToCart(1);
            await productPage.navigateToCartFromModal();

            // Validate the products on the cart
            const productsOnCart = await cartPage.getProductsOnCart();
            expect(productsOnCart.length).toBe(2);
            for (const product of productsOnCart) {
                expect(product.productQuantity).toBe("1");
                expect(product.productPrice).not.toBe(null);
                expect(product.productName).not.toBe(null);
            }
        });

        test('Verify Product quantity in Cart.', async ({ page }) => {
            const productPage = new ProductPage(page);
            const cartPage = new CartPage(page);
            //test params
            let quantity = 4
            let productIndex = 2;

            // Select the 3rs product on the list, set random quantity, navigate to Cart.
            await productPage.addProductToCart(productIndex, quantity);
            await productPage.navigateToCartFromModal();

            // Validate quantity is ok and Proceed with the checkout. 
            await expect(page.locator('#product-' + productIndex).locator('td.cart_quantity').locator('button')).toHaveText(quantity.toString())
            // Validate the product on the cart
            const productsOnCart = await cartPage.getProductsOnCart();
            expect(productsOnCart.length).toBe(1);
            expect(productsOnCart[0].productQuantity).toBe(quantity.toString());
            expect(productsOnCart[0].productPrice).not.toBe(null);
            expect(productsOnCart[0].productName).not.toBe(null);
        });
}
);