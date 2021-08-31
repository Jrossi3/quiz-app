var quizContainer = document.getElementById('quizQuestions');
var answerChoiceA = document.getElementById('a');
var answerChoiceB = document.getElementById('b');
var answerChoiceC = document.getElementById('c');
var answerChoiceD = document.getElementById('d');
var questionCounter = 0;

var quizData = [
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
        question: "What is my", 
        answerChoices: {
            a: 'Jason', 
            b: 'Dino', 
            c: 'Brandon', 
            d: 'Luke', 
        },
        correctAnswer: 'a'
    },
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
        question: "What is my name?", 
        answerChoices: {
            a: 'Jason', 
            b: 'Dino', 
            c: 'Brandon', 
            d: 'Luke', 
        },
        correctAnswer: 'a'
    }
];

function quizCall() {
    //Starts the quiz and keeps track of the quizData array
    var quizDataQuestions;
    quizDataQuestions = quizData[questionCounter];
    quizContainer.innerHTML = quizData.question;
    console.log(quizData[questionCounter], questionCounter);
}

function nextQuestion() {
    //goes to the next question
    questionCounter++;
    if (questionCounter < quizData.length) {
        quizDataQuestions = quizData[questionCounter];
        quizContainer.innerHTML = quizData[questionCounter];
        quizContainer.innerHTML = quizData[questionCounter];
        quizContainer.innerHTML = quizData[questionCounter];
        quizContainer.innerHTML = quizData[questionCounter];
        console.log(quizData[questionCounter], questionCounter);
    }
}

function previousQuestion() {
    //goes back to the previous question
    counter--;
    if (questionCounter < quizData.length) {
        quizDataQuestions = quizData[counter];
        quizContainer.innerHTML = quizData.question;
        console.log(quizData[counter], counter);
    }
}

function submit() {
    //submit the quiz using this
}

function returnGrade() {
    //Returns the results of the quiz
}