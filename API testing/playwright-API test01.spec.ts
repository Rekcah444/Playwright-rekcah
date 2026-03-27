import {test,expect} from '@playwright/test'
import { Faker} from '@faker-js/faker'

test("testing api",async({request})=>{
    const bookingid=925;
    const response=await request.get(`/booking/${bookingid}`);
    
    const resbody=await response.json();
    console.log(resbody);
    // expect(response).toBeOK();
    expect(response.ok()).toBeTruthy;
    expect(response.status).toBe(200);
});



