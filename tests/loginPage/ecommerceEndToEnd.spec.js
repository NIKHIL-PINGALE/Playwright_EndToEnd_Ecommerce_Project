import { test, expect } from '@playwright/test';
import { ecommerceLogin } from '../../page-Objects/pages/ecommerceLogin';
import {productPage} from '../../page-Objects/pages/productPage'
import {checkoutPage} from '../../page-Objects/pages/checkoutPage'
import { purchasePage } from '../../page-Objects/pages/purchasePage';


test('test', async ({ page }) => {

    const Login = new ecommerceLogin(page)
    const product = new productPage(page)
    const checkout = new checkoutPage(page)
    const purchase = new purchasePage(page)


    // go to ecommerce website
    await Login.gotoLoginPage()
    // verify title before login
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")

    // login to ecommerce website
    await Login.login('rahulshettyacademy', 'learning')
    // verify title after successfully login
    await expect(page).toHaveTitle('ProtoCommerce')

    // select from Samsung, iphone, Nokia, Blackberry
    await product.selectProduct('Nokia')
    await product.selectProduct('iphone')
    await product.selectProduct('Nokia')
    await product.selectProduct('Samsung')
    await product.selectProduct('Blackberry')
    await product.selectProduct('iphone')

    // click on checkout button
    await product.checkoutButton.click()
  
    // want to continue shopping
    // await checkout.continueShopping.click()

    // final checkout to purchase
    await checkout.finalCheckout.click()

    //final purchase process (click on checkbox and purchase button)
    await purchase.checkbox.click()
    await purchase.purchaseButton.click()

    
    // await page.pause()
  

  
});