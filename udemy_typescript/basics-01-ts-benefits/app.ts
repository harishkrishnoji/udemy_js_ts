//============================================================
// Notes during training

// Normal JS function without type
// function add(n1, n2) {
//     return n1 + n2;
// }

// const number1 = '5'
// const number2 = 2.8;
// console.log(add(number1, number2));


// Normal JS function with type and type check within JS
// function add(n1: number, n2: number) {
//     if (typeof(n1) !== 'number' || typeof(n2) !== 'number') {
//         throw new Error("Not a number type!")
//     }
//     console.log(typeof(n1))
//     return n1 + n2;
// }

// const number1 = '5';
// const number2 = 2.8;
// console.log(add(number1, number2));

//============================================================

function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);