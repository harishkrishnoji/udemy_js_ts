// Every element - every()

const numbers = [1, 2, -1, 3];

console.log("Every element");
const allPositive = numbers.every(number => number > 0);
console.log(allPositive)

//=======================================================
// Some element - some()

console.log("Some element");
const atLeastOnePositive = numbers.some(number => number > 0);
console.log(atLeastOnePositive)

//=======================================================
// Filter functions

const filtered = numbers.filter(value => value >=0 );
console.log(filtered);

//=======================================================
// Mapping an Array

const filtered1 = numbers.filter(value => value >=0 );

const items = filtered1.map(n => '<li>' + n + '</li>');
const html = '<ul>' + items.join("") + '</ul>';
console.log(html);

// by default curly brase represent code block, instead of object to return
// if we are returning object, need to put object in paranticis

// Solution 1
// const items1 = filtered1.map(n => {
//     return { value: n };
// });

// Solution 2
const items1 = filtered1.map(n => ({ value: n }));


// Solution 3
// chaining multiple methods
const items2 = numbers
    .filter(n => n >=0 )
    .map(n => ({ value: n }));

console.log(items2);