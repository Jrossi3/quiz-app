const answerClass = document.querySelectorAll(".answerClass");
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
var questionCounter = 0;
let totalArray = [];
let correctAnswerChoice = 0;
let mistakes = 0;
let checker = true;
let buttonCreator = 0;
submitButton.className = "submitButtonClass";
nextQuestionButton.className = "nextClass";
prevQuestionButton.className = "prevClass";

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
        correctAnswer: 'b'
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

function deSelector() {
    answerClass.forEach((answer1) => {
        answer1.checked = false;
    })
}

function quizCall() {
    //Starts the quiz and displays the first question
    document.location='quizQuestions.html';
    quizCallInitial();
}

function removeButton(h) {
    var element = document.getElementById(h);
    element.parentNode.removeChild(element);
}

quizCallInitial();

function backToStart() {
    document.location='index.html';
}

function quizCallInitial() {
    if (buttonCreator == 1) {
        prevQuestionButton.innerHTML = "Previous Question";
        quizzerSubmit.appendChild(prevQuestionButton);
        buttonCreator = 2;
    } else if (buttonCreator == 0) {
        nextQuestionButton.innerHTML = "Next Question";
        quizzerSubmit.appendChild(nextQuestionButton);
        buttonCreator = 1;
    }
    // Starts the quiz and displays the first question
    deSelector();
    quizContainer.innerHTML = quizData[questionCounter].question;
    answerChoiceA.innerHTML = quizData[questionCounter].answerChoices.a;
    answerChoiceB.innerHTML = quizData[questionCounter].answerChoices.b;
    answerChoiceC.innerHTML = quizData[questionCounter].answerChoices.c;
    answerChoiceD.innerHTML = quizData[questionCounter].answerChoices.d;
    // console.log(questionCounter);
}

//Working
function nextQuestion() {
    
    console.log(questionCounter)

    if (questionCounter < quizData.length-1) {
        displayRadioValue();
        questionCounter++;
    }
    if (questionCounter == quizData.length - 1){
        submitButton.innerHTML = "Submit Quiz";
        quizzerSubmit.appendChild(submitButton);
        nextQuestionButton.remove();
    } else if (questionCounter == 1) {
        prevQuestionButton.innerHTML = "Previous Question";
        quizzerSubmit.appendChild(prevQuestionButton);
    }
    quizCallInitial();
    keepAnswer();
    // console.log(totalArray)
}

function displayRadioValue() {
    let answer = undefined;
    answerClass.forEach((answer1) => {
        if (answer1.checked) {
            answer = answer1.id;
            if (totalArray.length <= quizData.length) {
                totalArray[questionCounter] = answer;
            }
        }
    });
    if (totalArray.length <= quizData.length - 1){
        if (!totalArray[questionCounter]){
            totalArray[questionCounter] = 0;
        } 
    }
    console.log(totalArray);
    

}

//Working
function previousQuestion() {
    if (questionCounter == quizData.length - 1) {
        submitButton.remove();
        nextQuestionButton.innerHTML = "Next Question";
        quizzerSubmit.appendChild(nextQuestionButton);
    } 
    if (questionCounter > 0) {
        displayRadioValue();
        questionCounter--;
    } 
    if (questionCounter == 0) {
        prevQuestionButton.remove();
    }
    // console.log(questionCounter)
    
    quizCallInitial();
    keepAnswer();
    // deSelector();
}

function keepAnswer(){
    
    let answer = undefined;
    if (totalArray.length > 0){
        answerClass.forEach((answer1) => {
            if (answer1.id == totalArray[questionCounter]) {
                answer1.checked = true
            }
    });
}
}

submitButton.addEventListener("click", () => {
    if (totalArray.length <= quizData.length - 1){
        if (!totalArray[questionCounter]){
            totalArray[questionCounter] = 0;
        } 
    }
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
});

nextQuestionButton.addEventListener("click", () => {
    nextQuestion();
});

prevQuestionButton.addEventListener("click", () => {
    previousQuestion();
});