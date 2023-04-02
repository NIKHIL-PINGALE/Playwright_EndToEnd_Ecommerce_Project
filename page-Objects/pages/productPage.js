exports.productPage = class productPage {

    constructor(page) {

        this.page = page
        this.Samsung = page.locator('app-card').filter({ hasText: 'Samsung Note 8 $24.99 Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' }).getByRole('button', { name: 'Add ' })
        this.iphone = page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet n' }).getByRole('button', { name: 'Add ' })
        this.Nokia = page.locator('app-card').filter({ hasText: 'Nokia Edge $24.99 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet' }).getByRole('button', { name: 'Add ' })
        this.Blackberry = page.locator('app-card').filter({ hasText: 'Blackberry $24.99 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet' }).getByRole('button', { name: 'Add ' })
        this.checkoutButton = page.locator('//*[@id="navbarResponsive"]/ul/li/a')
    }

    async selectProduct(product){
        if( product === 'Samsung'){
            await this.Samsung.click();
        }
        else if( product === 'iphone'){
            await this.iphone.click();
        }
        else if( product === 'Nokia'){
            await this.Nokia.click();
        }
        else if(product === 'Blackberry'){
            await this.Blackberry.click();
        }
        
    }

}