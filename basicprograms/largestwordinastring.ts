export {}
let a ="hey darling how was the yesterday"
let b=a.split(" ")
let largest =""
for (let i of b){
    if(i.length>=largest.length){
        largest=i
    }
}

console.log(largest)