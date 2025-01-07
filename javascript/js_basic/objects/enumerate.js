const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// enumerate dictionary
for (let key in circle) console.log(key, circle[key]);

// similar to dictionary keys
for (let key of Object.keys(circle)) console.log(key, circle[key]);

// key vaule similar to dictionary of items
for (let key of Object.entries(circle)) console.log(key);

// to find if property exist in object, use in operator
if ("radius" in circle) console.log("yes");
