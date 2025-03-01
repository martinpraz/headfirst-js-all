
let passengers = [{name: "Jane Doloop", paid: true, ticket: "coach"},
    {name: "Dr. Evel", paid: true, ticket: "firstclass"},
    {name: "Sue Property", paid: false, ticket: "firstclass"},
    {name: "John Funcall", paid: true, ticket: "coach"}];


function checkNoFlyList(passenger) {
    return passenger.name === "Dr. Evel";
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

function printPassenger(passenger) {
    console.log((passenger.paid) ? `${passenger.name} has paid.` : `${passenger.name} has not paid.`)
}

function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

let allCanFly = processPassengers(passengers, checkNoFlyList);

if (!allCanFly) {
    console.log("The plane can't take off: We have a passenger on the no fly list!");
}

let allPaid = processPassengers(passengers, checkNotPaid);

if (!allPaid) {
    console.log("The plane can't take off: Not everyone has paid!");
}

function serveCustomer(passenger) {
    // get drink order
    if (passenger.ticket = "firstclass") {
        alert("Would like a cocktail or wine?");
    } else {
        alert("Your choice is cola or water");
    }
    // get dinner order
    // pick up trash
}