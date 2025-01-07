function gtNumber(a, b) {
  //   return a > b ? a : b;
  if (a > b) return a;
  return b;
}

console.log(gtNumber(3, 3));

function isLandscape(width, height) {
  return width > height;
}

console.log(isLandscape(5, 10));

const output = fizBuzz(1);
console.log(output);

function fizBuzz(input) {
  console.log(typeof input);
  if (typeof input !== "number") return "Not a number";
  else if (input % 5 == 0 && input % 3 == 0) return "fizBuzz";
  else if (input % 3 == 0) return "Buzz";
  else if (input % 5 == 0) return "Buzz";
  return input;
}

// Truty and falsy
const array = [0, null, undefined, "", 3, 2];
countTruthy(array);
// console.log();
function countTruthy(array) {
  let c = 0;
  for (let index of array) {
    if (index) c += 1;
    // console.log(index);
  }
  console.log(c);
}

// print properties

const movie = {
  title: "a",
  rating: 4,
  director: "b",
};
showProperties(movie);
function showProperties(obj) {
  for (let index in obj) {
    if (typeof obj[index] == "string") console.log(index, obj[index]);
  }
}

// stars

showStars(10);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 1; i <= row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// show primes

showPrimes(10);

function showPrimes(limit) {
  for (let num = 2; num <= limit; num++) {
    if (loopNumber(num)) console.log(num);
  }
}

function loopNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
    return true;
  }
}
