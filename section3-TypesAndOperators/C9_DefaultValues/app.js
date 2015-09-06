function greet(name) {
    //console.log(name);
    name = name || '<Your name here>';
    console.log('Hello ' + name);
}

greet("Randy");  // returns "Randy"
greet(); // returns '<Your name here>'