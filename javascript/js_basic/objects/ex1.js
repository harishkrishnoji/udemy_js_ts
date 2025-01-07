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

// ====================
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
