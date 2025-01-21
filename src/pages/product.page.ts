import { Page } from 'playwright';

export class ProductPage {
  constructor(private page: Page) {}

  // declare locators for Product Page
  public locators = {
    quantityInput: 'input[name="quantity"]',
    viewProductButton: (productIndex: number) => `a[href="/product_details/${productIndex}"]`,
    productsTitle: 'div.features_items > div:nth-child(3) > div > div > div > p',
    products: 'div.features_items div.col-sm-4',
    searchInput: '#search_product',
    searchButton: "#submit_search",
    hoverAddProductToCartButton: 'div.product-overlay > div.overlay-content > a.btn',
    addToCartButton: 'div.product-information button.cart[type="button"]',
  }
  
  async navigateToProductsPage() {
    // it looks for the link to products page and click on it.
    await this.page.click('a[href="/products"]');
  }

  async searchProduct(productName: string) {
    // it fills the search input with the product name and click on the search button.
    await this.page.locator(this.locators.searchInput).fill(productName);
    await this.page.locator(this.locators.searchButton).click();
  }

  async addProductToCart(productIndex: number, randomQuantity: number) {
    // it selects the productIndex on the list, set quantity and click on AddToCart button.
    await this.page.click(await this.locators.viewProductButton(productIndex));
    await this.page.fill( await this.locators.quantityInput, randomQuantity.toString());
    await this.page.click(await this.locators.addToCartButton)
  }
  
  // navigate to the Cart page clicking on the link in the Success Modal after adding a product
  async navigateToCartFromModal(){
    await this.page.click('#cartModal a[href="/view_cart"]');
  }

  async hoverProductAndAddToCart(productIndex: number) {
    // it hovers the product on the list.
    await this.page.locator(this.locators.products).nth(productIndex).hover();
    // it clicks on the add to cart button.
    await this.page.locator(this.locators.hoverAddProductToCartButton).nth(productIndex).click();
    
  }

  async continueShopping() {
    // it clicks on the continue shopping button.
    await this.page.getByText('Continue Shopping').click();
  }
}