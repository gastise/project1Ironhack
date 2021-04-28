// index.html

// main page title animation
function changeH1text() {
    let header = document.getElementById('h1text');
    if (header.innerHTML == "HEY") {
        header.innerHTML = "ARE YOU";
    } else if (header.innerHTML == "ARE YOU") {
        header.innerHTML = "THE ULTIMATE";
    } else if (header.innerHTML == "THE ULTIMATE") {
        header.innerHTML = "UFC FAN?";
    } else if (header.innerHTML == "UFC FAN?") {
        header.innerHTML = "HEY";
    };
}

setInterval(changeH1text, 1000);



// game.html


const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.answer-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Who won UFC 1?',
        choice1: 'Ken Shamrock',
        choice2: 'Royce Gracie',
        choice3: 'Mike Tyson',
        choice4: 'Dan Severn',
        answer: 2,
    },
    {
        question: 'Who is the champion with more title defenses?',
        choice1: 'Georges St-Pierre',
        choice2: 'Anderson Silva',
        choice3: 'Jon Jones',
        choice4: 'Demetrious Johnson',
        answer: 4,
    },
    {
        question: 'Which champion held the title for the longest time?',
        choice1: 'Demetrious Johnson',
        choice2: 'Anderson Silva',
        choice3: 'Georges St-Pierre',
        choice4: 'Jose Aldo',
        answer: 2,
    },
    {
        question: 'Who has been the youngest UFC champion?',
        choice1: 'Jose Aldo',
        choice2: 'Josh Barnett',
        choice3: 'Conor McGregor',
        choice4: 'Jon Jones',
        answer: 4,
    },
    {
        question: 'Who has been the oldest UFC champion?',
        choice1: 'Chuck Liddell',
        choice2: 'Randy Couture',
        choice3: 'Daniel Cormier',
        choice4: 'Mark Coleman',
        answer: 2,
    },
    {
        question: 'Who has won more "Performance of the Night" bonuses?',
        choice1: 'Donald Cerrone',
        choice2: 'Nate Diaz',
        choice3: 'Charles Oliveira',
        choice4: 'Joe Lauzon',
        answer: 1,
    },
    {
        question: 'Who has more "Fight of the Night" bonuses?',
        choice1: 'Donald Cerrone',
        choice2: 'Nate Diaz',
        choice3: 'Diego Sanchez',
        choice4: 'Anderson Silva',
        answer: 2,
    },
    {
        question: 'Which fighter has spent the most time in the Octagon?',
        choice1: 'Jeremy Stephens',
        choice2: 'Frankie Edgar',
        choice3: 'Diego Sanchez',
        choice4: 'Demian Maia',
        answer: 2,
    },
    {
        question: 'Who has headlined more UFC PPV events?',
        choice1: 'Jon Jones',
        choice2: 'Tito Ortiz',
        choice3: 'Anderson Silva',
        choice4: 'Randy Couture',
        answer: 4,
    },
    {
        question: 'Who has the longest winning streak?',
        choice1: 'Anderson Silva',
        choice2: 'Georges St-Pierre',
        choice3: 'Jon Jones',
        choice4: 'Demetrious Johnson',
        answer: 1,
    }
]

const scorePoints = 1
const maxQuestions = 10

let startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

let getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }

    questionCounter++
    (document.querySelector('#progressText')).innerText = `Question ${questionCounter} of ${maxQuestions}`
    progressBarFull.style.width = `${(questionCounter/maxQuestions) * 100}%` //tells us what question we are on

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question //will give us a new question to ask

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect' //if answer is correct turn box green or if answer is incorrect turn box red

        if(classToApply === 'correct') { //if answer is correct add points to scorePoints
            incrementScore(scorePoints)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => { //time between correct or incorrect answer is shown and new questions comes up
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1500)
    })
})

let incrementScore = num => { //updating current score with latest answer
    score += num
    scoreText.innerText = score
}

startGame();
