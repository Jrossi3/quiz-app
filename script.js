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