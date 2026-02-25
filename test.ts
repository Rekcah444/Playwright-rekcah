let arr: string[] = ["$102.00", "$200", "$15.50", "$9"];

arr.sort((a, b) => 
  parseFloat(a.replace("$", "")) - parseFloat(b.replace("$", ""))
);

console.log(arr);