
export{}
let a="aaeeeezzzz".toLowerCase()
let b="aeiou"
let count=0
for (let i of a){
    if(b.includes(i)){
        count=count+1
    }
}

console.log(count)