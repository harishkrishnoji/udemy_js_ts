// copy object to another object

const circle = {
  radius: 1,
  draw: function () {
    console.log("draw");
  },
};

// const another = Object.assign({}, circle);

// using spread operator

const another = { ...circle };

console.log(another);


//========================================================
// Garbage collection
// memory allocation and deallocation are done automatically