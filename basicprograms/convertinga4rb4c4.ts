export{}
let a="a4b3c2a1"
let c=""
for (let i=0;i<a.length;i+=2){
    let ch =a[i]
    let count =Number(a[i+1])
    for(let j=0;j<count;j++){
        c=c+ch
        // c=c+`${ch}${count}`
    }
}


console.log(c)