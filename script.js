var quizContainer = document.getElementById('quizQuestions');
var quizCallElement = document.getElementById('quizCall');
var answerChoiceA = document.getElementById('a');
var answerChoiceB = document.getElementById('b');
var answerChoiceC = document.getElementById('c');
var answerChoiceD = document.getElementById('d');
var quizClass = document.getElementById('quizzer')
var questionCounter = 0;

const quizData = [
    {
        question: "What is my name?", 
        answerChoices: {
            a: "Jason", 
            b: "Dino", 
            c: "Brandon", 
            d: "Luke", 
        },
        correctAnswer: "a"
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

function removeButton(quizCall) {
    var quizCall = document.getElementById('quizCall');
    quizCall.parentNode.removeChild(quizCall);
}

function quizCall() {
    //Starts the quiz and displays the first question
    quizContainer.innerHTML = quizData[questionCounter].question;
    answerChoiceA.innerHTML = quizData[questionCounter].answerChoices.a;
    answerChoiceB.innerHTML = quizData[questionCounter].answerChoices.b;
    answerChoiceC.innerHTML = quizData[questionCounter].answerChoices.c;
    answerChoiceD.innerHTML = quizData[questionCounter].answerChoices.d;

    //Increment the question counter
    questionCounter++;

    //Create the next and previous question buttons
    
    previousQuestionButton.innerHTML = "Previous Question";
    quizClass.appendChild(previousQuestionButton);
    nextQuestionButton.innerHTML = "Next Question";
    quizClass.appendChild(nextQuestionButton);

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
        answerChoiceA.innerHTML = quizData[questionCounter].answerChoices.a;
        answerChoiceB.innerHTML = quizData[questionCounter].answerChoices.b;
        answerChoiceC.innerHTML = quizData[questionCounter].answerChoices.c;
        answerChoiceD.innerHTML = quizData[questionCounter].answerChoices.d;
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

        //Returns the previous question
        quizContainer.innerHTML = quizData[questionCounter].question;
        answerChoiceA.innerHTML = quizData[questionCounter].answerChoices.a;
        answerChoiceB.innerHTML = quizData[questionCounter].answerChoices.b;
        answerChoiceC.innerHTML = quizData[questionCounter].answerChoices.c;
        answerChoiceD.innerHTML = quizData[questionCounter].answerChoices.d;
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