
var randomLoc = Math.floor(Math.random() * 5);
var [loc1, loc2, loc3] = [randomLoc, randomLoc + 1, randomLoc + 2];
var currentGuess;
var alreadyGuessed = [];
var numOfGuesses = 0;
var numOfHits = 0;
var isSunk = false;

while (!isSunk) {
    // Get the user's guess
    currentGuess = parseInt(prompt("Enter a number between 0 and 6!"));
    // Valid userInput? ie range (0-6) 
    if (currentGuess < 0 || currentGuess > 6) {
        alert("Outisde of range! Enter a valid number (0-6)!");
    } else {
        numOfGuesses++;
        // Check if the user's guess is a hit
        if (!alreadyGuessed.includes(currentGuess)) {
            switch (currentGuess) {
                case loc1:
                case loc2:
                case loc3:
                    alreadyGuessed.push(currentGuess);
                    alert("HIT!");
                    numOfHits++;
                    if (numOfHits == 3) {
                        isSunk = true;
                        alert("You sunk my battleship!");
                    }
                    break;
                default:
                    alert("MISS!");
                    continue;
            }
        } else {
            alert("You already guessed that location!");
        }
    }
}

alert(`Congratulations! It only took ${numOfGuesses} guesses! That's ${3 / numOfGuesses * 100} % accuracy!`);
