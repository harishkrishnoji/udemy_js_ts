// logical AND (&&)
// Returns TRUE if both operands are TRUE

console.log(true && true);
console.log(false && true);
console.log(false && false);
console.log(true && false);

// logical OR (||)
// Return TRUE if one of the operand is TRUE

console.log(true || true);
console.log(false || true);
console.log(false || false);
console.log(true || false);

// NOT (!)
console.log("NOT");
let resp = true;
console.log(!resp);

// logical with non boolean

// Falsy (False)
// undefined
// null
// 0
// false
// ''
// NaN (Not a Number)

// Anthing that is not Falsy is Truthy

// short-circuting
console.log(false || 1 || 2);

let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);
