var quizContainer = document.getElementById('quizQuestions');
var results = document.getElementById('resultsContainer');
var quizCallElement = document.getElementById('quizCall');
var answerChoiceA = document.getElementById('a1');
var answerChoiceB = document.getElementById('b1');
var answerChoiceC = document.getElementById('c1');
var answerChoiceD = document.getElementById('d1');
var quizzerSubmit = document.getElementById('quizzer');
var submitButton = document.createElement("BUTTON");
var restartButton = document.createElement("BUTTON");
var nextQuestionButton = document.createElement("BUTTON");
var prevQuestionButton = document.createElement("BUTTON");
submitButton.className = "submitButtonClass";
nextQuestionButton.className = "nextClass";
prevQuestionButton.className = "prevClass";
var questionCounter = 0;
let totalArray = [];
var check = true;

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

function quizCall() {
    //Starts the quiz and displays the first question
    document.location='quizQuestions.html';
    quizCallInitial();
}

function removeButton(h) {
    var element = document.getElementById(h);
    element.parentNode.removeChild(element);
}

let buttonCreator = 0;

quizCallInitial();

function backToStart() {
    document.location='index.html';
}

function quizCallInitial() {
    if (buttonCreator == 1) {
        prevQuestionButton.innerHTML = "Previous Question";
        quizzerSubmit.appendChild(prevQuestionButton);
        buttonCreator++;
    }
    if (buttonCreator == 0) {
        nextQuestionButton.innerHTML = "Next Question";
        quizzerSubmit.appendChild(nextQuestionButton);
        buttonCreator++;
    }
    //Starts the quiz and displays the first question
    quizContainer.innerHTML = quizData[questionCounter].question;
    answerChoiceA.innerHTML = quizData[questionCounter].answerChoices.a;
    answerChoiceB.innerHTML = quizData[questionCounter].answerChoices.b;
    answerChoiceC.innerHTML = quizData[questionCounter].answerChoices.c;
    answerChoiceD.innerHTML = quizData[questionCounter].answerChoices.d;
    // console.log(questionCounter);
}

let tracker = 0;

//Working
function nextQuestion() {
    if (questionCounter < quizData.length-1) {
        questionCounter++;
        displayRadioValue();
    }
    quizCallInitial();
    if (questionCounter == quizData.length - 1){
        submitButton.innerHTML = "Submit Quiz";
        quizzerSubmit.appendChild(submitButton);
        nextQuestionButton.remove();
    }
    if (questionCounter == 1) {
        prevQuestionButton.innerHTML = "Previous Question";
        quizzerSubmit.appendChild(prevQuestionButton);
    }
}

let trackerHelper = 0;
let correctAnswerChoice = 0;
let mistakes = 0;
let checker = true;

function displayRadioValue() {
    const answerClass = document.querySelectorAll(".answer1");
    let answer = undefined;
    answerClass.forEach((answer1) => {
        if (answer1.checked) {
            answer = answer1.id;
            if (tracker < quizData.length && totalArray.length <= quizData.length) {
                totalArray[tracker] = answer;
                tracker++;
                trackerHelper++;
            }
        }
    });
    if (trackerHelper == 0 && totalArray.length <= quizData.length - 1){
        totalArray[tracker] = 0;
        tracker++;
    }
    if (trackerHelper > 0) {
        trackerHelper--;
    }
    console.log(totalArray);
    
    if (totalArray.length == quizData.length && checker == true) {
        for (let i = 0; i<quizData.length; i++) {
            if (totalArray[i] == quizData[i].correctAnswer) {
                correctAnswerChoice++;
            }
            mistakes++;
        }
        checker = false;
        alert("You got " + correctAnswerChoice + " correct out of " + mistakes + "!");
        document.location = "restartPage.html";
    }
}

//Working
function previousQuestion() {
    if (tracker > 0) {
        tracker--;
    }
    if (questionCounter == quizData.length - 1) {
        submitButton.remove();
        nextQuestionButton.innerHTML = "Next Question";
        quizzerSubmit.appendChild(nextQuestionButton);
    }
    if (questionCounter > 0) {
        questionCounter--;
    }
    if (questionCounter == 0) {
        prevQuestionButton.remove();
    }
    quizCallInitial();
}

submitButton.addEventListener("click", () => {
    displayRadioValue();
});

nextQuestionButton.addEventListener("click", () => {
    nextQuestion();
});

prevQuestionButton.addEventListener("click", () => {
    previousQuestion();
});