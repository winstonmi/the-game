$(document).ready(function () {

  var questions = [
    { question: 'When you cannot understand any of the lab and ask your friend to ________ it to you.',
      answerIndex: 1, // indicates the correct array number, use 0, 1...
      choices: ['Chinatown', 'Esplanade', 'Eunos', 'Potong'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/two-girls.gif',
      data: 'no'
    },
    { question: "When you've been sitting in class too long and you really need to pee because your ________ is full.",
      answerIndex: 2,
      choices: ['Clementi', 'Queenstown', 'Braddell', 'Bukit Batok'],
      // answers  : [ 'The correct answer is True']
      gif: 'gifs/2-braddell.gif',
      data: 'no'
    },
    { question: 'When you’re running late to class and you know you ________ in time.',
      answerIndex: 3, // indicates the correct array number, use 0, 1...
      choices: ['Rochor', 'Bedok', 'Serangoon', 'Kent Ridge'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/3-kent-ridge.gif',
      data: 'no'
    },
    { question: "When you think you're right, and look at your code with Linter and ________.",
      answerIndex: 1, // indicates the correct array number, use 0, 1...
      choices: ['Tampines', 'Jurong', 'Stevens', 'Marymount'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/crying.gif',
      data: 'no'
    },
    { question: 'When you drink 4 kopis a day during project week, your heart goes ________?',
      answerIndex: 1, // indicates the correct array number, use 0, 1...
      choices: ['Esplanade', 'Bedok', 'Marina Bay', 'Admiralty'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/asian-gymnast.gif',
      data: 'no'
    },
    { question: 'When it"s 6pm on Friday and you know the week is all ________.',
      answerIndex: 2, // indicates the correct array number, use 0, 1...
      choices: ['Telok Blangah', 'Mountbatten', 'Dover', 'Bartley'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/6-dover.gif',
      data: 'no'
    },
    { question: 'When our class shows up to the kopitiam and the server says, "There’s a ________ of them!"',
      answerIndex: 0, // indicates the correct array number, use 0, 1...
      choices: ['Hougang', 'Stadium', 'Stevens', 'Dakota'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/gang.gif',
      data: 'no'
    },
    { question: "When you write good code and your classmate asks you, 'Can ________ -ch me?'",
      answerIndex: 2, // indicates the correct array number, use 0, 1...
      choices: ['Queenstown', 'Bras Basah', 'Yew Tee', 'Rochor'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/flex.gif',
      data: 'no'
    },
    { question: 'When it’s 3am and you’re still coding, ________ is love.',
      answerIndex: 3, // indicates the correct array number, use 0, 1...
      choices: ['Buona Vista', 'HarbourFront', 'Redhill', 'Aljunied'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/smiling.gif',
      data: 'no'
    },
    { question: 'Everything is going to be okay. I knows, and ________ we will get through this course together.',
      answerIndex: 3, // indicates the correct array number, use 0, 1...
      choices: ['Hillview', 'Bayfron', 'Downtown', 'Eunos'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/elevator.gif',
      data: 'no'
    }
  ]

  var quiz = {
    currentQ: 0,
    player1Score: 0,
    player2Score: 0,
    currentPlayer: 1,
    selectionValid = false
  }

  function numberOfQuestions () {
    return questions.length
  }
//
// It should return an integer that is the number of questions in a game
//
  function currentQuestion () {
    quiz.selectionValid = false // Flag to make sure question has not been asked yet
    while (quiz.selectionValid === false) {
      quiz.currentQ = Math.floor(Math.random() * 10) // randomly select starting question
      if (questions[quiz.currentQ].data === 'no') {
        quiz.selectionValid = true
      }
    }
    return quiz.currentQ
  }
//
// It should return an integer that is the zero-based index of the current question in the quiz
//
  function correctAnswer () {
    return questions[currentQuestion()].answerIndex
  }
//
// It should return an integer that is the zero-based index the correct answer for the currrent question
//
  function numberOfAnswers () {
    return questions[currentQuestion()].choices.length
  }
//
// It should return an integer that is the number of choices for the current question
//
  function playTurn (choice) {
    console.log(currentQuestion())
    if (isGameOver()) {
      return
    }
    var correctA = correctAnswer()
    quiz.currentQ++
    // give points for a correct answer
    if (choice === correctA) {
      if (quiz.currentPlayer === 1) {
        quiz.player1Score++
      } else {
        quiz.player2Score++
      }
    }
    if (quiz.currentQ === numberOfQuestions()) {
      $('.ansChoice').eq(0).toggle()
      $('.ansChoice').eq(1).toggle()
      $('.ansChoice').eq(2).toggle()
      $('.ansChoice').eq(3).toggle()
      $('#start').toggle()
      $('.gifmiddle').toggle()
      $('.question').text((whoWon() === 3) ? 'DRAW': 'Player ' + whoWon()+ ' wins!')
      } else {
        updateDisplay()
  }

    // switch players
    if (quiz.currentPlayer === 1) {
      quiz.currentPlayer = 2
    } else {
      quiz.currentPlayer = 1
    }
    // return answers
    if (choice === correctA) {
      return true
    } else {
      return false
    }
  }
//
// It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.
//
  function isGameOver () {
    return quiz.currentQ >= numberOfQuestions()
  }

// It should return a true or false if the quiz is over.
//
  function whoWon () {
    if (!isGameOver()) {
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
  function restart () {
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

  function updateDisplay () {
  $('.gifmiddle').html('<img src=' + questions[currentQuestion()].gif + ' />')
  $('.ansChoice').eq(0).text(questions[currentQuestion()].choices[0])
  $('.ansChoice').eq(1).text(questions[currentQuestion()].choices[1])
  $('.ansChoice').eq(2).text(questions[currentQuestion()].choices[2])
  $('.ansChoice').eq(3).text(questions[currentQuestion()].choices[3])
  $('.question').text(questions[currentQuestion()].question)
  $('.left').text('Player 1: ' + quiz.player1Score)
  $('.right').text('Player 2: ' + quiz.player2Score)
  }

$('#start').click(function () {
  $('.ansChoice').eq(0).toggle()
  $('.ansChoice').eq(1).toggle()
  $('.ansChoice').eq(2).toggle()
  $('.ansChoice').eq(3).toggle()
  $('#start').toggle()

  restart()
  updateDisplay()
})

$('#a1').click(function () {
  playTurn(0)
});
$('#a2').click(function () {
  playTurn(1)
});
$('#a3').click(function () {
  playTurn(2)
});
$('#a4').click(function () {
  playTurn(3)
})

// directions on intro page (how many questions can you answer)
// make answer green if correct answer, see true/false example
// highlight player 1 or 2 box when it's their turn or just 1 player
// random pun generation but you only play 10 questions
// game option #2 singaporean puns
// timer?

// $('.ansChoice').click(function () {
//   var choice = parseInt(this.id);
//   console.log(choice);
//
//     console.log(player);
//   if (playTurn(choice)) {
//     $(this).text(player)
//   }
// });
})
