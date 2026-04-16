import {test,expect} from '@playwright/test'
import{LoggedInPage} from '../searchpage'

test("testing amazon",async({page})=>{

    let lp=new LoggedInPage(page)
    lp.openingpage("https://amazon.com");
    lp.clickthesearchbox("#serchbox");
    lp.filliphone("#iphone","iphone")
});