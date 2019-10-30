'use strict';

function startQuiz() {
    // Start the quiz, advance the page to the first question.
    console.log('`startQuiz` ran')
}

function renderQuestion() {
    // Display the question and options, beginning with the first in STORE and cyclying through to 10.
    console.log('`renderQuestion` ran')
    const questionString = '<p>Modal, lyocell, tencel, acetate, and viscose are all variants of which cellulose-based fiber developed '
    'in France in the 1890s?</p>';

    // insert that HTML into the DOM
    $('.js-question').html(questionString);
}

function submitAnswer() {
    // Submit user's answer, advance page to reveal correct answer.
    console.log('`submitAnswer` ran')
}

function renderAnswer() {
    // Display the answer, source, and answerImage, beginning with the first in STORE and cyclying through to 10.
    console.log('`renderAnswer` ran')
}
    
function nextQuestion() {
    // Next question, advance page to next question.
    console.log('`nextQuestion` ran')
}

function retakeQuiz() {
    // Retake quiz.
    console.log('`retakeQuiz` ran')
}

const STORE = [
    // This is where all the questions and answers are stored.
    {// 1
        question: 'Modal, lyocell, tencel, acetate, and viscose are all variants of which cellulose-based fiber developed in France in the 1890s?',
        options: [
            'Spandex',
            'Polyester',
            'Nylon',
            'Rayon'
        ],
        answer: 'Rayon. ' +
        'Rayon, modal, lyocell, tencel, acetate, and viscose are all considered semi-synthetic fibers. While they are made ' +
        'with natural plant materials such as wood pulp, their production involves harmful chemicals like carbon disulfide.',
        source: 'https://en.wikipedia.org/wiki/Rayon#Modal',
        answerImage: '<img src = "https://www.renonation.sg/wp-content/uploads/microplasticslaundry.jpg" alt = "">'
    },
    {//2
        question: 'Which fiber is currently the most common globally used for fabric in clothing?',
        options: [
            'Cotton',
            'Wool',
            'Polyester',
            'Rayon'],
        answer: 'Polyester. Nearly 70 million barrels of oil are used each year to make polyester around the world, which ' +
        'is now the most commonly used fiber in making clothes.',
        source: 'https://en.wikipedia.org/wiki/Polyester#History',
        answerImage: '<img src = "https://cdn.theatlantic.com/assets/media/img/mt/2017/09/RTXX3CV/lead_720_405.jpg?mod=1533691903" alt = "">'
    },
    {//3
        question: 'Which of these fibers is biodegradable?',
        options: [
            'Modal',
            'Nylon',
            'Spandex',
            'Polyester'],
        answer: 'Modal.' +
        'Modal fibers are plant-based.',
        source: 'https://en.wikipedia.org/wiki/Rayon#Modal',
        answerImage: '<img src = "https://www.havep.com/sites/default/files/uploads/beeld--tencel.png" alt = "">'
    },
    {//4
        question: 'Studies have shown that synthetic fibers release microplastics when washed. Microplastics are very' +
        'small pieces of plastic that pollute the environment. Which of the following fibers do NOT contribute to ' +
        'microplastic pollution?',
        options: [
            'Spandex',
            'Polyester',
            'Nylon',
            'Rayon'],
        answer: 'Rayon.' +
        'A scientific-study by Plymouth University measured how many fibres are released during washing.  They found that ' +
        'each garment in a load of laundry can shed more than 1,900 fibers of microplastics. For an average wash load of 6 kg, ' +
        'over 700,000 fibres could be released per wash.',
        source: 'https://en.wikipedia.org/wiki/Microplastics#cite_note-1',
        answerImage: '<img src = "https://www.renonation.sg/wp-content/uploads/microplasticslaundry.jpg" alt = "">'
    },
    {//5
        question: 'Roughly how many years does it take for polyester to decompose?',
        options: [
            '80 years',
            '100 years',
            '150 years',
            '200 years'],
        answer: '200 years.',
        source: 'https://en.wikipedia.org/wiki/Polyester#History',
        answerImage: '<img src = "https://images.squarespace-cdn.com/content/v1/5384d5b1e4b037295d9a79a5/1555280681447-E0FZ6M6DT2AG4L7OYSX4/ke17ZwdGBToddI8pDm48kCIx9N0V2Sy5-JgI2E0RLo17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ua0NvAo_CFW2sT8QHZyJh6EPXonve-QtpSPmhXagV0uSCIx5s-Ld2hVaeprCce2BRQ/clothing-landfill-waste.jpg?format=2500w" alt = "">'
    },
    {//6
        question: 'Which of these fibers is the most environmentally-friendly?',
        options: [
            'Tencel',
            'Modal',
            'Acetate',
            'Viscose'],
        answer: 'Tencel.' +
        'Although all of the above fibers are made from plants, they all rely on harmful chemicals in their manufacturing ' +
        'processes. Only tencel is made in a closed-loop production process so that a minimal amount of harmful chemicals' +
        'are emmitted.',
        source: 'https://www.tencel.com/sustainability',
        answerImage: '<img src = "https://cdn.webshopapp.com/shops/282217/files/294537375/tencel-production.jpg" alt = "">'
    },
    {//7
        question: 'Which of these fibers was the earliest to be made entirely from petrochemicals?',
        options: [
            'Polyester',
            'Spandex',
            'Nylon',
            'Acryllic'],
        answer: 'Nylon.' +
        'The first nylons were debuted at the New York World Fair in 1939.',
        source: 'https://en.wikipedia.org/wiki/Cotton#Competition_from_synthetic_fibers',
        answerImage: '<img src = "https://image.glamourdaze.com/2017/06/women-demonstrating-nylon-stockings-at-the-1939-San-Francisco-Golden-Gate-International-Expo.jpg" alt = "">'
    },
    {//8
        question: 'Unlike conventional cotton, organic cotton production does not involve any pesticides or herbicides. ' +
        'One other difference between organic cotton and conventional cotton is:',
        options: [
            'Organic cotton requires more water for irrigation.',
            'Organic cotton requires less water for irrigation.',
            'Organic cotton requires more energy to produce.',
            'Organic cotton is more absorbent.'],
        answer: 'Organic cotton requires less water for irrigation. It uses 88% less water and 62% less energy than ' +
        'conventional cotton.',
        source: 'http://aboutorganiccotton.org/',
        answerImage: '<img src = "https://cdn.shopify.com/s/files/1/0006/8563/7750/files/cotton_1024x1024.jpg?v=1549891501" alt = "">'

    },
    {//9
        question: 'Dupont, the largest chemical company in the world, created and popularized which of the following synthetic ' +
        'fibers?',
        options: [
            'Nylon',
            'Polyester',
            'Spandex',
            'All of the above'],
        answer: 'All of the above.',
        source: 'https://en.wikipedia.org/wiki/Nylon',
        answerImage: '<img src = "https://www.mintpressnews.com/wp-content/uploads/2017/07/AP_100125014959.jpg" alt = "">'
    },
    {//10
        question: 'Which fiber helps insulate when it absorbs water vapor?',
        options: [
            'Silk',
            'Cotton',
            'Wool',
            'Modal'],
        answer: 'Wool.' +
        'Wool fibers are covered in cuticle cells that have a waxy coating, making wool water-repellent.  Tiny pores in ' +
        'the cuticle cells allow water vapor to pass through the wool fibre.  When wool absorbs moisture, it retains warmth. ' +
        'For example, if you go from a warm room into a cold, damp night wearing a wool jersey, the wool picks up water vapor ' +
        'from the air, keeping you warm. The reverse occurs when you go back into the warm room – the moisture in your jersey ' +
        'passes into the atmosphere, cooling you down.',
        source: 'https://www.sciencelearn.org.nz/resources/875-wool-fibre-properties',
        answerImage: '<img src = "https://static.sciencelearn.org.nz/images/images/000/000/982/embed/FS_TEXTIL_INF_06_Wool_fibre_properties_cortical_cells.jpg?1522297887" alt = "">'
    }
]

function handleFiberQuiz() {
        // This is the callback funtion.  It causes the javascript code to run once the page has loaded.
        startQuiz()
        submitAnswer()
        nextQuestion()
        retakeQuiz()
}

$(handleFiberQuiz)





