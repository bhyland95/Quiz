var quizQuestions = [
{question:"What is the capital of Texas?", a:"Dallas", b:"Houston", c:"Austin", d:"San Antonio"},
{question:"What is the capital of New York?", a:"New York City", b:"Albany", c:"Buffalo", d:"Syracuse"},
{question:"What is the capital of California?", a:"Sacramento", b:"Los Angeles", c:"San Diego", d:"San Francisco"},
{question:"What is the capital of Florida?", a:"Tallahassee", b:"Miami", c:"Orlando", d:"Jacksonville"},
{question:"What is the capital of Hawaii?", a:"O'ahu", b:"Maui", c:"Pearl City", d:"Honolulu"}
];

var question = document.querySelector('#question');
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');
var nextBtn = document.querySelector('.submit-answer')
var questionCounter = 0;

//Timer on the page 
function timer(){
    var sec = 5;
    var timer = setInterval(function(){
        document.querySelector('.timer').innerHTML= sec;
        sec--;
        if(sec < 0){
            clearInterval(timer);
        }
    }, 1000);
}


//On page load have questions and answer choices to first question.
question.innerHTML = questionCounter+1 + '. ' + quizQuestions[questionCounter].question
answer1.innerHTML = quizQuestions[questionCounter].a
answer2.innerHTML = quizQuestions[questionCounter].b
answer3.innerHTML = quizQuestions[questionCounter].c
answer4.innerHTML = quizQuestions[questionCounter].d

//WHen you click the submit button, calls changeQuestion function 
nextBtn.onclick = function(){
questionCounter++
if(questionCounter < quizQuestions.length){
    changeQuestion()

} else {
    console.log("No More questions")
}
};


//Function that loads info into quiz form. 
var changeQuestion = function(){
question.innerHTML = questionCounter+1 + '. ' + quizQuestions[questionCounter].question
answer1.innerHTML = quizQuestions[questionCounter].a
answer2.innerHTML = quizQuestions[questionCounter].b
answer3.innerHTML = quizQuestions[questionCounter].c
answer4.innerHTML = quizQuestions[questionCounter].d
};

//on page load, run timer 
question.addEventListener("load", timer());