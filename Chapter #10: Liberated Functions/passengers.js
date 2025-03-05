
let passengers = [{ name: "Jane Doloop", paid: true, ticket: "coach" },
{ name: "Dr. Evel", paid: true, ticket: "firstclass" },
{ name: "Sue Property", paid: false, ticket: "premium" },
{ name: "John Funcall", paid: true, ticket: "coach" }];


// function checkNoFlyList(passenger) {
//     return passenger.name === "Dr. Evel";
// }

// function checkNotPaid(passenger) {
//     return (!passenger.paid);
// }

// function printPassenger(passenger) {
//     console.log((passenger.paid) ? `${passenger.name} has paid.` : `${passenger.name} has not paid.`)
// }

// function processPassengers(passengers, testFunction) {
//     for (let i = 0; i < passengers.length; i++) {
//         if (testFunction(passengers[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// let allCanFly = processPassengers(passengers, checkNoFlyList);

// if (!allCanFly) {
//     console.log("The plane can't take off: We have a passenger on the no fly list!");
// }

// let allPaid = processPassengers(passengers, checkNotPaid);

// if (!allPaid) {
//     console.log("The plane can't take off: Not everyone has paid!");
// }

function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    let getDinnerOrderFunction = createDinnerOrder(passenger);
    getDrinkOrderFunction();
    getDinnerOrderFunction();
    // show movie
    // pick up trash
}

function createDrinkOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("Would like a cocktail or wine? (firstclass)");
        }

    } else if (passenger.ticket === "premium") {
        orderFunction = function () {
            alert("Your choice is wine, cola or water (premium)");
        }
    } else {
        orderFunction = function () {
            alert("Your choice is cola or water (coach)");
        }
    }
    return orderFunction;

}

function createDinnerOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("Choices are chicken or pasta (firstclass)");
        }

    } else if (passenger.ticket === "premium") {
        orderFunction = function () {
            alert("Choices are snack box or cheese plate (premium)");
        }
    } else {
        orderFunction = function () {
            alert("Choices are peanuts or pretzels (coach)");
        }
    }
    return orderFunction;
}

// MAIN
servePassengers(passengers);