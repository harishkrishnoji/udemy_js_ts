console.log("Hello World");

let firstName = "Harish";
let lastName = "Krish";
lastName = "Krishnoji";

// we are reassing let
console.log(firstName, lastName);

// we cannot reassign constant
const lastName1 = "Pannalkar";

console.log(lastName1);

// String Literal
// Number Literal
// Boolean Literal

// static language - type of varilable cannot change
// dynamic language - type of variable can change

// all mumber of type number
console.log(typeof lastName);

// Ojbects - dictionary
// keys are called properties

let person = {
  name: "Harish",
  age: 30,
};
// dot notation (default usage)
person.name = "Jaya";
// bracket notation
person["name"] = "Harish";
console.log(person);
console.log(person.age);

// array
let selectColor = ["red", "blue"];
selectColor[2] = "green";
console.log(selectColor[0]);

console.log(typeof selectColor);
