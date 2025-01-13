// Function Declaration

function walk() {
    console.log('walk');
}

// function Expression (Anonymous)

let run = function() {
    console.log('run');
};

let x = 1;

// named function Expression

let run1 = function walk() {
    console.log('run1');
};

run();
run1();
walk();

// key difference between these two
// Hosting
// moving function declaration to top of the file
// this is done automatically by javascript

// we can call the function before Function Declaration
// we cannot call the funtion before in function Expression