const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// generateASCIIArt function creates the ASCII art pattern by repeating the character to 
// form rows and printing them to the console.
function generateASCIIArt(character, size) {
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
      row += character;
    }
    console.log(row);
  }
}
// The user is asked to enter a character (e.g., "*") and a size in the format "width x height" (e.g., "5x5").
rl.question("Enter a character: ", (character) => {
  rl.question("Enter the size (e.g., 5x5): ", (inputSize) => {
    const sizeParts = inputSize.split('*');
    if (sizeParts.length === 2) {
      const width = parseInt(sizeParts[0]);
      const height = parseInt(sizeParts[1]);

      if (!isNaN(width) && !isNaN(height)) {
        generateASCIIArt(character, width, height);
      } else {
        console.log("Invalid size. Please use the format 'width x height'.");
      }
    } else {
      console.log("Invalid size format. Please use the format 'width x height'.");
    }

    rl.close();
  });
});
