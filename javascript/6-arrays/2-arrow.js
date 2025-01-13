// Regular functions


// const courses = [
//     { id: 1, name: 'a'},
//     { id: 2, name: 'b'},
// ];

// // To find object in the array
// const course = courses.find(function(course) {
//     return course.name === 'a';
// })

// Arrow functions

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

// To find object in the array
const course = courses.find(course => course.name === 'a');
// const course = courses.find(course => console.log(course));

console.log(course);
