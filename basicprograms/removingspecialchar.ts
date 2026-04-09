export {}
let a="@@he##llo$$ w%%or^?ld,."
let b="@#$%^?,."
let c=""
for (let i of a){
    if(!b.includes(i)){
        c=c+i
    }
}

console.log(c)