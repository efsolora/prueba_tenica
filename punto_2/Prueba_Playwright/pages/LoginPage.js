export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.getByRole('textbox', { name: 'E-Mail Address' });
    this.password = page.getByRole('textbox', { name: 'Password' })
    this.loginBtn = page.getByRole('button', { name: 'Login' })
  }

  async open() {
    await this.page.goto(
      'https://opencart.abstracta.us/index.php?route=account/login'
    );
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}
