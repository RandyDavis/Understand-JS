function greet(firstName, lastName, language) {

    language = language || 'english';

    if (arguments.length === 0) {
        console.log("Missing parameters!");
        console.log("------------------");
        return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments);
    console.log(arguments[0]);
    console.log("------------------");

}

greet();
greet("John");
greet("John", "Doe");
greet("John", "Doe", "english");