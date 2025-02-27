
let passengers = [{name: "Jane Doloop", paid: true},
    {name: "Dr. Evel", paid: true},
    {name: "Sue Property", paid: false},
    {name: "John Funcall", paid: true }];


function checkNoFlyList(passenger) {
    return passenger.name = "Dr Evel";
}

function checkNotPaid(passenger) {
    return passenger.paid;
}

function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}