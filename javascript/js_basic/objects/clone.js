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
