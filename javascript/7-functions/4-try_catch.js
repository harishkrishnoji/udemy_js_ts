// defensive programming

const person = {
    firstName: 'Harish',
    lastName: 'krishnoji',
    // fullName: function() {}
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string') return;
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Jay Harish'
console.log(person);


// Throw an error

const person1 = {
    firstName: 'Harish',
    lastName: 'krishnoji',
    // fullName: function() {}
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error("value in not a string.");
        const parts = value.split(" ");
        if (parts.length !== 2)
            throw new Error("Enter a first and last name");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person1.fullName = null;
}
catch (e) {
    // console.log(e);
    alert(e);
}

console.log(person1);
