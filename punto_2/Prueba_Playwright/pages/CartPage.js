export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartTotal = page.locator('#cart-total');
    this.viewCart = page.locator('text=View Cart');
    this.removeItem = page.getByRole('button', { name: '' }).first();
  }

  async open() {
    await this.cartTotal.click();
    await this.viewCart.click();
  }

  async deleteProduct() {
    await this.removeItem.first().click();
  }

  async updateQuantity(qty) {
    await this.page.fill('input[name*=quantity]', qty.toString());
    await this.page.click('button[data-original-title="Update"]');
  }
}
