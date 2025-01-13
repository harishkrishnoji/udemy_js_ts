// template literals

const name1 = "Harish";
const another = `This is my

${name1}

first message`;
console.log(another)

//========================================================
// date object
const now = new Date()
const date1 = new Date('Jan 1 2025 10:00')
const date2 = new Date(2025, 1, 1, 1)
console.log(date1)
console.log(now.getDate())
console.log(now.toDateString())