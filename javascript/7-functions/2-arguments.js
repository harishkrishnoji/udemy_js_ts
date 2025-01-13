// you can pass more than expected arguments

function sum(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(sum(1, 2, 3, 4, 5));

// same can be written as
function sum1() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum1(1, 2, 3, 4, 5));

//================================================

// Rest Operator (...agrs)
// we can pass many arguments, args in an array of arguments
// Rest parameter should be last arg

function sum2(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sum2(1, 2, 3, 4, 5));


function sum3(discount, ...args) {
    const total = args.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum3(.1, 2, 3, 4, 5));


//================================================
// Default parameters

function interset(principle, rate, years) {
    // Give default value
    rate = rate || 3.5;
    years = years || 5;
    return principle * rate / 100 * years;
}

console.log(interset(10000));

// ES6

function interset1(principle, rate = 3.5, years = 5) {
    return principle * rate / 100 * years;
}

console.log(interset1(10000));