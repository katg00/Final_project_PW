// @ts-check
import { test, expect } from "@playwright/test";
import {Mainpage} from "../pages/mainpage";
import { Products } from "../pages/products";
import { Cart } from "../pages/cart";

test.beforeEach(async ({ page }) => {
  const mainpage = new Mainpage(page);
  await mainpage.navigateTo();
});

test('main page has correct title', async ({ page }) => {
  const mainpage = new Mainpage(page);

await expect(page).toHaveTitle(/Testowy Sklep – Strona główna/);

await expect(mainpage.mainPageTitle).toBeVisible();

});

test('Main Page - buy items', async({page}) => {
  const mainpage = new Mainpage(page);
  const products = new Products(page);
  const cart = new Cart(page);

  const testedItem = {
    id: 2,
    name: "Eliksir Energii",
    price: "39.99 zł"
  }

  await expect(mainpage.mainPageTitle).toBeVisible();

  await mainpage.checkProductTitle(testedItem.id, testedItem.name);
  await mainpage.clickProductCard(testedItem.id);

  await products.productPageOpened(testedItem.name);
  await products.addItemToCart(testedItem.id);

  await page.getByRole('link', { name: '← Wróć do listy' }).click();

  await mainpage.cartButton.click();

  await cart.checkCart(testedItem.name, testedItem.id);
  
  await cart.buyItem();

})
