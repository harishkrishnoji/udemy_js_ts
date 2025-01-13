// street
// city
// zipcode

// let address = {
//   street: "a",
//   city: "b",
//   zipcode: "c",
// };

// function getAddress(address) {
//   for (let addr in address) {
//     console.log(addr, address[addr]);
//   }
// }

// getAddress(address);

//============================================================
let address = createAddress("a", "b", "c");
console.log(address);
// Factory function
// camel notation
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let obj2 = createAddress(2, 3, 4);
console.log(obj2);

//constructor function
// pascal notation
function CreateAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let obj1 = new CreateAddress(1, 2, 3);
console.log(obj1);

//============================================================

function areEqual(address1, address2) {
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode;
}

//============================================================

// Blob post object
// title
// body
// author
// comments
// (author, body)
// isLive

let post = {
    title: "a",
    body: "b",
    author: "c",
    views: 10,
    comments: [
        { author: 'a', body: 'b'},
        { author: 'a', body: 'b'},
    ],
    isLive: true
};

console.log(post)

//============================================================
// Constructor Functions

let post1 = new Post('a', 'b', 'c');
console.log(post1);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
};

//============================================================
// Constructor Functions
