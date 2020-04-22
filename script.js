// have multiple questions in object
var questions = [
    {
        question: "Which of these is NOT a programming language?",
        choiceA: "Java",
        choiceB: "Banana",
        choiceC: "Ruby",
        choiceD: "Python",
        correct:  "B",
    },
    {
        question: "What are people who write computer code called?",
        choiceA: "Cryptographers",
        choiceB: "Professors",
        choiceC: "Programmers",
        choiceD: "Manufacturers",
        correct:  "C",
    },
    {
        question: "What word describes the set of instructions that computers need to work?",
        choiceA: "Agenda",
        choiceB: "Synopsis",
        choiceC: "Blueprint",
        choiceD: "Program",
        correct:  "D",
    },
    {
        question: "What is computer coding?",
        choiceA: "A radio show",
        choiceB: "Telling a computer what to do",
        choiceC: "A TV show",
        choiceD: "A list of functions",
        correct:  "B",
    },
    {
        question: "Which of these does NOT run using a computer program?",
        choiceA: "Space rockets",
        choiceB: "Bikes",
        choiceC: "Cars",
        choiceD: "Trains",
        correct:  "B",
    }
]

var lastQuestion = questions.length -1;
var nextQuestion = 0;
var score = 0;

function nextQuestion() {
    // index of next question, grabbed from the question object
    var q = questions[nextQuestion];
    // link the object in the variable "questions" to that index
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function correctAnswer() {

}

function incorrectAnswer() {
    
}


function renderScore() {
    // display the last page of the quiz to show score
    quiz.style.display = "block";


}

// run the user's answer through this function to then check using conditional statements
function checkAnswer(answer) {
    // if question is correct, then go to next question
    if(questions[nextQuestion].correct == answer) {
        score++
        correctAnswer();
    } else {
        incorrectAnswer();
    }
    // if not the last question, then continue with next question
    if(nextQuestion < lastQuestion) {
        // timer count = 0;
        // go to next question
        nextQuestion++;
        // render the question
        questionRendeR();
    } else {
        // stop the timer and show the score
        clearInterval(Timer)
        renderScore();
    }
}

var start = document.getElementById("start")
var Timer

function startQuiz() {
    event.preventDefault();
    // display the first question
    start.style.display = "none";

}

function Timer() {

}

start.addEventListener("click", startQuiz);