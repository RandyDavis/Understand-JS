// How we can start out doing stuff; Lots of code involved, etc...
var arr1 = [1,2,3];
console.log(arr1);
var arr2 = [];

for (var i = 0; i < arr1.length; i++) {

    arr2.push(arr1[i]*2);


}
console.log(arr2);


// How we can add functional programming to get the same result as above but now reusable
function mapForEach(arr, fn) {
    var newArr = [];

    for (var i =0; i < arr1.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };

    return newArr;
}

var arr3 = mapForEach(arr1, function(item) {
    return item * 2;
});
console.log(arr3); // get same result as on line 12 -- [2, 4, 6]

var arr4 = mapForEach(arr1, function (item) {
    return item > 2;
});
console.log(arr4); // false, false, true



var checkPastLimit = function (limiter, item) {
    return item > limiter;
}

var arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr5); //false, true, true

var checkPastLimiterSimplified = function (limiter) {
    return checkPastLimit.bind(this, limiter);
}

var arr6 = mapForEach(arr1, checkPastLimiterSimplified(2));
console.log(arr6);