// get all elements
var start = document.getElementById("startPage");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');
var next = document.getElementById("next");

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
];

// value variables, must be AFTER questions
var lastQuestion = questions.length - 1;
var nextQuestionIndex = 0;
var score = 0;

// function just to list question
function nextQuestion() {
    var q = questions[nextQuestionIndex];
    // replace the question/choice div with the appropriate question and choices
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}


function startQuiz() {
    event.preventDefault();
    // display the first question
    start.style.display = "none";
    nextQuestion();
    quiz.style.display = "inline-block";
    Timer();
    setTime();
}

// more variables for timer
var secondsLeft = 500;
var timerInterval;
var timeEl = document.getElementById("counter");


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


// run the user's answer through this function to then check using conditional statements
function checkAnswer(event) {  
 
    document.getElementById("correct").classList.add("hidden")
    document.getElementById("incorrect").classList.add("hidden")
// events need to have targets
    const answer = event.currentTarget.id;
    // if question is correct, then go to next question
    if(questions[nextQuestionIndex].correct == answer) {
        correctAnswer();
    } else {
        incorrectAnswer();
    }
    // if not the last question, then continue with next question
    // next button doesn't go to next question, doesn't increment because this if else statement is inside a function, have to call it again outside
    goToNextQuestion();
}

function goToNextQuestion() {
    if(nextQuestionIndex < lastQuestion) {
        // go to next question
        nextQuestionIndex++;
        // ask the next question
        nextQuestion();
    } else {
        // stop the timer and show the score
        clearInterval(Timer)
        finalScore();
    }
}

function skipQuestion() {
    incorrectAnswer();
    goToNextQuestion();
}

// if correct, display Correct!
function correctAnswer() {
    document.getElementById("correct").classList.remove("hidden"); 
    score++;
    console.log(score);
    nextQuestion();
}

// if correct, display Inorrect!
function incorrectAnswer() {
    document.getElementById("incorrect").classList.remove("hidden");
    // take 10 seconds away from

    // timerInterval - 10;
    console.log("sdfgh")
    nextQuestion();
}

var clearHighscores = document.getElementById("clearHighscores");
var playAgain = document.getElementById("playAgain");

function finalScore() {
    // display the last page of the quiz to show score
    quiz.style.display = "none";
    document.getElementById("finalScores").classList.remove("hidden");
   
    // stop timer
    clearInterval(timerInterval);
    setTimeout(finalScore, 1000);

    // show score
    var scoreEl = score;
    document.querySelector("#score").textContent = scoreEl;

    // play again : refresh, back to first page
    // when submit is pressed, goes to scorepage
    // var submit = document.getElementById("submit");
    // submit.addEventListener("click", scoreBoard)
}

// function scoreBoard() {
//     document.getElementById("finalScores").classList.add("hidden");
//     document.getElementById("finalPage").classList.remove("hidden");



//     playAgain.addEventListener("click", nextQuestion)
// }


// add event listeners for all buttons
start.addEventListener("click", startQuiz);
choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);
choiceC.addEventListener("click", checkAnswer);
choiceD.addEventListener("click", checkAnswer);
next.addEventListener("click", skipQuestion);

