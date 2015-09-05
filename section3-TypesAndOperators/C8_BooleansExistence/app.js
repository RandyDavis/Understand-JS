var a;

// goes to internet and looks for a value

a = "hi";

//if(a) {
//    console.log('Something is there.'); // returns this
//}

a = 0;


if(a) {
    console.log('Something is there.'); // returns nothing
}

if(a || a === 0) {
    console.log('Something is there.'); // returns this
}