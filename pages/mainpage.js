import { expect } from "@playwright/test";

export class Mainpage {
  constructor(page) {
    this.page = page;
    this.url = "/";
    this.mainPageTitle = this.page.getByRole('heading', {name: 'Strona główna'});
    // this.productImage = this.page.getByTestId(`product-image-${productId}`);
    this.expectedAddItemMsg = this.page.locator('body');

    this.cartButton =  page.getByTestId('cart-button');

  }

    async navigateTo() {
        await this.page.goto(this.url);
  }

    async checkProductTitle(productId, expectedTitle) {
        await expect(this.page.getByTestId(`product-title-${productId}`)).toContainText(expectedTitle);
    }

    async clickProductCard(productId) {
        await this.page.getByTestId(`product-title-${productId}`).click();

  }

};

module.exports = { Mainpage };