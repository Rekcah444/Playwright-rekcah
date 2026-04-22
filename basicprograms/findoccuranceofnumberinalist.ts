export {}
const a: number[] = [11, 10, 2, 3, 4, 5, 6, 4, 7, 8, 9, 11, 22, 4, 5, 6, 8, 9];

const b: { [key: number]: number } = {};

// Count frequency
for (let i of a) {


  if (i in b) {
    b[i] = b[i] + 1;
  } else {
    b[i] = 1;
  }
}

console.log(b);

for (const key in b) {
  const value = b[key];
  console.log( key +" : "+ value + " , ");
}