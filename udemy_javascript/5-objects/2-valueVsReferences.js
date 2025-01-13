// objects
let x = { value: 10 };

let y = x;

// primitives
let z = 10;

x.value = 20;

// primitives are copied by their value
// objects are copied by their reference

//========================================================

let number = 10;
function increase(number) {
    // local number value, local to this function
    number++;
}
increase(number)
console.log(number)


let obj = { value: 10 };
function increase(obj) {
    // local obj value, local to this function
    obj.value++;
}
increase(obj)
console.log(obj)