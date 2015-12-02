// polyfill start
if(!Object.create) {
    Object.create(function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation' + ' only accepts the first parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    })
}
// polyfill end

var person = {
    firstName: 'Default',
    lastName: 'Default',
    greet: function () {
        return 'Hi ' + this.firstName;
    }
}


var john = Object.create(person);
john.firstName = 'John';
john.lastName = "Doe";
console.log(john);


