const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const minNumber = 1;
const maxNumber = 100;
const secretnumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let numberOfGuesses = 0;

function startGame() {
    r1.question(`Guess a number between ${minNumber} to ${maxNumber}:`, (userInput) => {
        const userGuess = parseInt(userInput);

        if (isNaN(userGuess)) {
            console.log("Please enter valid Number");
        } else {
            numberOfGuesses++;

            if (userGuess === secretnumber) {
                console.log(`Congradulations! You guessed the secret Number ${secretnumber} in ${numberOfGuesses} attempts.`);
                r1.close();
            } else if (userGuess<secretnumber) {
                console.log("Too low try Again");
                startGame();
            } else if (userGuess>secretnumber) {
                console.log("Too high try Again");
                startGame();
            }
        }
    });
}

startGame();