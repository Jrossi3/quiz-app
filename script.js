var quizContainer = document.getElementById('quizQuestions');
var quizCallElement = document.getElementById('quizCall');
var answerChoiceA = document.getElementById('a');
var answerChoiceB = document.getElementById('b');
var answerChoiceC = document.getElementById('c');
var answerChoiceD = document.getElementById('d');
var questionCounter = 0;

const quizData = [
    {
        question: "What is my name?", 
        answerChoices: {
            a: 'Jason', 
            b: 'Dino', 
            c: 'Brandon', 
            d: 'Luke', 
        },
        correctAnswer: 'a'
    },
    {
        question: "How old am I?", 
        answerChoices: {
            a: '22', 
            b: '21', 
            c: '20', 
            d: '19', 
        },
        correctAnswer: 'c'
    },
    {
        question: "What is my birthday", 
        answerChoices: {
            a: 'January 21', 
            b: 'February 21', 
            c: 'January 12',
            d: 'February 12', 
        },
        correctAnswer: 'd'
    },
    {
        question: "What is my dad's name", 
        answerChoices: {
            a: 'Jason', 
            b: 'Dino', 
            c: 'Brandon', 
            d: 'Luke', 
        },
        correctAnswer: 'b'
    },
    {
        question: "What is my mom's name?", 
        answerChoices: {
            a: 'Trish', 
            b: 'Molly', 
            c: 'Jennifer', 
            d: 'Gayle', 
        },
        correctAnswer: 'c'
    }
];

var nextQuestionButton = document.createElement("button");
var previousQuestionButton = document.createElement("button");
var submitButton = document.createElement("button");

// submitButton.innerHTML;
// document.body.appendChild(submitButton);


function removeButton(quizCallElement) {
    var quizCall = document.getElementById('quizCall');
    quizCall.parentNode.removeChild(quizCall);
}

function quizCall() {
    //Starts the quiz and displays the first question
    quizContainer.innerHTML = quizData[questionCounter].question;
    
    //Increment the question counter
    questionCounter++;

    //Create the next and previous question buttons
    nextQuestionButton.innerHTML;
    document.body.appendChild(nextQuestionButton);
    previousQuestionButton.innerHTML;
    document.body.appendChild(previousQuestionButton);

    //Remove the "start quiz" button
    removeButton(quizCallElement);
}

function nextQuestion() {
    //goes to the next question
    if (questionCounter < quizData.length) {
        //Increment the question counter
        questionCounter++;

        //Displays the question of the quiz
        quizContainer.innerHTML = quizData[questionCounter].question;
    }
}

function previousQuestion() {
    //goes back to the previous question
    if (questionCounter == quizData.length) {
        //Decrements the counter
        questionCounter--;
    }
    if (questionCounter < quizData.length && questionCounter > 0) {
        //Decrements the counter
        questionCounter--;

        //Returns the previous question, but not the answer choices
        quizContainer.innerHTML = quizData[questionCounter].question;
    }
}

function submit() {
    //submit the quiz using this
    if (questionCounter == quizData.length) {
        
    }
}

function returnGrade() {
    //Returns the results of the quiz
}