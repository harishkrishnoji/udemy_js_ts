// two kind of string
// string primitive
const message = 'hi \n Harish';
// string object
const another = new String('hi \n Harish');

console.log(message.length)
console.log(message[1])
console.log(message.includes("hi"))
console.log(message.startsWith("h"))
console.log(message.endsWith("i"))
console.log(message.indexOf('i'))
console.log(message.replace("hi", "bye"))
console.log(message.trim())
console.log(message.trimLeft())