let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// This function will return a random integer between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
};
// console.log(generateTarget());

// this function determines which guess is closest to the target number
const compareGuesses = (humanNum, computerNum, targetNum) => {
    let humanGuess = Math.abs(targetNum - humanNum);
    let computerGuess = Math.abs(targetNum - computerNum);

    if (humanGuess <= computerGuess) {
        return true;
    } else {
        return false;
    }
};

// console.log(compareGuesses(3, 9, 2));

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

const advanceRound = () => {
    currentRoundNumber++;
};

