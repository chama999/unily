import { Page } from 'playwright';
import {cardPaymentInformation} from '../utils/data-generator'

export class PaymentPage {
  constructor(private page: Page) {}
  public locators = {
    commentTextArea: 'textarea',
    nameOnCard: 'input[data-qa="name-on-card"]',
    cardNumber: 'input[data-qa="card-number"]',
    cvc: 'input[data-qa="cvc"]',
    expiryMonth: 'input[data-qa="expiry-month"]',
    expiryYear: 'input[data-qa="expiry-year"]',
    payButton: 'button[data-qa="pay-button"]'
  }

  // placeOrder function.
  async placeOrder() {
    await this.page.locator(this.locators.commentTextArea).fill('Adding new comment')
    await this.page.getByText('Place Order').click()
  }

  async completePaymentInformation() {
    await this.page.locator(this.locators.cardNumber).fill(await cardPaymentInformation.cardNumber().toString())
    await this.page.locator(this.locators.nameOnCard).fill(await cardPaymentInformation.cardName())
    await this.page.locator(this.locators.cvc).fill(await cardPaymentInformation.cvc().toString())
    await this.page.locator(this.locators.expiryMonth).fill(await cardPaymentInformation.expiryMonth().toString())
    await this.page.locator(this.locators.expiryYear).fill(await cardPaymentInformation.expiryYear().toString())
    await this.page.locator(this.locators.payButton).click()
  }
}