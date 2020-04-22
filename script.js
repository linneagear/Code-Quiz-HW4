// get all elements
var start = document.getElementById("startPage");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var submit = document.getElementById("submit");
var clearHighscores = document.getElementById("clearHighscores");
var playAgain = document.getElementById("playAgain");
var scoreSpan = document.getElementById("score")
// var next = document.getElementById("next")

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

// value variables, must be AFTER questions
var lastQuestion = questions.length - 1;
var nextQuestion = 0;
var score = 0;

function nextQuestion() {
    // index of next question, grabbed from the question object
    var q = questions[nextQuestion];
    // replace the question/choice div with the appropriate question and choices
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    nextQuestion();
}

function startQuiz() {
    event.preventDefault();
    // display the first question
    start.style.display = "none";
    nextQuestion;
    quiz.style.display = "block";
    Timer();
    setTime();
}

// // if correct, display Correct!
// function correctAnswer() {
//     document.getElementById("correct").style.display = "Correct!";    
// }

// // if correct, display Inorrect!
// function incorrectAnswer() {
//     document.getElementById("incorrect").style.display = "Incorrect!";   
// }

var secondsLeft = 500;
var timerInterval;
var timeEl = document.getElementById("counter");
var count = 0;

function setTime() {
    timerInterval = setInterval(Timer, 1000);
  }
// when Start Quiz button is clicked, then start timer
function Timer() {
    secondsLeft--;

    timeEl.textContent = secondsLeft;
// if time is 0, clear time interval and go to score page
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      setTimeout(renderScore, 1000);
    }
}

// function renderScore() {
//     // display the last page of the quiz to show score
//     quiz.style.display = "block";
// }


// run the user's answer through this function to then check using conditional statements
// function checkAnswer(answer) {
//     // if question is correct, then go to next question
//     if(questions[nextQuestion].correct == answer) {
//         score++
//         correctAnswer();
//     } else {
//         incorrectAnswer();
//     }
//     // if not the last question, then continue with next question
//     if(nextQuestion < lastQuestion) {
//         // timer count = 0;
//         // go to next question
//         nextQuestion++;
//         // render the question
//         questionRender();
//     } else {
//         // stop the timer and show the score
//         clearInterval(Timer)
//         renderScore();
//     }
// }


// add event listeners for all buttons
start.addEventListener("click", startQuiz);
// next.addEventListener("click", nextQuestion);