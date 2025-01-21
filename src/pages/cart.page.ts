import { Page } from 'playwright';

export class CartPage {
  constructor(private page: Page) {}

  public locators = {
    cartPageLink: 'a[href="/view_cart"]',
    checkoutPageLink: 'a[href="/checkout"]',
    proceedToCheckoutButton: () => this.page.getByText('Proceed To Checkout'),
    productsOnCart: 'tbody tr',
  }
  
  async getProductsOnCart() {
    // it return an object with the name of the product quantity and price.
    const products = await this.page.locator(this.locators.productsOnCart)
    const productsOnCart: { productName: string | null; productQuantity: string | null; productPrice: string | null; }[] = [];
    const productsCount = await products.count();
    for (let i = 0; i < productsCount; i++) {
      const product = products.nth(i);
      const productName = await product.locator('td.cart_description').locator('a').innerText();
      const productQuantity = await product.locator('td.cart_quantity').locator('button').innerText()
      const productPrice = await product.locator('td.cart_total').locator('p').innerText();
      productsOnCart.push({ productName, productQuantity, productPrice });
    }
    return productsOnCart;
  }
  // this async function navigate users to cart page.
  async navigateToCartPage() { await this.page.click(this.locators.cartPageLink) }
  // below function navigate users to checkout page by clicking on the Proceed to checkout button. 
  async proceedToCheckout() {
    //Just for using different type of selectors.
    await this.locators.proceedToCheckoutButton().click();
  }

}