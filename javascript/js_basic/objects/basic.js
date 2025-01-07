const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

// draw method
circle.draw();

// factory function
// Camel notication
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

console.log(createCircle(2));

// constructor function
// Pascal notation
function Circle1(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle1 = new Circle1(1);
console.log(circle1);
