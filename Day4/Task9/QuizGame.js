const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  {
    question: "What is the capital of France?",
    options: ["A. Paris", "B. London", "C. Berlin", "D. Madrid"],
    correctAnswer: "A"
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["A. Earth", "B. Venus", "C. Mars", "D. Jupiter"],
    correctAnswer: "C"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["A. Elephant", "B. Giraffe", "C. Blue Whale", "D. Rhinoceros"],
    correctAnswer: "C"
  }
];

let score = 0;
let currentQuestion = 0;

function displayQuestion() {
  const questionObj = questions[currentQuestion];
  console.log(questionObj.question);
  questionObj.options.forEach(option => console.log(option));

  rl.question("Select the correct option (A, B, C, or D): ", (userAnswer) => {
    const correctAnswer = questionObj.correctAnswer;
    if (userAnswer.toUpperCase() === correctAnswer) {
      console.log("Correct!");
      score++;
    } else {
      console.log(`Wrong! The correct answer is ${correctAnswer}`);
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      console.log(`Quiz completed! Your score: ${score}/${questions.length}`);
      rl.close();
    }
  });
}

console.log("Welcome to the Quiz Game!");
displayQuestion();
