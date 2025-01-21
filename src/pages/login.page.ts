  
  import { Page } from 'playwright';

  export class LoginPage {
    constructor(private page: Page) {}

    //loginLocators
    public loginLocators= {
        emailInput:'input[data-qa="login-email"]',
        passwordInput: 'input[data-qa="login-password"]',
        loginButton: 'button[type="submit"]',
    }
    //signUpLocators
    public signUpLocators= {
        usernameInput: 'input[data-qa="signup-name"]',
        emailInput: 'input[data-qa="signup-email"]',
        signUpButton: 'button[data-qa="signup-button"]',
        createAccountButton: 'button[data-qa="create-account"]',
        firsName: 'input[data-qa="first_name"]',
        lastName: 'input[data-qa="last_name"]',
        password: 'input[data-qa="password"]',
        address: 'input[data-qa="address"]',
        countryDropdown: 'select[data-qa="country"]',
        state: 'input[data-qa="state"]',
        city: 'input[data-qa="city"]',
        zipCode: 'input[data-qa="zipcode"]',
        mobileNumber: 'input[data-qa="mobile_number"]'
    }
    async navigateToLogin() {
        this.page.goto('https://automationexercise.com/login')
    }

    /**
     * loginUser: method for login an existing user
     * @param randomUser 
     */    
    async loginUser(randomUser: any) {
        await this.page.fill(this.loginLocators.emailInput, randomUser.email());
        await this.page.fill(this.loginLocators.passwordInput, randomUser.password());
        await this.page.click(this.loginLocators.loginButton);
    }

    /**
     * completeSignUp: receive a randomUser object with the data and fill the username and email inputs for registering new accounts.
     * @param randomUser 
     */
    async completeSignUp(randomUser: any) {
        await this.page.fill(this.signUpLocators.usernameInput, await randomUser.firstName());
        await this.page.fill(this.signUpLocators.emailInput, await randomUser.email());
        await this.page.click(this.signUpLocators.signUpButton);
        await this.completeAccountInformation(randomUser);
    }

    /**
     * Function completeAccountInformation
     * Description: fill all the account required information for creating new accounts.
     */
    async completeAccountInformation(randomUser: any) {
        //wait until the create account button is visible.
        await this.page.waitForSelector(this.signUpLocators.createAccountButton, {state: 'visible'})
        //name and email are already configured.
        //await this.page.fill('input[data-qa="name"]', randomUser.firstName());
        //await this.page.fill('input[data-qa="email"]', randomUser.email());
        //complete additional data:
        await this.page.fill(this.signUpLocators.firsName, await randomUser.firstName());
        await this.page.fill(this.signUpLocators.lastName, await randomUser.lastName());
        await this.page.fill(this.signUpLocators.password, await randomUser.password() )
        await this.page.fill(this.signUpLocators.address, await randomUser.address() )
        await this.page.selectOption(this.signUpLocators.countryDropdown, "United States" )
        await this.page.fill(this.signUpLocators.state, await randomUser.state() )
        await this.page.fill(this.signUpLocators.city, await randomUser.city() )
        await this.page.fill(this.signUpLocators.zipCode, await randomUser.zipCode() )
        await this.page.fill(this.signUpLocators.mobileNumber, await randomUser.mobileNumber() )
        await this.page.click(this.signUpLocators.createAccountButton);
    }

  }