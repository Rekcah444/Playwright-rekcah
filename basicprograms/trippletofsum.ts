export {}

let a=[-1,-2,1,-3,4,5,-6,-7,0]
let b=[]
for (let i=0;i<a.length;i++){
    for (let j=i+1;j<a.length;j++){
        for (let k=j+1;k<a.length;k++){
            if(a[i]+a[j]+a[k]===0){
                b.push([a[i],a[j],a[k]])
            }
        }
    }
}
console.log(b)