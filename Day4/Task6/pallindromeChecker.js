const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// checkPalindrome function checks if the input is a palindrome.
// The input is cleaned by converting it to lowercase and removing spaces for accurate palindrome checking.
// The cleaned input is reversed, and the original and reversed inputs are compared to determine if it's a palindrome.
rl.question("Enter a word or phrase: ", (input) => {
  const isPalindrome = checkPalindrome(input);
  if (isPalindrome) {
    console.log("It is Palindrome");
  } else {
    console.log("Not a palindrome");
  }
  rl.close();

});

function checkPalindrome(input) {
  // Remove spaces and convert to lowercase for accurate palindrome checking
  const cleanedInput = input.toLowerCase().replace(/\s/g, '');

  // Reverse the cleaned input
  const reversedInput = cleanedInput.split('').reverse().join('');

  // Check if the original and reversed inputs are the same
  return cleanedInput === reversedInput;
}
