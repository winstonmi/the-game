/* global $ */
$(document).ready(function () {
  var questions = [
    { question: 'When you cannot understand any of the lab and ask your friend to ________ it to you.',
      answerIndex: 1, // indicates the correct array number, use 0, 1...
      choices: ['Chinatown', 'Esplanade', 'Eunos', 'Potong'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/two-girls.gif'
    },
    { question: "When you've been sitting in class too long and you really need to pee because your ________ is full.",
      answerIndex: 2,
      choices: ['Clementi', 'Queenstown', 'Braddell', 'Bukit Batok'],
      // answers  : [ 'The correct answer is True']
      gif: 'gifs/2-braddell.gif'
    },
    { question: 'When you’re running late to class and you know you ________ in time.',
      answerIndex: 3, // indicates the correct array number, use 0, 1...
      choices: ['Rochor', 'Bedok', 'Serangoon', 'Kent Ridge'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/3-kent-ridge.gif'
    },
    { question: "When you think you're right, and look at your code with Linter and ________.",
      answerIndex: 1, // indicates the correct array number, use 0, 1...
      choices: ['Tampines', 'Jurong', 'Stevens', 'Marymount'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/crying.gif'
    },
    { question: 'When you drink 4 kopis a day during project week, your heart goes ________?',
      answerIndex: 1, // indicates the correct array number, use 0, 1...
      choices: ['Esplanade', 'Bedok', 'Marina Bay', 'Admiralty'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/asian-gymnast.gif'
    },
    { question: 'When it"s 6pm on Friday and you know the week is all ________.',
      answerIndex: 2, // indicates the correct array number, use 0, 1...
      choices: ['Telok Blangah', 'Mountbatten', 'Dover', 'Bartley'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/6-dover.gif'
    },
    { question: 'When our class shows up to the kopitiam and the server says, "There’s a ________ of them!"',
      answerIndex: 0, // indicates the correct array number, use 0, 1...
      choices: ['Hougang', 'Stadium', 'Stevens', 'Dakota'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/gang.gif'
    },
    { question: "When you write good code and your classmate asks you, 'Can ________ -ch me?'",
      answerIndex: 2, // indicates the correct array number, use 0, 1...
      choices: ['Queenstown', 'Bras Basah', 'Yew Tee', 'Rochor'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/flex.gif'
    },
    { question: 'When it’s 3am and you’re still coding, ________ is love.',
      answerIndex: 3, // indicates the correct array number, use 0, 1...
      choices: ['Buona Vista', 'HarbourFront', 'Redhill', 'Aljunied'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/smiling.gif'
    },
    { question: 'Everything is going to be okay. I knows, and ________ we will get through this course together.',
      answerIndex: 3, // indicates the correct array number, use 0, 1...
      choices: ['Hillview', 'Bayfront', 'Downtown', 'Eunos'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/elevator.gif'
    },
    { question: 'Aiyah, my keropok lau hong. Not ________ already.',
      answerIndex: 1, // indicates the correct array number, use 0, 1...
      choices: ['Tanah Merah', 'Kranji', 'Redhill', 'Simei'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/chips.gif'
    },
    { question: 'It"s so warm in my living room because ________ fan is broken.',
      answerIndex: 2, // indicates the correct array number, use 0, 1...
      choices: ['Changi', 'Bayfront', 'Marsiling', 'Expo'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/hot.gif'
    },
    { question: 'Po-peh! Po-peh! Po-peh! ________ guniii.',
      answerIndex: 3, // indicates the correct array number, use 0, 1...
      choices: ['Somerset', 'Raffles Place', 'Clementi', 'Kallang'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/cardboard-man.gif'
    },
    { question: 'I asked the carpenter to make me a chair, but he said he had no more ________.',
      answerIndex: 2, // indicates the correct array number, use 0, 1...
      choices: ['Redhill', 'Woodleigh', 'Pioneer', 'Joo Koon'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/wood.gif'
    },
    { question: 'PM Lee does not write with his right hand. He is a ________',
      answerIndex: 2, // indicates the correct array number, use 0, 1...
      choices: ['Lavender', 'Outram Park', 'Lakeside', 'Boon Lay'],
      // answers  : [ "The correct answer is True"]
      gif: 'gifs/left-hand.gif'
    },
  ]

  var quiz = {
    currentQ: 0,
    player1Score: 0,
    player2Score: 0,
    currentPlayer: 1,
    maxQuestions: 10
  }

  function numberOfQuestions () {
    return questions.length
  }
//
// It should return an integer that is the number of questions in a game
//
  function currentQuestion () {
    // if (quiz.currentQ === 10) {
    //   return isGameOver()
    // } else {
      return quiz.currentQ
    // }
  }
//
// It should return an integer that is the zero-based index of the current question in the quiz
//
  function correctAnswer () {
    return questions[currentQuestion()].answerIndex
  }
//
// It should return an integer that is the zero-based index the correct answer for the current question
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
      return true
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
    if (quiz.currentQ === quiz.maxQuestions) {
      $('.ansChoice').eq(0).toggle()
      $('.ansChoice').eq(1).toggle()
      $('.ansChoice').eq(2).toggle()
      $('.ansChoice').eq(3).toggle()
      $('#start').toggle()
      $('.gifmiddle').toggle()
      // (thanks Justin!)
      $('.question').text((whoWon() === 3) ? 'DRAW': 'Player ' + whoWon() + ' wins!')
      $('.gifmiddle').toggle()
    } else {
      updateDisplay()
    }

    // switch players
    if (quiz.currentPlayer === 1) {
      quiz.currentPlayer = 2
    } else {
      quiz.currentPlayer = 1
    }
    highlightPlayer()
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
    if (quiz.currentQ === quiz.maxQuestions) {
      console.log('game over')
      return true
    } else {
      return quiz.currentQ >= numberOfQuestions()
    }
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
  // Durstenfeld shuffle - how to shuffle an array (thanks Andrian!)
  function shuffleArray () {
    var i = questions.length
    var j
    var temp
    while (i--) {
      j = Math.floor(Math.random() * (i + 1))
      temp = questions[i]
      questions[i] = questions[j]
      questions[j] = temp
    }
  }
  shuffleArray()

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
    $('.left').text('Player 1 Score: ' + quiz.player1Score)
    $('.right').text('Player 2 Score: ' + quiz.player2Score)
  }

  $('#start').click(function () {
    $('.ansChoice').eq(0).toggle()
    $('.ansChoice').eq(1).toggle()
    $('.ansChoice').eq(2).toggle()
    $('.ansChoice').eq(3).toggle()
    $('#start').toggle()
    $('.left').css('color', '#5cd65c')
    restart()
    updateDisplay()
  })

  function highlightPlayer () {
    if (quiz.currentPlayer === 1) {
      $('.left').css('color', '#5cd65c')
      $('.right').css('color', 'black')
    } else if (quiz.currentPlayer === 2) {
      $('.right').css('color', '#5cd65c')
      $('.left').css('color', 'black')
    }
  }

  // $('.ansChoice').eq(i).text()
  // $('.ansChoice').click(function () {
  //   playTurn($(this).index())
  // })
  // correct answer highlights (thanks Brian!)
  $('#a0').click(function () {
    if (correctAnswer() === 0) {
      $('#a0').effect('highlight', {color: '#5cd65c'}, 2000)
    } else {
      $('#a0').effect('highlight', {color: '#b94646'}, 2000)
    }
    setTimeout(function () { playTurn(0) }, 500)
  })
  $('#a1').click(function () {
    if (correctAnswer() === 1) {
      $('#a1').effect('highlight', {color: '#5cd65c'}, 2000)
    } else {
      $('#a1').effect('highlight', {color: '#b94646'}, 2000)
    }
    setTimeout(function () { playTurn(1) }, 500)
  })
  $('#a2').click(function () {
    if (correctAnswer() === 2) {
      $('#a2').effect('highlight', {color: '#5cd65c'}, 2000)
    } else {
      $('#a2').effect('highlight', {color: '#b94646'}, 2000)
    }
    setTimeout(function () { playTurn(2) }, 500)
  })
  $('#a3').click(function () {
    if (correctAnswer() === 3) {
      $('#a3').effect('highlight', {color: '#5cd65c'}, 2000)
    } else {
      $('#a3').effect('highlight', {color: '#b94646'}, 2000)
    }
    setTimeout(function () { playTurn(3) }, 500)
  })

// directions on intro page (how many questions can you answer)
// make answer green if correct answer, see true/false example
// highlight player 1 or 2 box when it's their turn or just 1 player
// random pun generation but you only play 10 questions
// game option #2 singaporean puns
// timer?
})
