import {test,expect} from '@playwright/test'
import{LoggedInPage} from '../searchpage'

test("testing amazon",async({page})=>{

    let lp=new LoggedInPage(page)
    lp.openingpage("Amazon");
    lp.clickthesearchbox("#serchbox");
    lp.filliphone("#iphone","iphone")
});

test("testing amazon",async({page})=>{

    let lp=new homepage(page)
    hp.login("admin","letacla")
});
