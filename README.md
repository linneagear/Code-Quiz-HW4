# Code-Quiz-HW4
Homework 4: Code Quiz

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)


## PsuedoCode

* Intro page with a button of "Start Quiz", Coding QUiz challenge
* Next "page" has first quiz question
* When I click the start button, then the timer starts counting down
* When I click a button to answer one of the 4 options, THEN goes to the next question until all questions are complete
* WHEN all questions are answered or the timer reaches 0 the game is over
* IF a question is answered incorrectly, the timer subtracts 10 seconds and "Wrong!", then disappears after 3 seconds
* IF a question is answered correctly, no change, timer continues and "Correct" then disappears after 3 seconds
* When the quiz is over, save initials and score and pushes it to the Scoreboard
* Need function to check answer, to go to the next question, 

