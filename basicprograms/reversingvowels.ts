export{}
// let a="hi this is automation tester".toLowerCase()
// let b="aeiou"
// let c=""
// let intent=-1
// let d=""
// for (let i of a ){
//     if(b.includes(i)){
//         c=c+i
//     }
// }

// for (let i of a ){
//     if(b.includes(i)){
//         d=d+c[c.length+intent]
//         intent=intent-1
//     }
//     else{
//         d=d+i
//     }
// }

// console.log(c)
// console.log(d)



let a="hi this is automation tester".toLowerCase()
let b="aeiou"
let c=""
let intent=-1
let d=""
for (let i of a ){
    if(b.includes(i)){
        c=c+i
    }
}

for (let i of a ){
    if(b.includes(i)){
        d=d+c[c.length+intent]
        intent=intent-1
    }
    else{
        d=d+i
    }
}

console.log(c)
console.log(d)