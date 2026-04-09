export{}
let a=" hello world i am tester"
let b=a.split(" ")
let target ="world"
let final =""
for(let i of b){
    if (i===target){
        let reverse = ""
        for (let j=target.length-1;j>=0;j--){
            reverse=reverse+i[j]   
        }
        final=final+reverse+" "
    }
    else{
        final=final+i+" "
    }
}

console.log(final)