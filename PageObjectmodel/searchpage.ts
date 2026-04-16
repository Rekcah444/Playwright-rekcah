import {Page,expect,test} from '@playwright/test'

export class LoggedInPage {
    page: Page;

    constructor(page:Page){
        this.page = page;
    }

    async openingpage(url:string){
        this.page.goto(url)
    }
    async clickthesearchbox(locator:string){
        this.page.click(locator)
    }
    async filliphone(locator:string,text:string){
        this.page.fill(locator,text)

    }
}

