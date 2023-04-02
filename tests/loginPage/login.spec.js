import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-Objects/pages/loginPage';

test('test', async ({ page }) => {

  const Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await Login.login('tomsmith', 'SuperSecretPassword!')
});