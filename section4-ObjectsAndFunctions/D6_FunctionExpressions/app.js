greet();

function greet() {
    console.log('hi');
}

// anonymousGreet(); //calling here results in anonymousGreet() is undefined error

var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet();

function log(a) {
    console.log(a);
    a(); // invoking a function passed to a function
}

//log(3);
//log("hello");
//log({
//    greeting: 'hi',
//    exit: 'bye'
//});

log(function() {
    console.log('hi');
});