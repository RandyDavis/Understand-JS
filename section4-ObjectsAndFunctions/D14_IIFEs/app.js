// function statement
function greet (name) {
    console.log('Hello ' + name);
}

greet('Randy');

// function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('Randy');

// Immediately Invoked Function Expression (IIFE)
var greeting = function (name) {
    return ('Hello ' + name);
}('Randy');
console.log(greeting);



var firstname = "Randy";
(function(name) {
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + " " + name);
}(firstname)); // IIFE