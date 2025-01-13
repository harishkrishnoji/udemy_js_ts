// Sum


const numbers = [1, -1, 2, 3]

// Solution 1
console.log("Solution 1")
let sum2 = 0;
for (let n of numbers)
    sum2 += n;
console.log(sum2);

// Solution 2
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
console.log("Solution 2")
const sum1 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum1);

// Solution 3
console.log("Solution 3")
const sum = numbers.reduce((a, c) => a + c );
console.log(sum);

// console.log(sum(10));

// function sum(limit) { 
//   let sum = 0; 
//   for (let i = 0; i <= limit; i++)
//     if (i % 3 === 0 || i % 5 === 0)
//       sum += i;
  
//   return sum; 
// }