export{}
let a="abcdefghijkl"
let b=""
for (let i=0;i<a.length;i++){
    let aschi=(a.charCodeAt(i));
    b=b+String.fromCharCode(aschi-32)
}                                                   

console.log(b)