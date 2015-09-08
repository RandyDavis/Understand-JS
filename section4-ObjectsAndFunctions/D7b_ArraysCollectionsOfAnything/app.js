var arr = [
    1,
    false,
    {
        name: 'Randy',
        address: '123 Main St.'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "hello"
];

console.log(arr);

arr[3](arr[2].name);