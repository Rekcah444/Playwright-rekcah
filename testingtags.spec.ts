/*examples of tages

@sanity
@regression
@unit

*/
import {test,expect,Locator,Page} from "@playwright/test"


    test.fail("test1 @sanity",async()=>{
        console.log("test1 completed");});
    test("test2 @regression @sanity",async()=>{
    console.log("test2 completed");});
    test("test3 @smoke",async()=>{
    console.log("test3 completed");});





    test("test4 @smoke",async()=>{
        console.log("test4 completed");});
    test("test5 @regression",async()=>{
    console.log("test5 completed");});
    test("test6 @sanity",async()=>{
    console.log("test6 completed");});