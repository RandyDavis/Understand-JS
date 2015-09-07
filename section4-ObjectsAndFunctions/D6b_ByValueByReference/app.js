// by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);


// by reference (all objects INCLUDING FUNCTIONS)
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = "hello"; // mutate greeting value ...mutate just means to change...immutable means it can't be changed.

console.log(c);
console.log(d);
console.log(c.greeting);


// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);

console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)

c = { greeting: 'howdy' };
console.log(c);
console.log(d);