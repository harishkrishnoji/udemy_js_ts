//=======================================================
// Remove elements
const numbers1 = [3,4];

// End - remove element at the end
numbers1.pop();

// to remove number at the Beginning
numbers1.shift();

// to remove number at the Middle of array
// index position 2, and delete count 0

numbers1.splice(2, 1)
console.log(numbers1);

//=======================================================
// Emptying an Array

let numbers2 = [1, 2, 3, 4];
let another = numbers2;

//Solution 1
numbers2 = [];

//Solution 2
numbers2.length = 0;

// Solution 3
numbers.splice(0, numbers2.length)

// Solution 4
while (numbers.length > 0)
    numbers.pop();

console.log(numbers2);
console.log(another);

//=======================================================
// Combining and Slicing Arrays

const first = [1, 2, 3, 4];
const second = [5, 6];

const combined = first.concat(second);


const slice = combined.slice(2, 4);

console.log(combined);
console.log(slice);

//=======================================================
// Spread Operator to Combine two arrays

const first1 = [1, 2, 3, 4];
const second1= [5, 6];

const combined1 = [...first1, 'a', ...second1];


const copy = [...combined1];

console.log(combined1);