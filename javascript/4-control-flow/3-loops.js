// For loop
// three statement
// 1 - initial statement, terminate statement: let i = 0;
// 2 - condition: i < 5;
// 3 - Increment expression: i++
// loop variable, condition, increment expression

for (let i = 0; i < 5; i++) {
//   if (i % 2 !== 0) console.log("hello world", i);
  console.log("hello world", i);
}

//=============================================================
// while loop
console.log("while loop");
let i = 9;

while (i <= 5) {
  if (i % 2 !== 0) console.log("hello world", i);
  i++;
}

//=============================================================
// do while loop
console.log("do while loop");
i = 9;

do {
  if (i % 2 !== 0) console.log("hello world", i);
  i++;
} while (i <= 5);

//=============================================================
// infinite loop
i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

//=============================================================
// for-in loop
// use to iterate the properties of the object

let person = {
  name: "harish",
  age: 30,
};

for (let key in person) console.log(key, person[key]);

let colors = ["red", "green", "blue"];
for (let index in colors) console.log(index, colors[index]);

//=============================================================
// ES6
// for-of
// use this for array

for (let color of colors) console.log(color);
