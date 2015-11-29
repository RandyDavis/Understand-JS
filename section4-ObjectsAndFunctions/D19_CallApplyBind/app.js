var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        var fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
}



var logName = function (lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + "; " + lang2);
    console.log('--------------');

}.bind(person);

var logPersonName = logName.bind(person);

//logName(); // won't work without the person object bound to it someway...will get undefined function error

logPersonName();
logName('en', 'es'); // works now since adding .bind(person)


logName.call(person, 'en', 'fr'); // call lets you add in your object and optional params

logName.apply(person, ['en', 'uk']);  // apply works like call, but optional params MUST be in array


(function (lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + "; " + lang2);
    console.log('--------------');

}).apply(person, ['sp', 'fr']);




// function borrowing
var person2 = {
    firstName: 'Jane',
    lastName: 'Doe'
}

console.log(person.getFullName.apply(person2));



// function currying
function multiply(a, b) {
    return a * b;
}

var multiplyByTwo = multiply.bind(this, 2); // setting a to 2
console.log(multiplyByTwo(4)); //4 will now just be the value of "b" and the result should display 8

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(3)); // 9