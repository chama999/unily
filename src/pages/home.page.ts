import { Page } from 'playwright';

export class HomePage {
  constructor(private page: Page) {}
  
  async navigateToHomePage() {
    await this.page.goto('https://automationexercise.com/');
  }
}