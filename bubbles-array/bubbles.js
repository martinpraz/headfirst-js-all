let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 
              54, 48, 69, 34, 55, 51, 52, 44, 51, 
              69, 64, 66, 55, 52, 61, 46, 31, 57, 
              52, 44, 18, 41, 53, 55, 61, 51, 44];

// function bubblePrinter(array) {
//     let highestScore = 0;
//     let bestSolutionList = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > highestScore) {
//             highestScore = array[i];
//         }
//         console.log(`Bubble solution #${i} score: ${scores[i]}`);
        
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === highestScore) {
//             bestSolutionList.push(i);
//         }
//     }
    
//     console.log(`Bubble tests: ${array.length}`);
//     console.log(`Highest bubble score: ${highestScore}`);
//     console.log(`Solutions with highest score: ${bestSolutionList}`);
// }

// bubblePrinter(scores);


// 
function printAndGetHighScore(array) {
    let highestScore = 0;

    for (let i = 0; i < array.length; i++) {
        console.log(`Bubble solution #${i} score: ${scores[i]}`);

        if (array[i] > highestScore) {
            highestScore = array[i];
        }
    }
    
    return highestScore;
}

function getBestResults(array, highestScore) {
    let bestSolutionList = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === highestScore) {
            bestSolutionList.push(i);
        }
    }

    return bestSolutionList;
}

printAndGetHighScore(scores);

const highestScore = printAndGetHighScore(scores);
const bestSolutionList = getBestResults(scores, highestScore);

console.log(`Bubble tests: ${scores.length}`);
console.log(`Highest bubble score: ${highestScore}`);
console.log(`Solutions with the highest score: ${bestSolutionList}`);