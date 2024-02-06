function guessNumber()
    {
        var randomNumber = Math.floor(Math.random()*10);
        console.log(randomNumber);
        // declaire variable
        var guess;
        guess = prompt("please enter a number in between 0 to 100");
        console.log("your guess is " + guess);
        if(guess < randomNumber)
        {
            window.alert("Your guess is too low");
        }
        else if(guess> randomNumber)
        {
            window.alert("Your guess is too high"); 
        }
        else if(guess == randomNumber)
        {
            window.alert("Your guess it, you win!!!");
        }else{
            window.alert("Error");
        }
    }
