var quizQuestions = [
    { question: "What is the capital of Texas?", a: "Dallas", b: "Houston", c: "Austin", d: "San Antonio", answer: "Austin" },
    { question: "What is the capital of New York?", a: "New York City", b: "Albany", c: "Buffalo", d: "Syracuse", answer: "Albany" },
    { question: "What is the capital of California?", a: "Sacramento", b: "Los Angeles", c: "San Diego", d: "San Francisco", answer: "Sacramento" },
    { question: "What is the capital of Florida?", a: "Tallahassee", b: "Miami", c: "Orlando", d: "Jacksonville", answer: "Tallahassee" },
    { question: "What is the capital of Hawaii?", a: "O'ahu", b: "Maui", c: "Pearl City", d: "Honolulu", answer: "Honolulu" }
];

var highscores = [];

var question = document.querySelector('#question');
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');
var nextBtn = document.querySelector('.submit-answer');
var startBtn = document.querySelector('#start-btn');
var saveBtn = document.querySelector('#save-btn');
var quizContainer = document.querySelector('.quiz-container');
var instuctionContainer = document.querySelector('.instruction-container');
var scoreContainer = document.querySelector('.score-container');
var score = scoreContainer.querySelector('.score');
var questionCounter = 0;
var time = 50;
var playerScore = 0;

//Start Button function 
startBtn.onclick = function () {
    instuctionContainer.style.opacity = 0
    quizContainer.style.opacity = 1
    quizContainer.style.zIndex = 2
    timer;
}



//Timer on the page @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var timer = setInterval(countdown, 1000);

function countdown() {
    time--;
    document.querySelector(".timer").textContent = time;
    
    // check if user ran out of time
    if (time <= 0) {
        scoreScreen();
    }
    }


//On page load have questions and answer choices to first question.
question.innerHTML = questionCounter + 1 + '. ' + quizQuestions[questionCounter].question
answer1.innerHTML = quizQuestions[questionCounter].a
answer2.innerHTML = quizQuestions[questionCounter].b
answer3.innerHTML = quizQuestions[questionCounter].c
answer4.innerHTML = quizQuestions[questionCounter].d

//WHen you click the submit button, checks answer, calls changeQuestion function
nextBtn.onclick = function () {

    checkAnswer();

    questionCounter++
    if (questionCounter < quizQuestions.length) {
        changeQuestion()

    } else {
        //after last question -- display score div
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

    //Checks for Right Answer
    if (UserAnswer == quizQuestions[questionCounter].answer) {
        console.log("CORRECT ANSWER")
    } else {
        console.log("WRONG ANSWER")
        time = time - 10;
    }
}

//When you click the save button ....
saveBtn.onclick = function () {
    var playerName = document.querySelector("#Initials").value;
    highscores.push({ Initials: playerName, Score: playerScore })
    console.log(highscores)

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
}

//Function that loads info into quiz form. 
var changeQuestion = function () {
    question.innerHTML = questionCounter + 1 + '. ' + quizQuestions[questionCounter].question
    answer1.innerHTML = quizQuestions[questionCounter].a
    answer2.innerHTML = quizQuestions[questionCounter].b
    answer3.innerHTML = quizQuestions[questionCounter].c
    answer4.innerHTML = quizQuestions[questionCounter].d
};


