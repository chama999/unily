import { faker } from '@faker-js/faker';

//generating a random use, with random data produced by faker library
export const randomUser =  {
    email: () => faker.internet.email(),
    firstName: () => faker.person.firstName(),
    lastName: () => faker.person.lastName(),
    password: () => faker.internet.password( { length: 8, memorable: true, prefix: 'psw' }),
    address: () => faker.location.streetAddress(false),
    countryIndex: faker.number.int({min: 1, max: 7}),
    state: () => faker.location.state(),
    city: () => faker.location.city(),
    zipCode: () => faker.location.zipCode(),
    mobileNumber: () => faker.phone.number(),
}

//generating a random use, with random data produced by faker library
export const cardPaymentInformation =  {
    cardNumber: () => faker.finance.creditCardNumber('visa'),
    cardName: () => faker.person.fullName(),
    cvc: () => faker.finance.creditCardCVV(),
    expiryMonth: () => (faker.date.past().getMonth() + 1).toString().padStart(2, '0'),
    expiryYear: () => faker.date.past().getFullYear()
}

// it can produce a random number to use in our testing, so to not select the same product always.
// faker.number.int({min: 1, max: 30})
//just for this test case we are hardcoding the 3rd product:
export const randomProductNumber = 3  
