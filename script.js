//Type in any integer between 1 and 10 and play against the computer - see whose number is closer to a secret target

const humanGuess = 7; //Type any integer between 1 and 10 here;
console.log(`Your chosen number is: ${humanGuess}`);

const secretTarget = Math.floor(Math.random()*10)+1;
console.log(`The secret target is: ${secretTarget}`);

const computerGuess = Math.floor(Math.random()*10)+1;
console.log(`Computer's chosen number is: ${computerGuess}`);


const compareGuesses = () => {
const valueHuman = Math.abs(secretTarget - humanGuess);
const valueComputer = Math.abs(secretTarget - computerGuess);
 if (valueHuman<=valueComputer || valueHuman === secretTarget) {
  return 'You won!';
 }
 else {
  return `Computer won!`;
}
}

console.log(compareGuesses());



