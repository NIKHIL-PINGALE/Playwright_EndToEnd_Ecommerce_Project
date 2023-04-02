exports.checkoutPage = class checkoutPage {

    constructor(page) {

        this.page = page
        this.finalCheckout = page.getByRole('button', { name: 'Checkout' })
        this.continueShopping = page.getByRole('button', { name: 'Continue Shopping' })
    }
}