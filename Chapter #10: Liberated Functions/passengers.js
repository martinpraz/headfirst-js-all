
let passengers = [{name: "Jane Doloop", paid: true},
    {name: "Dr. Evel", paid: true},
    {name: "Sue Property", paid: false},
    {name: "John Funcall", paid: true }];


function checkNoFlyList(passenger) {
    return passenger.name === "Dr. Evel";
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
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