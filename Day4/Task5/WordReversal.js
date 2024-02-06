const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a sentence: ", (sentence) => {
  const reversedSentence = reverseSentence(sentence);
  console.log("Reversed sentence:", reversedSentence);
  rl.close();
});

// reverseSentence function splits the input sentence into words, 
// reverses each word, and then joins them back together with spaces.
function reverseSentence(sentence) {
  // Split the sentence into words using whitespace as a delimiter
  const words = sentence.split(' ');

  // Reverse each word and join them back with spaces
  const reversedWords = words.map(word => reverseWord(word));

  // Join the reversed words to form the reversed sentence
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}
// reverseWord function reverses a single word by splitting it into characters, 
// reversing them, and then joining them back together.
function reverseWord(word) {
  // Split the word into characters, reverse them, and join them back
  return word.split('').reverse().join('');
}
