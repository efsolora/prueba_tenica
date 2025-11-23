export class ForgotPasswordPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('#input-email');
    this.submitBtn = page.locator('input[value="Continue"]');
  }

  async open() {
    await this.page.goto(
      'https://opencart.abstracta.us/index.php?route=account/forgotten'
    );
  }

  async resetPassword(email) {
    await this.email.fill(email);
    await this.submitBtn.click();
  }
}
