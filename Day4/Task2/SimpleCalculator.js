const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return "Cannot divide by zero";
  }
  return x / y;
}

function calculator() {
  rl.question("Options:\n1. Enter 'add' for addition\n2. Enter 'subtract' for subtraction\n3. Enter 'multiply' for multiplication\n4. Enter 'divide' for division\n5. Enter 'quit' to end the program\n: ", (userInput) => {
    if (userInput === 'quit') {
      rl.close();
      return;
    }

    if (['add', 'subtract', 'multiply', 'divide'].includes(userInput)) {
      rl.question("Enter first number: ", (num1) => {
        rl.question("Enter second number: ", (num2) => {
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);

          switch (userInput) {
            case 'add':
              console.log("Result:", add(num1, num2));
              break;
            case 'subtract':
              console.log("Result:", subtract(num1, num2));
              break;
            case 'multiply':
              console.log("Result:", multiply(num1, num2));
              break;
            case 'divide':
              const result = divide(num1, num2);
              console.log("Result:", result);
              break;
          }

          calculator(); // Continue with the next calculation
        });
      });
    } else {
      console.log("Invalid input");
      calculator(); // Continue with the next calculation
    }
  });
}

calculator(); // Start the calculator
