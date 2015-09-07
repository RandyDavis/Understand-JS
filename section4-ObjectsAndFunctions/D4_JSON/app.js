var objectLiteral = {
    firstName: "Mary",
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstName": "Mary", "isAProgrammer": true }');

// var jsonValue = JSON.parse('{ "firstName": "Mary", "isAProgrammer": true }');

console.log(jsonValue);