const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// isPrime function is used to check if a number is prime.
function isPrime(number) {     
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}
// primeFactors function calculates the prime factors of the input number.
function primeFactors(n) {
  const factors = [];
  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  if (n > 2) {
    factors.push(n);
  }
  return factors;
}

rl.question("Enter a positive integer: ", (input) => {
  const num = parseInt(input);

  if (isNaN(num) || num <= 0) {
    console.log("Please enter a valid positive integer.");
    rl.close();
    return;
  }

//   user's input is validated to ensure it's a positive integer.
  const factors = primeFactors(num);

  if (factors.length === 0) {
    console.log(`The number ${num} has no prime factors other than itself.`);
  } else {
    console.log(`Prime factors of ${num}: ${factors.join(', ')}`);
  }

  rl.close();
});
