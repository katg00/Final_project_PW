import { expect } from "@playwright/test";

export class Products {
  constructor(page) {
    this.page = page;
    
  }

       async navigateTo() {
        await this.page.goto(this.url);
  }

  async productPageOpened (productName) {
    await expect(this.page).toHaveURL(/\/products\//);
    await expect(this.page.getByRole('heading'), {productName}).toBeVisible();
  }

  async addItemToCart (productId) {
    await this.page.getByTestId(`buy-btn-${productId}`).click();
  }

  
};

module.exports = { Products };