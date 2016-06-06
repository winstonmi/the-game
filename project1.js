// Array of trivia data
var TriviaData = new Array(5)
// createTwoDimensionalArray(2);

// Variables to track state of the game
// number of questions asked, current correct total, current question
var questionsAsked = 0;
var totalCorrect = 0;
var currentQuestion = 0
var selectionValid = false;


// Questions
TriviaData[0][0] = "Donkey Kong, Pac-Man and Tempest were all released in the same year.";
TriviaData[1][0] = "Capcom is a Chinese company.";
TriviaData[2][0] = "Othello was the first arcade game released by Nintendo.";
TriviaData[3][0] = "The Atari 2600 video game system was first released in 1975.";
TriviaData[4][0] = "The Sega Saturn game system was released first in the U.S. in 1995.";

// Answers
TriviaData[0][1] = "true";
TriviaData[1][1] = "false";
TriviaData[2][1] = "true";
TriviaData[3][1] = "false";
TriviaData[4][1] = "false";

// Load up first question
setQuestion();

// Sets question text and indicator so that we know the question has been dsiplayed
// function displays Question with a for loop that is affected by answer

function setQuestion() {
  // var TriviaData = i
  // for(i=0; i<5; i++) {
  //   return
  // }
  // if()
  console.log(document.getElementById("#TriviaData").value());

}

// answer correct
function processAnswer(myAnswer) {
  if(TriviaData[currentQuestion][1] == myAnswer) {
    totalCorrect = totalCorrect + 1;
  }
}

// function creates two dimensional array
// function createTwoDimensionalArray(arraySize) {
//   for (i=0; i<TriviaData.length; i++)
//     TriviaData[i] = new Array(arraySize);
// }

// function checks the answer, updates correct total
function checkAnswer() {
  if (document.getElementById("RadioTrue").checked) {
    processAnswer("true");
  }
  else {
    processAnswer("false");
  }


// final questions asked - disable button and show final results
// else {
//   alert("Quiz complete! You got " +totalCorrect + " correct out of 10.");
//   document.getElementById("Button Continue").disabled = true;
// }
//
// // update totals
// document.getElementById("NumberAsked").innerHTML = questionsAsked;
// document.getElementById("NumberCorrect").innerHTML = totalCorrect;

}





// function numberOfQuestions () {
// }
// // It should return an integer that is the number of questions in a game
//
// function currentQuestion () {
//
// }
// // It should return an integer that is the zero-based index of the current question in the quiz
//
// function correctAnswer() {
//
// }
// // It should return an integer that is the zero-based index the correct answer for the currrent question
//
// function numberOfAnswers() {
//
// }
// // It should return an integer that is the number of choices for the current question
//
// function playTurn(choice) {
//
// }
// // It should take a single integer, which specifies which choice the current player wants to make.
// // It should return a boolean true/false if the answer is correct.
//
// function isGameOver() {
//   return false
// }
// // It should return a true or false if the quiz is over.
//
// function whoWon() {
//   return 0
// }
// // It should return 0 if the game is not yet finished.
// // Else it should return either 1 or 2 depending on which player won.
// // It should return 3 if the game is a draw.
//
// function restart() {
//
// }
// // It should restart the game so it can be played again.



/*global isGameOver, whoWon, playTurn, restart, currentQuestion, numberOfQuestions, numberOfAnswers,  correctAnswer*/
/* quiz-tester.js

This script will test the game logic of your multiple choice quiz.
To use it you will need to include it in your html file after you main quiz script.
You will need to declare the following functions in the global scope:

ASSUMPTIONS
It is assumed that the turns of the player will be automatically changed after each turn.

The application will console log all the passed or failed test */
