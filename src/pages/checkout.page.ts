import { Page } from 'playwright';

export class CheckoutPage {
  constructor(private page: Page) {}
  // complete checkout function.
  async completeCheckout() {
    await this.page.click('button[class="checkout-button"]');
  }
}