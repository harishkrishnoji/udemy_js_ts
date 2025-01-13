// Adding elements
const numbers1 = [3,4];
// to add number at the End 
numbers1.push(5, 6);

// to add number at the Beginning
numbers1.unshift(1, 2);

// to add number at the Middle of array
// index position 2, and delete count 0

numbers1.splice(2, 0, 'a', 'b')
console.log(numbers1);



//=======================================================
// Finding elements (Primitives)

const numbers2 = [1,2,3,4];
console.log(numbers2.indexOf('a'));
console.log(numbers2.indexOf(1));
console.log(numbers2.lastIndexOf(1));

// index search should begin
console.log(numbers2.includes(1, 0));

//=======================================================
// Finding elements (reference Types)

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

// To find object in the array
const course = courses.find(function(course) {
    return course.name === 'a';
})

// To find the index of object
const course1 = courses.findIndex(function(course) {
    return course.name === 'b';
})

console.log(course)
console.log(course1)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find


//=======================================================
// const numbers = arrayFromRange(1, -4);

// console.log(numbers);

// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++)
//     output.push(i);
//   return output;
// }

