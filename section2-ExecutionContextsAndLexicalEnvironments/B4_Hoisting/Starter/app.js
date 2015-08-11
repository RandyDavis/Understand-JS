// This "kinda" works, but it's best to avoid hoisting
b();
console.log(a);

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}


// Should do it this way instead!
var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

b();
console.log(a);
