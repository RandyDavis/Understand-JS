console.log(1 < 2 < 3);  // true
console.log(3 < 2 < 1);  // true


var num = Number("3"), numF = Number(false), numT = Number(true);
console.log(num); // 3
console.log(numF); // 0
console.log(numT); // 1


var a = 0;
var b = false;

if (a == b) {
    console.log('They are equal!'); // Returns this console message
} else {
    console.log("Nope, they are not equal!");
}

if (a === b) {
    console.log('They are equal!');
} else {
    console.log("Nope, they are not equal!"); // Returns this console message
}


if (a != b) {
    console.log('They are not equal!');
} else {
    console.log("Equal!"); // Returns this console message
}



if (a !== b) {
    console.log('They are not equal!');  // Returns this console message
} else {
    console.log("Equal!");
}