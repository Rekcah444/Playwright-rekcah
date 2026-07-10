let a = ["listen", "silent", "hello", "enlist", "world", "eat", "tea", "apple", "bat", "tab", "cat"]
let d=new Set()
let final=[]
for(let i=0;i<a.length;i++){
    let temp:any=[a[i]]
    if(d.has(i))
    continue;
    for(let j=i+1;j<a.length;j++){
        let f=a[i]
        let s=a[j]
        
        if (f.length!==s.length)
        continue;
        let count1=0
        let count2=0
        for(let x of f){
            for(let y of f){
                if(y===x){
                    count1+=1
                }
            }
            for(let z of s){
                if(z===x){
                    count2+=1
                }
            }
        }
        if(count1===count2){
        temp.push(s)
        d.add(j)
        }
        
    }
    final.push(temp)
}
console.log(final)
