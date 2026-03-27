import { da } from '@faker-js/faker';
import {test,expect} from '@playwright/test'
import fs from 'fs'

//json file reader
function readjson(filepath:string){
    return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}
test("testing api chnaing",async({request})=>{

    const reqbody = readjson("API testing/model-input.json");
    const response = await request.post("/booking", {data: reqbody});
    if (!response.ok()) {
        const errorText = await response.text();
        console.error('POST /booking failed:', errorText);
        throw new Error('POST /booking failed');
    }
    const responsebody = await response.json();
    const bookingid = responsebody.bookingid;
    console.log(bookingid);
    expect(responsebody).toHaveProperty("bookingid");

    //creating token
    const tokenbody = readjson("API testing/token.json");
    const token_response = await request.post("/auth", {data: tokenbody});
    if (!token_response.ok()) {
        const errorText = await token_response.text();
        console.error('POST /auth failed:', errorText);
        throw new Error('POST /auth failed');
    }
    const tokenresponsebody = await token_response.json();
    const token1 = tokenresponsebody.token;
    console.log(token1, "token");

    //updating the put request
    const body_put = readjson("API testing/model-input_for_PUT.json");
    const response_PUT = await request.put(`/booking/${bookingid}`,
        {
            data: body_put,
            headers: {"Cookie": `token=${token1}`}
        });
    if (!response_PUT.ok()) {
        const errorText = await response_PUT.text();
        console.error('PUT /booking/{bookingid} failed:', errorText);
        throw new Error('PUT /booking/{bookingid} failed');
    }
    const PUTresponsebody = await response_PUT.json();
    console.log(PUTresponsebody);
    expect(response_PUT.ok()).toBeTruthy();
    expect(response_PUT.status()).toBe(200);


});



