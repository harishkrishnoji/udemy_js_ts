// factory function
// Camel notication
function createCircle(radius) {
  return {
    // if the key and value are same, we can just represent by key
    // radius: radius;
    radius,
    // draw: function draw () {};
    draw() {
      console.log('draw');
    }
  };
}

const circle = createCircle(2); 
console.log(circle);


//================================================================
// constructor function
// Pascal notation
// like python self, this is empty object
function Circle1(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// 'new' (operator) will create empty object
// will set all objects and return object
const circle1 = new Circle1(1);
console.log(circle1);


//================================================================
// constructor function
new String();
new Boolean();
new Number();

// every object has constructor property