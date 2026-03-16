import { expect } from "@playwright/test";

export class Cart {
  constructor(page) {
    this.page = page;
    this.buyButton = page.getByTestId('cart-buy');
    this.cartItem = page.locator('.cart-item');
    
  }

       async navigateTo() {
        await this.page.goto(this.url);
  }

  async checkCart(productName, productId) {
    await expect(this.cartItem.toContainText(`${productName} (p${productId})`))
  }

  // async buyItem () {
  //   await page.getByTestId('cart-buy').click()
  //   await expect(page.locator('body')).toContainText('sukces');
  // }
};


module.exports = { Cart };