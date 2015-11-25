// IIFE
(function (name) {
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
}('John')); // Hello John

console.log(greeting); // Hola


// IIFE
(function (global, name) {
    var greeting = 'Hello';
    global.greeting = 'Hello';
    console.log(greeting + ' ' + name);
}(window, 'John')); // Hello John

console.log(greeting); // Hello
