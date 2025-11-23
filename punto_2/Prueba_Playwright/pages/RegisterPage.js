export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#input-firstname');
    this.lastName = page.locator('#input-lastname');
    this.email = page.locator('#input-email');
    this.phone = page.locator('#input-telephone');
    this.password = page.locator('#input-password');
    this.confirmPass = page.locator('#input-confirm');
    this.privacy = page.locator('input[name="agree"]');
    this.submitBtn = page.locator('input[value="Continue"]');
  }

  async open() {
    await this.page.goto(
      'https://opencart.abstracta.us/index.php?route=account/register'
    );
  }

  async register(data) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.email.fill(data.email);
    await this.phone.fill(data.phone);
    await this.password.fill(data.password);
    await this.confirmPass.fill(data.password);
    await this.privacy.check();
    await this.submitBtn.click();
  }
}
