// name is parameter
function greet(name, lastName = "") {
  console.log("hello " + name + " " + lastName);
}

// this is statement ; to execute
// Harish is an argument
// greet("harish");
// greet("Jaya");

//========================================
// performing task
// calucating a value

function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);
