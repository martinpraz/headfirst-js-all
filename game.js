
var [loc1, loc2, loc3] = [3, 4, 5];
var currentGuess; 
var numOfGuesses = 0;
var numOfHits = 0;
var isSunk = false;

while (!isSunk) {
    // Get the user's guess
    currentGuess = parseInt(prompt("Enter a number between 0 and 6!"));
    // Compare the userInput to valid input values
    if (currentGuess < 0 || currentGuess > 6) {
        alert("Outisde of range! Enter a valid number (0-6)!");
    } else {
        numOfGuesses++;
        // Check if the user's guess matches the location
        switch (currentGuess) {
            case loc1:
            case loc2:
            case loc3:
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
    }
}

alert(`Congratulations! It only took ${numOfGuesses} guesses! That's ${3/numOfGuesses * 100} % accuracy!`);