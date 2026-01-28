// Quiz Logic

// Quiz state variables
let currentTopic = 'algebra1';
let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = 0;
let currentQuiz = [];

// Initialize quiz
function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = 0;
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    // Generate new quiz questions
    currentQuiz = topicData[currentTopic].quizGenerator();
    
    loadQuestion();
}

// Load current question
function loadQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    
    document.getElementById('quizProgress').textContent = `Question ${currentQuestionIndex + 1}/10`;
    document.getElementById('quizQuestion').textContent = question.q;
    
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    
    // Generate wrong answers around the correct answer
    const correct = question.correct;
    const wrongAnswers = [];
    
    // Create 3 wrong answers
    for (let i = 0; i < 3; i++) {
        let wrong;
        do {
            const offset = rand(-5, 5);
            wrong = correct + offset;
        } while (wrong === correct || wrongAnswers.includes(wrong) || wrong < 0);
        wrongAnswers.push(wrong);
    }
    
    // Combine and shuffle all answers
    const allAnswers = [correct, ...wrongAnswers];
    allAnswers.sort(() => Math.random() - 0.5);
    
    // Find which index is the correct answer
    const correctIndex = allAnswers.indexOf(correct);
    
    // Create buttons
    allAnswers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index, correctIndex);
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById('nextBtn').style.display = 'none';
}

// Check answer
function checkAnswer(selectedIndex, correctIndex) {
    const buttons = document.querySelectorAll('.quiz-option');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Check if correct
    if (selectedIndex === correctIndex) {
        buttons[selectedIndex].classList.add('correct');
        score++;
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[correctIndex].classList.add('correct');
    }
    
    answeredQuestions++;
    document.getElementById('nextBtn').style.display = 'block';
}

// Next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < 10) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    document.getElementById('scoreDisplay').textContent = `Your Score: ${score}/10`;
}

// Restart quiz
function restartQuiz() {
    initQuiz();
}
