// @ts-check
import { test, expect } from "@playwright/test";
// import {Mainpage} from "../pages/mainpage";
import { Loginpage } from "../pages/login";

test.beforeEach(async ({ page }) => {
  const loginpage = new Loginpage(page);
  await loginpage.navigateTo();
});

test('Main Page - Log in', async ({page}) => {
  const loginpage = new Loginpage(page);

  const testedUser = {
    username: process.env.ADMIN_LOGIN,
    password: process.env.ADMIN_PASSWORD
  }

  await loginpage.LogIn(testedUser.username,testedUser.password);

  await loginpage.expectedWelcomeMessage(testedUser.username);
});
