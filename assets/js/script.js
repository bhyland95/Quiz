//Arrays
var quizQuestions = [
    { question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?", a: "last()", b: "push()", c: "pull()", d: "None of the above", answer: "push()" },
    { question: "Which of the following is an advantage of using JavaScript?", a: "Less server interaction", b: "immediate feedback to the visitors", c: "Increased interactivity", d: "All of the above", answer: "All of the above" },
    { question: "How can you get the type of arguments passed to a function?", a: "Using typeof operator", b: "using getType function", c: "Both of the above", d: "None of the above", answer: "Using typeof operator" },
    { question: "Which of the following function of String object executes the search for a match between a regular expression and a specified string?", a: "concat()", b: "match()", c: "replace()", d: "search()", answer: "search()" },
    { question: "Which of the following function of String object combines the text of two strings and returns a new string?", a: "add()", b: "merge()", c: "concat()", d: "append()", answer: "concat()" }
];

//highscores from localstorage or if there arent any... blank
var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

//Variables
var question = document.querySelector('#question');
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');
var nextBtn = document.querySelector('#submit-answer');
var startBtn = document.querySelector('#start-btn');
var saveBtn = document.querySelector('#save-btn');
var quizContainer = document.querySelector('.quiz-container');
var displayAnswer = quizContainer.querySelector('.player-answer')
var instuctionContainer = document.querySelector('.instruction-container');
var scoreContainer = document.querySelector('.score-container');
var score = scoreContainer.querySelector('.score');
var questionCounter = 0;
var time = 60;
var playerScore = 0;

//Start Button function 
startBtn.onclick = function () {
    //Hides instructions -Hides score container  -Shows Quiz
    instuctionContainer.style.opacity = 0
    quizContainer.style.opacity = 1
    quizContainer.style.zIndex = 2
    scoreContainer.style.opacity = 0
    scoreContainer.style.zIndex = 0

    timer();

    //Resets questionCounter to 0
    questionCounter = 0

    //Displays initial question 
    question.innerHTML = questionCounter + 1 + '. ' + quizQuestions[questionCounter].question
    answer1.innerHTML = quizQuestions[questionCounter].a
    answer2.innerHTML = quizQuestions[questionCounter].b
    answer3.innerHTML = quizQuestions[questionCounter].c
    answer4.innerHTML = quizQuestions[questionCounter].d
}



//Timer on the page
var timer = function () {
    setInterval(countdown, 1000);
    function countdown() {

        time--;
        document.querySelector(".timer").textContent = time;

        

        // check if user ran out of time
        if (time <= 0) {
            scoreScreen();
        }
    }
};

//WHen you click the submit button, checks answer, calls changeQuestion function
nextBtn.onclick = function () {

    checkAnswer();

    questionCounter++
    if (questionCounter < quizQuestions.length) {
        changeQuestion()

    } else {
        //after pressing submit on last question -- display score div
        playerScore = time
        if (playerScore < 0) {
            playerScore = 0
            time = 0
        }
        scoreScreen();

    }
};

//Function that checks answer
var checkAnswer = function () {
    //Grabs Users Answer
    if (document.querySelector('#input1').checked) {
        var UserAnswer = answer1.innerHTML
    } else if (document.querySelector('#input2').checked) {
        var UserAnswer = answer2.innerHTML
    } else if (document.querySelector('#input3').checked) {
        var UserAnswer = answer3.innerHTML
    } else if (document.querySelector('#input4').checked) {
        var UserAnswer = answer4.innerHTML
    } else {
        var UserAnswer = ""
    }

    //Checks User Answer againts the Right Answer
    if (UserAnswer == quizQuestions[questionCounter].answer) {
        //Displays Correct for 1 second after answering if correct
        displayAnswer.textContent = "CORRECT ANSWER"
        setTimeout(function () {
            displayAnswer.textContent = '';
        }, 1000);
    } else {
        //Displays wrong for 1 second and deducts 10 seconds if wrong
        displayAnswer.textContent = "WRONG ANSWER"
        setTimeout(function () {
            displayAnswer.textContent = '';
        }, 1000);
        time = time - 12;
    }
}

//When you click the save button ....
saveBtn.onclick = function () {
    var playerName = document.querySelector("#Initials").value.trim();
    var newScore = { Initials: playerName, Score: playerScore }

    //Does not allow player to enter nothing
    if (!playerName) {
        return;
    }

    //Saves highscore to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    //pulls up highscores page
    window.location.href = "highscores.html"

    quizContainer.style.opacity = 0
    quizContainer.style.zIndex = 0
    scoreContainer.style.opacity = 0
    scoreContainer.style.zIndex = 0
    instuctionContainer.style.opacity = 1
    instuctionContainer.style.zIndex = 3
}

//function that displays scorescreen
var scoreScreen = function () {
    //Stops timer
    clearInterval(timer)

    //Displays score container, and hides other containers
    quizContainer.style.opacity = 0
    quizContainer.style.zIndex = 0
    scoreContainer.style.opacity = 1
    scoreContainer.style.zIndex = 3

    //Displays score
    score.textContent = playerScore;
};

//Function that loads new question and answer choices into quiz form. 
var changeQuestion = function () {
    question.innerHTML = questionCounter + 1 + '. ' + quizQuestions[questionCounter].question
    answer1.innerHTML = quizQuestions[questionCounter].a
    answer2.innerHTML = quizQuestions[questionCounter].b
    answer3.innerHTML = quizQuestions[questionCounter].c
    answer4.innerHTML = quizQuestions[questionCounter].d
};



