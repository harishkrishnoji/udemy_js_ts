// Object oriented programming (OOP)

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

// to delete any objects
delete circle.radius;