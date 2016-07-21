var panel = $('#quiz-area'); // Panel we will write and append all of the HTML to from this JS file
var countStartNumber = 30; // Global variable,

// This function handles events where one button is clicked
// Start On Click
$(document).on('click', '#start', function() {
    // game.startGame();
})

// Submit On Click
$(document).on('click', '.check-guess', function(e) {
    // game.checkGuess(e)
})

// Start Over On Click
$(document).on('click', '#start-over', function() {
  //   game.loadQuestion();
});


var questionsArray = [
{
"question": "Which country consumes the most beer in the world?",
"allAnswers": ["Ireland", "Germany", "Czech Republic", "Denmark"],
"correctAnswer": "Czech Republic"
}, 
{
"question": "The Caesar Salad was invented in which country?",
"allAnswers": ["Mexico", "France", "Spain", "Italy"],
"correctAnswer": "Mexico"
}, 
{
"question": "Which country produces the largest amount of oranges and grapefruits in the world?",
"allAnswers": ["Brazil", "United States", "Africa", "India"],
"correctAnswer:" "Brazil"
}, 
{
"question": "Where were french fries invented?",
"allAnswers": ["United States", "France", "Belgium", "Austria"],
"correctAnswer": "Belgium"
},
{
"question": "Saffron is the most expensive spice in the world at $65 a gram, which country produces the most saffron?",
"allAnswers": ["India", "Morrocco", "Greece", "Iran"],
"correctAnswer": "Iran"
}, 
{
"question": "In what country was ice cream invented?",
"allAnswers": ["China", "India", "Africa", "Canada"],
"correctAnswer": "China"
}, 
{
"question": "Where is the potato plant originally from?",
"allAnswers": ["Japan", "Ireland", "Russia", "Peru"],
"correctAnswer": "Peru"
}, 
{
"question": "Which country eats the most chocolate in the world?",
"allAnswers": ["Germany", "United States", "Switzerland", "France"],
"correctAnswer": "Switzerland"
}, 
{
"question": "Which island country's national fruit, ackee, can cause severe vomiting if eaten before fully ripe?",
"allAnswers": ["Jamaica", "Cuba","Trinidad", "Bahamas"],
"correctAnswer": "Jamaica"
}, 
{
"question": "Where was the caffe latte invented?",
"allAnswers": ["France", "California", "Italy", "Washington"],
"correctAnswer": "California"
}];


// Array of Question Objects [0,1,2,3]

var game = {

    // Variables
    questions: questionsArray, // Import QuestionsArray into the Game Object
    questionNumber: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    unAnswered: 0,
    currentQuestionNumber: 0,

    // Functions
    countdown: function() {

       <span id="countdown" class="timer"></span>
var seconds = 60;
function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "Buzz Buzz";
    } else {
        seconds--;
    }
}
 
var countdownTimer = setInterval('secondPassed()', 1000);

    },

    timeUp: function() {

        // What happens when the timer runs out

    },

    reset: function() {


    },

    checkGuess: function() {

        // Is this the correct answer for the Question

        // Yes

        // No

        // Is this the last Question?
        if (this.questionNumber === questionsArray.length - 1) {

            // Game Over!!

        } else {

            // Continue Game
        }


    },

    finalResults: function() {


    },

    loadQuestion: function() {

        // start timer
        timer = setInterval(game.countdown, 1000);

        // Print Question
        console.log(this.questions[questionNumber].question)

        // Print Choices as buttons (for loop needed)
        console.log(this.questions[questionNumber].choices[0])
        console.log(this.questions[questionNumber].choices[1])
        console.log(this.questions[questionNumber].choices[2])
        console.log(this.questions[questionNumber].choices[3])
        console.log(this.questions[questionNumber].correctChoice)

    },

    nextQuestion: function() {

        // start timer
        this.timer()

        // Advance Question Number
        this.questionNumber++

        // Call loadQuestion() Function

    }

}
