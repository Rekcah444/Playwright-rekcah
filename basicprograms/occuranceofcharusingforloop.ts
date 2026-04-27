import { vi } from "@faker-js/faker"

let a ="banana"
let visited=" "

for(let i of a){
    if(!visited.includes(i)){
        let count=0
        for(let j of a){
            if(i===j){
                count=count+1
            }
        }
        console.log(i,count)
        visited=visited+i
    }
}