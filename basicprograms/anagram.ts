export {}
let a="silent";
let b="evil";

let count1=0;
let count2=0;
for (let i of a){
    for(let j of a){
        if (j===i){
            count1++;
        }
    }
    for(let j of b){
        if (j===i){
            count2++;
        }
    }
    if (count1!==count2){
        console.log("not anagram");
        break;
    }
    
    
}
if (count1===count2){
    console.log("anagram");
}   
