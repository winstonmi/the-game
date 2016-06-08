

var questions = [
  {
    question : 'I knows, and ________ we will get through this course.',
    answerIndex : 2, // indicates the correct array number, use 0, 1...
    choices  : ['Chinatown', 'Bugis', 'Eunos', 'Potong']
    // answers  : [ "The correct answer is True"]
  },
   {
    question : 'When you think you right, and then look at your code with Linter and ________.',
    answerIndex : 2,
    choices  : ['Clemnti', 'Queenstown', 'Jurong', 'Bukit Batok'],
    // answers  : [ 'The correct answer is True']
  },
  {
    question : 'During project week, my heart goes ________?',
    answerIndex : 1, // indicates the correct array number, use 0, 1...
    choices  : ['Rochor', 'Bedok, Bedok', 'Serangoon', 'Dhoby Ghaut']
    // answers  : [ "The correct answer is True"]
  },
  {
    question : "When you've been sitting in class too long and you really need to pee because your ________ is full.",
    answerIndex : 1, // indicates the correct array number, use 0, 1...
    choices  : ['Telok Blangah', 'Braddell', 'Stevens', 'Marymount']
    // answers  : [ "The correct answer is True"]
  },
  {
    question : "When you cannot understand the lab and ask your friend to ________ it to you.",
    answerIndex : 0, // indicates the correct array number, use 0, 1...
    choices  : ['Esplanade', 'Yew Tee', 'Marina Bay', 'Admiralty']
    // answers  : [ "The correct answer is True"]
  },
  {
    question : "When you've been sitting in class too long and you really need to pee because your ________ is full.",
    answerIndex : 1, // indicates the correct array number, use 0, 1...
    choices  : ['Telok Blangah', 'Braddell', 'Stevens', 'Marymount']
    // answers  : [ "The correct answer is True"]
  },
  {
    question : "When you've been sitting in class too long and you really need to pee because your ________ is full.",
    answerIndex : 1, // indicates the correct array number, use 0, 1...
    choices  : ['Telok Blangah', 'Braddell', 'Stevens', 'Marymount']
    // answers  : [ "The correct answer is True"]
  },
  {
    question : "When you've been sitting in class too long and you really need to pee because your ________ is full.",
    answerIndex : 1, // indicates the correct array number, use 0, 1...
    choices  : ['Telok Blangah', 'Braddell', 'Stevens', 'Marymount']
    // answers  : [ "The correct answer is True"]
  }
]

var quiz = {
  currentQ: 0,
  player1Score: 0,
  player2Score: 0,
  currentPlayer: 1
}

function numberOfQuestions() {
  return questions.length
}
//
// It should return an integer that is the number of questions in a game
//
function currentQuestion() {
  return quiz.currentQ;
}
//
// It should return an integer that is the zero-based index of the current question in the quiz
//
function correctAnswer() {
  return questions[currentQuestion()].answerIndex
}
//
// It should return an integer that is the zero-based index the correct answer for the currrent question
//
function numberOfAnswers() {
  return questions[currentQuestion()].choices.length
}
//
// It should return an integer that is the number of choices for the current question
//
function playTurn(choice) {
  if(isGameOver()) {
    return
  }
  var correctA = correctAnswer()
  quiz.currentQ++
  // give points for a correct answer
  if(choice === correctA) {
    if(quiz.currentPlayer === 1) {
      quiz.player1Score++
    } else {
      quiz.player2Score++
    }
  }
  // switch players
  if(quiz.currentPlayer === 1) {
    quiz.currentPlayer = 2
  } else {
    quiz.currentPlayer = 1
  }
  // return answers
  if(choice === correctA) {
    return true
  } else {
    return false
  }
}
//
// It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.
//
function isGameOver() {
  return quiz.currentQ >= numberOfQuestions()
}

// It should return a true or false if the quiz is over.
//
function whoWon() {
  if(!isGameOver()) {
    return 0
  } else if (quiz.player1Score > quiz.player2Score) {
    return 1
  } else if (quiz.player2Score > quiz.player1Score) {
    return 2
  } else if (quiz.player1Score === quiz.player2Score) {
    return 3
  }
}

// It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player won. It should return 3 if the game is a draw.
//
function restart() {
  quiz.currentQ = 0
  quiz.player1Score = 0
  quiz.player2Score = 0
  quiz.currentPlayer = 1
}
//
// It should restart the game so it can be played again.
//
// ASSUMPTIONS
//
// It is assumed that the turns of the player will be automatically changed after each turn.
//
// The application will console log all the passed or failed test */
