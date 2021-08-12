var quizQuestions = [{question:"This is a question", a:"This is answer a", b:"This is answer b", c:"This is answer c", d:"This is answer d"}];

var question = document.querySelector('#question');
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');

question.innerHTML = quizQuestions[0].question