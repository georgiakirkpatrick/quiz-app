'use strict';

const STORE = [
    // This is where all the questions and answers are stored.
    {// 1
        question: `Modal, lyocell, tencel, acetate, and viscose are all variants of which cellulose-based fiber developed in 
        France in the 1890s?`,
        options: [
            'Spandex',
            'Polyester',
            'Nylon',
            'Rayon'
        ],
        answer:'Rayon',
        explanation: `Rayon, modal, lyocell, tencel, acetate, and viscose are all considered semi-synthetic fibers. While they 
        are made with natural plant materials such as wood pulp, their production involves harmful chemicals like carbon disulfide.`,
        source: 'https://en.wikipedia.org/wiki/Rayon#Modal',
        answerImage: '<img src = "images/rayon-factory.jpg" alt = "Rayon factory.">'
    },
    {//2
        question: `Which fiber is currently the world's most commonly-used clothing fabric?`,
        options: [
            'Cotton',
            'Wool',
            'Polyester',
            'Rayon'],
        answer: 'Polyester',
        explanation: `Nearly 70 million barrels of oil are used each year to make polyester around the world, which is now the 
        most commonly used fiber in making clothes.`,
        source: 'https://en.wikipedia.org/wiki/Polyester#History',
        answerImage: '<img src = "images/oil.jpg" alt = "Oil barrels and worker.">'
    },
    {//3
        question: `Studies have shown that synthetic fibers release microplastics when washed. Microplastics are very 
        small pieces of plastic that pollute the environment. Which of the following fibers do NOT contribute to 
        microplastic pollution?`,
        options: [
            'Spandex',
            'Polyester',
            'Nylon',
            'Rayon'],
        answer: 'Rayon',
        explanation: `Rayon is made of plant-based cellulose while spandex, polyester, and nylon are all forms of plastic. 
        A scientific-study by Plymouth University measured how many fibres are released during washing synthetic fabrics.  
        They found that each garment in a load of laundry can shed more than 1,900 fibers of microplastics. For an average 
        wash load of 6 kg, over 700,000 fibres could be released per wash.`,
        source: 'https://en.wikipedia.org/wiki/Microplastics#cite_note-1',
        answerImage: '<img src = "images/microplastics-laundry.jpg" alt = "Washing machine illustration and microplastic facts.">'
    },
    {//4
        question: `Which of these fibers is biodegradable?`,
        options: [
            'Modal',
            'Nylon',
            'Spandex',
            'Polyester'],
        answer: 'Modal',
        explanation: `Modal is a type of rayon that is stronger and lighter than standard rayon.  
        Modal is plant-based while nylon, spandex, and polyester are made of petrochemicals.`,
        source: 'https://en.wikipedia.org/wiki/Rayon#Modal',
        answerImage: '<img src = "images/modal.jpg" alt = "Modal production: trees, wood, and cellulose.">'
    },
    {//5
        question: `Roughly how many years does it take for polyester to decompose?`,
        options: [
            '80 years',
            '100 years',
            '150 years',
            '200 years'],
        answer: '200 years',
        explanation: '200 years.',
        source: 'https://en.wikipedia.org/wiki/Polyester#History',
        answerImage: '<img src = "images/clothing-waste.jpg" alt = "An otherwise-empty room with heaps of colorful clothing.">'
    },
    {//6
        question: 'Which of these rayon-related fibers is the most environmentally-friendly?',
        options: [
            'Tencel',
            'Modal',
            'Acetate',
            'Viscose'],
        answer: 'Tencel',
        explanation: `Although tencel, modal, acetate, and viscose fibers are made from plants, they all rely on harmful 
        chemicals in their manufacturing processes. Only tencel is made in a closed-loop production process so that a 
        minimal amount of harmful chemicals are emmitted.`,
        source: 'https://www.tencel.com/sustainability',
        answerImage: '<img src = "images/tencel-production.jpg" alt = "Tencel production: wood, pulp, water, solvent, tencel.">'
    },
    {//7
        question: `Which of these synthetic fibers was the first to be introduced to the public?`,
        options: [
            'Polyester',
            'Spandex',
            'Nylon',
            'Acryllic'],
        answer: 'Nylon',
        explanation: 'The first nylons were debuted at the New York World Fair in 1939.',
        source: 'https://en.wikipedia.org/wiki/Cotton#Competition_from_synthetic_fibers',
        answerImage: '<img src = "images/nylon-1939.jpg" alt = "Women demonstrating nylon stockings at the 1939 San Francisco Golden Gate International Expo.">'
    },
    {//8
        question: `Unlike conventional cotton, organic cotton production does not involve any pesticides or herbicides.  
        One other difference between organic cotton and conventional cotton is:`,
        options: [
            'Organic cotton requires more water for irrigation.',
            'Organic cotton requires less water for irrigation.',
            'Organic cotton requires more energy to produce.',
            'Organic cotton is more absorbent.'],
        answer: 'Organic cotton requires less water for irrigation.',
        explanation: 'Organic cotton requires less water for irrigation. It uses 88% less water and 62% less energy than ' +
        'conventional cotton.',
        source: 'http://aboutorganiccotton.org/',
        answerImage: '<img src = "images/cotton.jpg" alt = "A cotton field with mountains in the distance.">'

    },
    {//9
        question: `Dupont, the largest chemical company in the world, created and popularized which of the following synthetic fibers?`,
        options: [
            'Nylon',
            'Polyester',
            'Spandex',
            'All of the above'],
        answer: 'All of the above.',
        explanation: 'Trick question!  It was all of the above - nylon, polyester, and spandex.',
        source: 'https://en.wikipedia.org/wiki/Nylon',
        answerImage: '<img src = "images/dupont.jpg" alt = "Exterior of a Dupont facility.">'
    },
    {//10
        question: 'Which fiber helps insulate when it absorbs water vapor?',
        options: [
            'Silk',
            'Cotton',
            'Wool',
            'Modal'],
        answer: 'Wool', 
        explanation: `Wool fibers are covered in cuticle cells that have a waxy coating, making wool water-repellent.  Tiny pores in
        the cuticle cells allow water vapor to pass through the wool fiber.  When wool absorbs moisture, it retains warmth.  For example, if you go from a warm room into a cold, damp night wearing a wool jersey, the wool picks up water vapor from the air, keeping you warm.  The reverse occurs when you go back into the warm room – the moisture in your jersey
        passes into the atmosphere, cooling you down.`,
        source: 'https://www.sciencelearn.org.nz/resources/875-wool-fibre-properties',
        answerImage: '<img src = "images/wool.jpg" alt = "Illustration of a cortical cell in wool fiber.">'
    }
]

// These variables start the quiz at the first question with a score of zero.
let currentQuestionNumber = 0
let currentScore = 0

function selectQuestion() {
    // This function advances through the questions in STORE until the user reaches the last question.
    if (currentQuestionNumber < STORE.length) {
        return renderQuestion(currentQuestionNumber)
    }
    else
    finalScore();
    $('.js-current-question-number').text(10);
}

function renderQuestion(index) {
    // Display the question and options, beginning with the first in STORE and cyclying through to 10.
    console.log('`renderQuestion` ran')
    let questionAndOptionString = $(`<form>
           <fieldset>
             <legend class="question-string" required>${STORE[index].question}</legend>
           </fieldset>
        </form>`)

    let questionAndOptionStringFieldset = $(questionAndOptionString).find('fieldset');
        // questionAndOptionStringFieldset finds the quiz question so we can insert answer options underneath it.

    STORE[index].options.forEach( function (answerValue, answerIndex) {
        // This function iterates through STORE options at the given index and writes HTML for each, then inserts the options after the question in questionAndOptionStringFieldset
        $(`<label for="${answerIndex}"><span>${answerValue}</span></label>
        <input type="radio" id="${answerIndex}" name="option" value="${answerValue}" required><br><br>`).appendTo(questionAndOptionStringFieldset)
    })

    $(`<button type="button" class="js-submit-button"> Submit </button>`).appendTo(questionAndOptionStringFieldset)
        // This inserts the submit button after the four options in questionAndOptionStringFieldset.

    return questionAndOptionString
        // Finally, we return questionAndOptionString to render it in questionAndOptionStringFieldset
}

function startQuiz() {
    // Start the quiz, advance the page to the first question.
    console.log('`startQuiz` ran')
    $('.js-start').on('click', '.js-start-button', event => {
        console.log('`start-button` was clicked')
        $('.js-start').hide()
        $('.js-end').hide()
        $('.js-score-keeper').show()
        $('.js-current-question-number').text(1);
        $('.js-question-and-answer').show()
        $('.js-question-and-options').append(selectQuestion())
    })
}

function updateScore() {
    console.log('`updateScore` ran')
    currentScore++
    $('.js-current-score').text(currentScore);
}

function gotItRight() {
    // Tell the user they got the question right.
    // Display the explanation, source, and answerImage, beginning with the first in STORE and 
    // cyclying through to 10.

    console.log('`gotItRight` ran')
    $('.js-answer').html(`<p class = "one-word-answer">You got it right!</p>
    <p>${STORE[currentQuestionNumber].explanation}</p>
    <p>${STORE[currentQuestionNumber].answerImage}</p>
    <button type="button" class="js-next-button"> Next </button>`
    )
    updateScore()
}

function gotItWrong() {
    // Tell the user they got the question wrong.
    // Display the explanation, source, and answerImage, beginning with the first in STORE and 
    // cyclying through to 10.
    console.log('`gotItWrong` ran')
    $('.js-answer').html(`<p class = "one-word-answer"> Nope.</p>
    <p>${STORE[currentQuestionNumber].explanation}</p>
    <p>${STORE[currentQuestionNumber].answerImage}</p>
    <button type="button" class="js-next-button"> Next </button>`
    )
}

function submitAnswer() {
  // Submit user's answer, advance page to reveal correct answer.
  $('.js-question-and-options').on('click', '.js-submit-button', event => {
    event.preventDefault()
    console.log('`submitAnswer` ran')
    if (!$("input[name='option']:checked").val()) {
      alert('Nothing is checked!');
    }
    else {
      $('.js-question-and-options').hide()
      $('.js-answer').show()
      let selectedOption = $('input:checked').val()
      let correctAnswer = STORE[currentQuestionNumber].answer
      if (selectedOption === correctAnswer) {
        gotItRight()
      }
      else {
        gotItWrong()
      }
    }
  })
}

function updateCurrentQuestionNumber() {
    console.log('`updateCurrentQuestionNumber` ran')
    currentQuestionNumber++
    $('.js-current-question-number').text(currentQuestionNumber + 1)
}

function finalScore() {
    // Tells user their final score and ivites them to retake the quiz.
    $('.js-score-keeper').hide()
    $('.js-end').show()
  
    return $('.js-end').html(
        `<h3 class = "one-word-answer">Your Score</h3>
        <p class = "one-word-answer">${currentScore} / 10</p>
        <p class = "one-word-answer">Want to retake the quiz?  Click 'retake' to get started'.</p>
        <button type="button" class="js-retake-button"> Retake </button>`
    )
}

function nextQuestion() {
    // Next question, advance page to next question.
    $('.js-answer').on('click', '.js-next-button', event => {
        console.log('`nextQuestion` ran')
        $('.js-answer').hide()
        if (currentScore < 10) {
            $('.js-question-and-options').show()
            updateCurrentQuestionNumber()
            selectQuestion()
            $('.js-question-and-options form').replaceWith(selectQuestion())
        }
        else {
            console.log('`nextQuestion`  ran')
            $('.js-question-and-answer').hide()
            finalScore()
        }
    })
}

function setQuestionNumberAndScoreToZero() {
    currentQuestionNumber = 0
    currentScore = 0
}


function retakeQuiz() {
    // Retake quiz.
    $('.js-end').on('click', '.js-retake-button', event => {
        console.log('`retakeQuiz` ran')
        setQuestionNumberAndScoreToZero()
        $('.js-current-question-number').html(0)
        $('.js-current-score').text(0)
        $('.js-start').show()
    })
}

function handleFiberQuiz() {
    // This is the callback funtion.  It causes the javascript code to run once the page has loaded.
    startQuiz()
    submitAnswer()
    nextQuestion()
    retakeQuiz()
}

$(handleFiberQuiz)