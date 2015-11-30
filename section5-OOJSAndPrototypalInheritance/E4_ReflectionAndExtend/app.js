var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

// NEVER DO THIS! STRICTLY FOR EXAMPLE PURPOSES ONY!!!!
john.__proto__ = person;


for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ": " + john[prop]);
    }
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function () {
        return this.lastName + ', ' + this.firstName;
    }
}

var jim = {
    getFirstName: function () {
        return firstName;
    }
}

_.extend(john, jane, jim);

console.log(john);
