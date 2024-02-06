const randomNumber = Math.floor(Math.random() * 100) + 1;
        let numberOfGuesses = 0;

        function checkGuess() {
            const userGuess = parseInt(document.getElementById("userGuess").value);

            if (isNaN(userGuess)) {
                document.getElementById("message").textContent = "Please enter a valid number.";
            } else {
                numberOfGuesses++;

                if (userGuess === randomNumber) {
                    document.getElementById("message").textContent = `Congratulations! You guessed the number ${randomNumber} in ${numberOfGuesses} attempts.`;
                    document.getElementById("userGuess").disabled = true;
                } else if (userGuess < randomNumber) {
                    document.getElementById("message").textContent = "Too low, try again.";
                } else {
                    document.getElementById("message").textContent = "Too high, try again.";
                }
            }
        }
        
