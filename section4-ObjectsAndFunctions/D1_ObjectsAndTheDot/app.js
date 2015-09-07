var person = new Object();

person["firstName"] = "Randy";
person["lastName"] = "Davis";

var firstNameProperty = "firstName";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstName);
console.log(person.lastName);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "Austin";
person.address.state = "Texas";
console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["city"]);
