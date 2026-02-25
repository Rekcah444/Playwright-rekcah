import {test,expect} from '@playwright/test'

test.describe("group1",()=>{

    test("test1",async()=>{
        console.log("test1 completed");});
    test("test2",async()=>{
    console.log("test2 completed");});
    test("test3",async()=>{
    console.log("test3 completed");});


});
test.describe("group2",()=>{

    test("test4",async()=>{
        console.log("test4 completed");});
    test("test5",async()=>{
    console.log("test5 completed");});
    test("test6",async()=>{
    console.log("test6 completed");});


});