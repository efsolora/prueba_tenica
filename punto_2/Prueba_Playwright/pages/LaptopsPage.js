export class LaptopsPage {
  constructor(page) {
    this.page = page;
    this.showAll = page.locator('a[href*="path=18"]');
  }

  async open() {
    await this.page.goto(
      'https://opencart.abstracta.us/index.php?route=product/category&path=18'
    );
  }
}
