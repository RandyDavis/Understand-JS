var greet = "Hello!";
var greet = "Hola!";

console.log(greet);

var english = {
    greetings: {
        basic: "Hello!"
    }
};
var spanish = {};

// english.greetings.greet = "Hello!"; // Uncaught TypeError: Cannot set property 'greet' of undefined
english.greetings = {};
english.greetings.greet = "Heyo!";

english.greet = "Hello!";
spanish.greet = "Hola!";

console.log(english);
console.log(spanish);
