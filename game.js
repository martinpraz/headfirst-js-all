
var [loc1, loc2, loc3] = [3, 4, 5];
var currentGuess; 
var numOfGuesses = 0;
var numOfHits = 0;
var isSunk = false;

while (!isSunk) {
    // Compare the userInput to valid input values
    currentGuess = parseInt(prompt("Enter a number between 0 and 6!"));
    if (currentGuess < 0 || currentGuess > 6) {
        alert("Outisde of range! Enter a valid number (0-6)!");
    } else {
        numOfGuesses++;
        // Check if the user's guess matches the location
        if (currentGuess === loc1 || currentGuess === loc2 || currentGuess === loc3) {
            alert("HIT!");
            numOfHits++
            if (numOfHits === 3) {
                isSunk = true;
                alert("You sunk my battleship!");
            }
        }
    }
}

alert(`Congratulations! It only took ${numOfGuesses} guesses!`);