function Person(firstName, lastName) {

    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    console.log('This function is invoked.');

}

Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Janey', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function () {
    return this.lastName + ", " + this.firstName;
}

console.log(john.getFormalFullName());