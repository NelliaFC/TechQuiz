//add questions array
var questionsArray = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    }
  ]
//create global variables that point to certain parts of HTML
var startButton = document.getElementById("start") 
var timer = document.getElementById("time") 
var questionsDiv = document.getElementById("questions")
var choicesDiv = document.getElementById("choices")
var endScreen = document.getElementById("end-screen")
var submit= document.getElementById("submit")
var finalScore = document.getElementById("final-score")
var intials = document.getElementById("initials") 

//var select class = document.querySelector(".start") to ineract with classes only if you need to.


//NOTE: start quiz function when start button is pressed "hides" start screen, "unhides" next question, and then removes class "hide"
//NOTE: inside startQuiz function add set interval that will start the timer ; clear interval stops timer and lastly fires function to loop over question array
//Create a timer that starts when the "start" button is clicked
//create a CLICK event

//inside CLICK event create a function If/else statement if wrong answer, TIME subtracted from total time
//For questions create an Array[] that loops

//Question Array is tied to the time function
//once RIGHT or WRONG is determined it moves to the next array index
//When one question assessed moves down the line of code

//create an IF/OR END OF quiz function when all questions answerer OR timer is done
//var endTime, var endQuiz, setInterva  clearInterval. 
//create function gameOver that contains imput for Initials and score, Local Storage?
//Nice to have: restart