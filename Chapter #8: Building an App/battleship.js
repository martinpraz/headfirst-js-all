
let view = {
    displayMessage: function(message) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = message;
    }, 

    displayHit: function(location) {
        //TODO
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [
        { locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] },
        { locations: ["10", "11", "12"], hits: ["", "", ""] }
    ],

    // fires at a ship and checks whether it's a hit or not
    fire: function(guess) {

        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[i] = "hit";
                // notify the view that we got a hit
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    // let the player know that this hit sank the battleship
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                // true for hit
                return true;
            }
        }
        // notify the view that we got a miss
        view.displayMiss(guess);
        view.displayMessage("You missed!");
        // false for no hit
        return false;
    },

    // assuming a hit, determines whether sunk or not
    isSunk: function(ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                // if there's a location that doesn't have a "hit" the ship is still floating
                return false;
            }
        }
        // if every location has a "hit" the ship is sunk
        return true;
    }

};