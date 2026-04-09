export {}
let a=[1,33,4,55,66,77,58,99,91,100,1000]

for (let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]<a[j]){
            [a[i],a[j]]=[a[j],a[i]]
        }
    }

}

console.log(a)

// let arr = [5, 3, 8, 2, 1];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             // swap
//             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//     }
// }

// console.log(arr);