let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10);

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
const valueHuman = Math.abs(secretTarget - humanGuess);
const valueComputer = Math.abs(secretTarget - computerGuess);
 if (valueHuman <= valueComputer) {
  return true;
 }
else {
  return false;
}
}
compareGuesses();

const updateScore = winnerIs => {
  if (winnerIs === 'human') {
   humanScore += 1;
  }
  else if (winnerIs === 'computer') {
    computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}



