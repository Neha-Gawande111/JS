const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// generateRandomPassword function generates a random password of the specified length.
function generateRandomPassword(length) {
//charset variable contains the characters (letters, numbers, and special characters) that can be used in the password.

  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:<>,.?/";
  let password = '';
  // A loop is used to randomly select characters from the charset and build the password.
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}
rl.question("Enter the desired password length: ", (input) => {
  const length = parseInt(input);

  if (isNaN(length) || length <= 0) {
    console.log("Please enter a valid positive integer for password length.");
    rl.close();
    return;
  }

  const password = generateRandomPassword(length);
  console.log("Generated Password:", password);
  rl.close();
});
