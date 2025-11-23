export class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = page.locator('#button-cart');
  }

  async selectProduct(productName) {
    await this.page.getByRole('link', { name: `${productName}` }).first().click();
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }
}
