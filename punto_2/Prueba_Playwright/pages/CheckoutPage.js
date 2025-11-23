export class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async completeCheckout(data) {
    await this.page.goto(
      'https://opencart.abstracta.us/index.php?route=checkout/checkout'
    );

    // Billing Details
    await this.page.fill('#input-payment-firstname', data.firstName);
    await this.page.fill('#input-payment-lastname', data.firstName);
    await this.page.fill('#input-payment-address-1', data.address1);
    await this.page.fill('#input-payment-city', data.city);
    await this.page.fill('#input-payment-postcode', data.postcode);
    await this.page.selectOption('#input-payment-country', '47'); // Colombia
    await this.page.selectOption('#input-payment-zone', '743'); // Bogota

    await this.page.click('#button-payment-address');
    await this.page.click('#button-shipping-address');
    await this.page.click('#button-shipping-method');

    await this.page.check('input[name="agree"]');
    await this.page.click('#button-payment-method');
    await this.page.click('#button-confirm');
  }
}
