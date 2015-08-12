// function b() {
// 	console.log(myVar); // 1
// }

// function a() {
// 	var myVar = 2;
// 	b();
// }

// var myVar = 1;
// a();


function a() {
	var myVar = 2;
	function b() {
		console.log(myVar); // 2
	}
	b();
}

var myVar = 1;
a();