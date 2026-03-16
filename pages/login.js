import { expect } from "@playwright/test";

export class Loginpage {
  constructor(page) {
    this.page = page;
    this.url = "/";
    this.welcomeMessage = this.page.getByTestId('welcome-msg');
    this.logInButton = this.page.getByTestId('login-button');
    this.usernameField = this.page.getByTestId('login-username');
    this.passwordField = this.page.getByTestId('login-password');
  }

    async navigateTo() {
        await this.page.goto(this.url);
  }

  async LogIn (username, password) {
    await this.usernameField.fill(username);

    await this.passwordField.fill(password);

    await this.logInButton.click();
  }

  async expectedWelcomeMessage(username){
    await expect(this.welcomeMessage).toContainText(`Witaj: ${username}`)
  }
};

module.exports = { Loginpage };