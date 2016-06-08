// Array of trivia data
var TriviaData = new Array(10)
// var TriviaData = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9]
createTwoDimensionalArray(3);

var firstHalf = TriviaData.length/2;
var secondHalf = TriviaData.length;

var player1 = TriviaData.slice(0, firstHalf);
var player2 = TriviaData.slice(firstHalf, secondHalf);

// Variables to track state of the game
// i.e. number questions asked, current correct total and current question

var questionsAsked = 0;
var totalCorrect = 0;
var currentQn = 0;
var selectionValid = false;

// Questions
TriviaData[0][0] = "Donkey Kong, Pac-Man and Tempest were all released in the same year.";
TriviaData[1][0] = "Capcom is a Chinese company.";
TriviaData[2][0] = "Othello was the first arcade game released by Nintendo.";
TriviaData[3][0] = "The Atari 2600 video game system was first released in 1975.";
TriviaData[4][0] = "The Sega Saturn game system was released first in the U.S. in 1995.";
TriviaData[5][0] = "The legendary game Doom was released in 1993 for the PC.";
TriviaData[6][0] = "Dragon's Lair was the first arcade game to feature laser-disc technology.";
TriviaData[7][0] = "In 1990, Nintendo and Sega went to court over the rights to Tetris.";
TriviaData[8][0] = "In 1996 Nintendo sells its billionth cartridge worldwide.";
TriviaData[9][0] = "Microsoft first released the Xbox gaming system worldwide in 2001.";

// Answers
TriviaData[0][1] = "true";
TriviaData[1][1] = "false";
TriviaData[2][1] = "true";
TriviaData[3][1] = "false";
TriviaData[4][1] = "false";
TriviaData[5][1] = "true";
TriviaData[6][1] = "true";
TriviaData[7][1] = "false";
TriviaData[8][1] = "true";
TriviaData[9][1] = "false";

// Has question been asked
// -- necessary because we are asking in random order
// TriviaData[0][2] = "no";
// TriviaData[1][2] = "no";
// TriviaData[2][2] = "no";
// TriviaData[3][2] = "no";
// TriviaData[4][2] = "no";
// TriviaData[5][2] = "no";
// TriviaData[6][2] = "no";
// TriviaData[7][2] = "no";
// TriviaData[8][2] = "no";
// TriviaData[9][2] = "no";

// Load up first question
setQuestion();

// Sets question text and indicator so that we know the question has been displayed
function setQuestion() {
    // selectionValid = false; // Flag to make sure question has not been asked yet
    // while (selectionValid == false) {
    //     currentQn = Math.floor(Math.random() * 10); // randomly select starting question
    //     if (TriviaData[currentQn][2] == "no") {
    //         selectionValid = true;
    //     }
    }
    document.getElementById("TriviaQuestion").innerHTML = TriviaData[currentQn][0];
    TriviaData[currentQn][2] = "yes";
    questionsAsked = questionsAsked + 1;

}

var player1Score = 0
var player2Score = 0

function processAnswer(myAnswer) {
    // if (TriviaData[currentQuestion][1] == myAnswer) {
    //     // answer correct
    //     totalCorrect = totalCorrect + 1;
    // }

    // if currentQuestion is <= 5, if it is the correct answer, add 1 to player1 score

    if (currentQuestion < 5) {
     if(myAnswer === TriviaData[currentQn][1])
         player1Score = player1Score + 1
    }

    // if currentQuestions is > 5, and if it is the correct answer add 1 to player2 score

    if (currentQuestion >= 5) {
     if(myAnswer === TriviaData[currentQn][1])
         player2Score = player2Score + 1
    }

}

// This function creates our two dimensional array
function createTwoDimensionalArray(arraySize) {
    for (i = 0; i < TriviaData.length; ++i)
        TriviaData[i] = new Array(arraySize);
}

// This function checks the answer, updates correct total
// and randomly selects the next question
function checkAnswer() {
    if (document.getElementById("RadioTrue").checked) {
        processAnswer("true");
    }
    else {
        processAnswer("false");
    }
    // get next question if not asked all yet
    if (questionsAsked < 10) {
        setQuestion();
    }
    // final question asked - disable button and show final results
    else {
        alert("Quiz complete! You got " + totalCorrect + " correct out of 10.");
        document.getElementById("ButtonContinue").disabled = true;
    }
    // update totals
    document.getElementById("NumberAsked").innerHTML = questionsAsked;
    document.getElementById("NumberCorrect").innerHTML = totalCorrect;
}


// function numberOfQuestions () {
// }
// // It should return an integer that is the number of questions in a game
//
function currentQuestion () {
  if questionAsked
}
// // It should return an integer that is the zero-based index of the current question in the quiz
//
// function correctAnswer() {
//
// }
// // It should return an integer that is the zero-based index the correct answer for the currrent question
//
function numberOfAnswers() {
  return 2;
}
// // It should return an integer that is the number of choices for the current question
//

function playTurn(choice) {
if (questionAsked >= 5)
  currentPlayer = player1
}
// // It should take a single integer, which specifies which choice the current player wants to make.
// // It should return a boolean true/false if the answer is correct.
//
function isGameOver() {
  if (whoWon()) return true;
  return false;
}
// // It should return a true or false if the quiz is over.
//
function whoWon() {
  if (player1Score  > player2Score) {
    return 1
  } else if (player2Score > player1Score) {
    return 2
  } else if (player1Score === player2Score) {
    return 3
  } return 0
}
// // It should return 0 if the game is not yet finished.
// // Else it should return either 1 or 2 depending on which player won.
// // It should return 3 if the game is a draw.
//
function restart () {

}
// // It should restart the game so it can be played again.



/*global isGameOver, whoWon, playTurn, restart, currentQuestion, numberOfQuestions, numberOfAnswers,  correctAnswer*/
/* quiz-tester.js

This script will test the game logic of your multiple choice quiz.
To use it you will need to include it in your html file after you main quiz script.
You will need to declare the following functions in the global scope:

ASSUMPTIONS
It is assumed that the turns of the player will be automatically changed after each turn.

The application will console log all the passed or failed test */
