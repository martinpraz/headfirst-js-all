let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 
              54, 48, 69, 34, 55, 51, 52, 44, 51, 
              69, 64, 66, 55, 52, 61, 46, 31, 57, 
              52, 44, 18, 41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25,
             .33, .31, .25, .29, .27, .22,
             .31, .25, .25, .33, .21, .25,
             .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25,
             .25, .25, .27, .25, .26, .29];

// function bubblePrinter(array) {
//     let highestScore = 0;
//     let bestSolutionList = [];
//     // loop through array, determine highest score
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > highestScore) {
//             highestScore = array[i];
//         }
//         console.log(`Bubble solution #${i} score: ${scores[i]}`);
        
//     }
//     // loop through array again, push every item equal to highest score to bestSolutionList array
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === highestScore) {
//             // bestSolutionList.push(i);
//             bestSolutionList[bestSolutionList.length] = i;
//         }
//     }
    
//     console.log(`Bubble tests: ${array.length}`);
//     console.log(`Highest bubble score: ${highestScore}`);
//     console.log(`Solutions with highest score: ${bestSolutionList}`);
// }

// bubblePrinter(scores);

// print score for every bubble solution
function printScores(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Bubble solution #${i} score: ${scores[i]}`);
    }
}

// loop through array, determine highest score
function getHighScore(array) {
    let highestScore = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > highestScore) {
            highestScore = array[i];
        }
    }

    return highestScore;
}

// loop through array again, push every item equal to highest score to bestSolutionList array
function getBestResults(array, highestScore) {
    let bestSolutionList = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === highestScore) {
            bestSolutionList.push(i);
        }
    }

    return bestSolutionList;
}

//
function getMostCostEffectiveSolution(costs, scores, highestScore) {
    let lowestCost = 1;
    let lowCostSolution;

    // iterate over two arrays (of the same length) simultaneously
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === highestScore && costs[i] < lowestCost) {
            lowestCost = costs[i];
            lowCostSolution = i;
        }
    }

    return lowCostSolution;
}

printScores(scores);
const highestScore = getHighScore(scores);
const bestSolutionList = getBestResults(scores, highestScore);
const mostCostEffective = getMostCostEffectiveSolution(costs, scores, highestScore);

console.log(`Bubble tests: ${scores.length}`);
console.log(`Highest bubble score: ${highestScore}`);
console.log(`Solutions with the highest score: ${bestSolutionList}`);
console.log(`Most cost effective solution: ${mostCostEffective}`);
