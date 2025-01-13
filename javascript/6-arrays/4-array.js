// Iterating Array

const numbers = [1, 2, 3];

// Solution 1
console.log("Solution 1");
for (let number of numbers)
    console.log(number)

// Solution 2 - using arrow function
console.log("Solution 2");
numbers.forEach(number => console.log(number));
numbers.forEach((number, index) => console.log(index, number));


//=======================================================
// Joining Array

const numbers1 = [1, 2, 3];

console.log(numbers1.join(','));

const message = "This is my first message";

console.log(message.split(' '));

//=======================================================
// Sorting Array

const numbers2 = [4, 2, 3];

console.log(numbers2.sort());
console.log(numbers2.reverse());

const courses = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'javaScript'},
];

courses.sort(function(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
})

console.log(courses)