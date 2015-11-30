function Person(firstName, lastName) {

    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    console.log('This function is invoked.');

}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);