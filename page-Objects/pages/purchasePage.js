exports.purchasePage = class purchasePage {

    constructor(page) {

        this.page = page
        this.checkbox = page.getByText('I agree with the term & Conditions')
        this.purchaseButton = page.getByRole('button', { name: 'Purchase' })
        this.successMessage = page.getByText('× Success! Thank you! Your order will be delivered in next few weeks :-).').click();

    }
}