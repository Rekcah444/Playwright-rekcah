const a: number[] = [11, 10, 2, 3, 4, 5, 6, 4, 7, 8, 9, 11, 22, 4, 5, 6, 8, 9];

const b: { [key: number]: number } = {};

// Count frequency
for (let i = 0; i < a.length; i++) {
  const num = a[i];

  if (num in b) {
    b[num] = b[num] + 1;
  } else {
    b[num] = 1;
  }
}

console.log(b);


// Print like Python: value : key
for (const key in b) {
  const value = b[key];
  console.log( key +" : "+ value + " , ");
}