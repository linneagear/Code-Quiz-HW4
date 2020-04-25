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

## PsuedoCode

* Intro page with a button of "Start Quiz", Coding Quiz challenge
* Next "page" has first quiz question
* When I click the start button, then the timer starts counting down
* When I click a button to answer one of the 4 options, THEN goes to the next question until all questions are complete
* WHEN all questions are answered or the timer reaches 0 the game is over
* IF a question is answered incorrectly, the timer subtracts 30 seconds
* IF a question is answered correctly, no change, timer continues and "Correct" appears
* When the quiz is over, save initials and score and pushes it to the Scoreboard
* use local storage to save highscores

# Satisfying the Criteria

- When the start button is pressed, the first question is presented with all options.
- If the answer is correct, the score goes up by one, and if it's incorrect, 50 seconds should be cut off of seconds left.
- If next is clicked, counted as incorrect
- At the end of the 5 question quiz, user is able to add their initials to a scoreboard of highscores
- I wrote several functions to achieve this, to output the different outcomes like correct answer, incorrect answer, when "next" is clicked, etc.


[Deployed link of quiz](https://linneagear.github.io/Code-Quiz-HW4/)


# Issues
The main issue I ran into was having the timer subtract time. I was able to subtract it, but had trouble sticking to that time and contuing after subtracting. I think I need to research and practice more on timers and intervals.


