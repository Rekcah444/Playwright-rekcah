import {test,expect} from '@playwright/test';

test("testing network intercept",async({page})=>{
    page.route("*/api/users?page=2",(route)=>{
        route.fulfill({
            status:200,
            contentType:"application/json",
            body:JSON.stringify({name:"tester",
                job:"tested succsessfully"
            })
        }); 
    });

});



