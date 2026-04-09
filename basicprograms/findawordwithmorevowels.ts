let a="i love automation testing and programming"
let b="aeiou"
let maxcount=0
let word=""
let c=a.split(" ")
for(let i of c){
    let count=0
    for(let ch of i){
        if(b.includes(ch)){
        count=count+1
    }
    }

    if(count>maxcount){
        maxcount=count
        word=i
    }
}

console.log(word,maxcount)
   


