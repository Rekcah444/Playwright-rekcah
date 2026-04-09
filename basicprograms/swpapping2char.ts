export{}
// let a="hi how are you";
// let b= a.split(" ")
// let c=""
// if (b.length>=2){
    
//     let temp =b[0]
//     b[0]=b[1]
//     b[1]=temp
// }

// c=c+b.join(" ")

// console.log(b)
// console.log(c)



let str = "hello world from chatgpt";

let words = str.split(" ");

if (words.length >= 2) {
    [words[0], words[1]] = [words[1], words[0]];
}

let result = words.join(" ");
console.log(result);