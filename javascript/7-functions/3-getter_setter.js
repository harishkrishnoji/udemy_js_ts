// Getter and Setter

const person = {
    firstName: 'Harish',
    lastName: 'krishnoji',
    // fullName: function() {}
    fullName() {
        return `${person.firstName} ${person.lastName}`
    }
}

console.log(`${person.firstName} ${person.lastName}`)
console.log(person.fullName());


// Getter - to access properties in the object
// setter - set properties in the object (mutate)


const person1 = {
    firstName: 'Harish',
    lastName: 'krishnoji',
    // fullName: function() {}
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person1.fullName = 'Jay Harish'
console.log(person1);
