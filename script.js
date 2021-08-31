var quizContainer = document.getElementById('quiz');

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

let quizQuestions = 0;

function quizCall() {
    //Starts the quiz and keeps track of the quizData array
    var quizDataQuestions = quizData[quizQuestions];
    quizContainer.innerHTML = quizDataQuestions;

}

function nextQuestion() {
    //goes to the next question
}

function previousQuestion() {
    //goes back to the previous question
}

function submit() {
    //submit the quiz using this
}

function returnGrade() {
    //Returns the results of the quiz
}