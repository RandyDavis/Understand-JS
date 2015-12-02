Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
    console.log(prop + ": " +  arr[prop]);
}

// DON'T USE for in with arrays is the point!  Prototypes will be displayed in the array so it's safer to use regular for loops