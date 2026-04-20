const num=5

for (let i=num-1;i>0;i--){
    let fact=1
    for(let j=1;j<i;j++){
        fact=fact*j
    }
 
    console.log(`${i}","${fact}`)
}