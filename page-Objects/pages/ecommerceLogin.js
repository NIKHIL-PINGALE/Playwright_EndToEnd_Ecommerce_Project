exports.ecommerceLogin = class ecommerceLogin {

    constructor(page) {

        this.page = page
        this.username = page.getByLabel('Username:')
        this.password = page.getByLabel('Password:')
        this.agree_checkbox = page.getByLabel('I Agree to the terms and conditions')
        this.signin_button = page.getByRole('button', { name: 'Sign In' })
       
    }

    async gotoLoginPage(){
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    }

    async login(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.agree_checkbox.check()
        await this.signin_button.click()
    }

}