
// represents the UI (user interface) of the application
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

// data and logic of the application
let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [
        { locations: [], hits: ["", "", ""] },
        { locations: [], hits: ["", "", ""] },
        { locations: [], hits: ["", "", ""] }
    ],

    // fires at a ship and checks whether it's a hit
    fire: function(guess) {

        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
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
    },

    // MASTER METHOD: create "ships" array with number of ships equal to "numShips" property
    generateShipLocations: function() {
        let locations;
        // each ship we want to generate locations for..
        for (let i = 0; i < this.numShips; i++) {
            do {
                // .. we generate a new set of locations..
                locations = this.generateShip();
                // ..and check to see if those locations overlap with any existing ships..
                // ..if they do, keep generating new locations until there's no collision
            } while (this.collision(locations)); 
            this.ships[i].locations = locations;
        }
    },

    // create a single ship (no overlap tested yet)
    generateShip: function() {
        // choose ship direction: 0 == vertical, 1 == horizontal
        let direction = Math.floor(Math.random() * 2);
        let row, col;

        if (direction === 1) {
            // generate a starting location for a horizontal ship
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            // generate a starting location for a vertical ship
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
        }

        let newShipLocations = [];

        for (let i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                // add location to array for a new horizontal ship
                newShipLocations.push(row + "" + (col + i));
            } else {
                // add location to array for a new vertical ship
                newShipLocations.push((row + i) + "" + col);
            }
        }
        
        return newShipLocations;
    },

    // take single ship as argument, make sure it doesn't overlap with ship already on the board
    collision: function(locations) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = model.ships[i];
            for (j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        // if we got this far and haven't returned
        // then there's no match for indexOf and therefore no collision
        return false;
    }

};

// getting the guess, processing the guess, and sending it to the model
let controller = {
    guesses: 0,


    // process guess (with parseGuess()), pass it to the model, detect the end of the game
    processGuess: function(guess) {
        let location = this.parseGuess(guess);
        if (location) {
            this.guesses++;
            // result stored in variable hit b/c model.fire() return a Boolean
            let hit = model.fire(location);
            
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage(`You sank all my battleships in ${this.guesses} guesses.`);
            }
        }
    },

    parseGuess: function(guess) {
        let alphabet = ["A", "B", "C", "D", "E", "F", "G"];

        if (guess == null || guess.length !== 2) {
            alert("Oops, please enter a letter and a number on the board!");
        } else {
            let row = alphabet.indexOf(guess.charAt(0));
            let column = guess.charAt(1);

            if (isNaN(row) || isNaN(column)) {
                alert("Oops, that isn't on the board");
            } else if (row < 0 || column < 0 || row >= model.boardSize || column >= model.boardSize) {
                alert("Oops, that's OFF the board!");
            } else {
                return row + column;
            }
            
        }
        // if we get here, there was a failed check along the way, so return null
        return null;
    },

};

// fireButton event-handler
function handleFireButton() {
    let guessInput = document.getElementById("guessInput");
    let guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = "";
}

// send guess by pressing Enter
function handleKeyPress(event) {
    let fireButton = document.getElementById("fireButton");
    if (event.key === "Enter") {
        fireButton.click();
        // prevent default form submission behavior
        event.preventDefault();
    }
}

function init() {
    // fire by clicking the fire button
    let fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;

    // fire by pressing Enter
    let guessInput = document.getElementById("guessInput");
    guessInput.addEventListener("keydown", handleKeyPress);

    model.generateShipLocations();
}

window.onload = init;