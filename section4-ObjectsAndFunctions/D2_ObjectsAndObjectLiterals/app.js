var Randy = {
    firstName: "Randy",
    lastName: "Davis",
    address: {
        street: "111 Main St.",
        city: "Austin,",
        state: "Tx"
    }
};

function greet(person) {
    console.log("Hi " + person.firstName);
}

greet(Randy);

greet({ firstName: "Mary",
    lastName: "Doe"
});

Randy.address2 = {
    street: "333 Second St.",
    city: "Dallas",
    state: "Tx"
}

