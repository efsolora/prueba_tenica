const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');
const { LoginPage } = require('../pages/LoginPage');
const { ForgotPasswordPage } = require('../pages/ForgotPasswordPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const data = require('../utils/testData');

test('Flujo completo de compra en OpenCart', async ({ page }) => {

  // Registro
  const register = new RegisterPage(page);
  await register.open();
  await register.register(data.newUser);

  // Login
  await page.getByRole("link", { name: "Logout" }).click();
  const login = new LoginPage(page);
  await login.open();
  await login.login(data.newUser.email, data.newUser.password);

  // Agregar MacBook Pro
  const product = new ProductPage(page);
  await page.goto('https://opencart.abstracta.us/index.php?route=product/category&path=18');
  await product.selectProduct('MacBook Pro');
  await product.addToCart();

  // Buscar Samsung tablet y agregar
  await page.getByRole("textbox", { name: "Search" }).fill("Samsung Galaxy");
  await page.getByRole("button", { name: "" }).click();
  await product.selectProduct('Samsung Galaxy Tab 10.1');
  await product.addToCart();
  await product.addToCart();


  // Carrito
  const cart = new CartPage(page);
  await cart.open();
  await cart.deleteProduct();
  await cart.updateQuantity(2);

  // Checkout
  const checkout = new CheckoutPage(page);
  await checkout.completeCheckout(data.newUser);

  expect(page.getByRole('heading', { name: 'Your order has been placed!' }));
});
