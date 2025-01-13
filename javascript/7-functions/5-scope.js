// Local vs Global Scope

// const is limitted to the block or a function
// it is not accessable outside
// local const takes precidense over global

// Global scope
const color = 'red';

function start() {
    // local scope
    const message = 'hi';
    if (true) {
        const another = 'bye';
    }
    for (let i = 0; i<5; i++){
        console.log(i);
    }
}
console.log(color);

//=======================================================
// Let vs Var key word

function start() {
    for (let i=0; i <5; i++) {
        console.log(i);
    }
    console.log(i);
}

function start1() {
    for (var i=0; i <5; i++) {
        console.log(i);
    }
    console.log(i);
}

// let
// After ES6 (ES2015)
// start();

// var
// before ES6 (ES2015)
start1();
