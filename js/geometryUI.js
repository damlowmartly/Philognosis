// Geometry UI Logic and Event Handlers

// Quiz state variables for geometry
let currentGeometryTopic = 'geometry1';
let currentGeometryQuestionIndex = 0;
let geometryScore = 0;
let geometryAnsweredQuestions = 0;
let currentGeometryQuiz = [];

// Initialize geometry quiz
function initGeometryQuiz() {
    currentGeometryQuestionIndex = 0;
    geometryScore = 0;
    geometryAnsweredQuestions = 0;
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    // Generate new quiz questions
    currentGeometryQuiz = geometryTopicData[currentGeometryTopic].quizGenerator();
    
    loadGeometryQuestion();
}

// Load current geometry question
function loadGeometryQuestion() {
    const question = currentGeometryQuiz[currentGeometryQuestionIndex];
    
    document.getElementById('quizProgress').textContent = `Question ${currentGeometryQuestionIndex + 1}/10`;
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
        btn.onclick = () => checkGeometryAnswer(index, correctIndex);
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById('nextBtn').style.display = 'none';
}

// Check geometry answer
function checkGeometryAnswer(selectedIndex, correctIndex) {
    const buttons = document.querySelectorAll('.quiz-option');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Check if correct
    if (selectedIndex === correctIndex) {
        buttons[selectedIndex].classList.add('correct');
        geometryScore++;
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[correctIndex].classList.add('correct');
    }
    
    geometryAnsweredQuestions++;
    document.getElementById('nextBtn').style.display = 'block';
}

// Next geometry question
function nextGeometryQuestion() {
    currentGeometryQuestionIndex++;
    
    if (currentGeometryQuestionIndex < 10) {
        loadGeometryQuestion();
    } else {
        showGeometryResults();
    }
}

// Show geometry results
function showGeometryResults() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    document.getElementById('scoreDisplay').textContent = `Your Score: ${geometryScore}/10`;
}

// Restart geometry quiz
function restartGeometryQuiz() {
    initGeometryQuiz();
}

// Function to update content based on selected geometry topic
function updateGeometryContent(topic) {
    currentGeometryTopic = topic;
    const data = geometryTopicData[topic];
    
    // Update title
    document.getElementById('topicTitle').textContent = data.title;
    
    // Update image
    document.getElementById('demoImage').src = data.image;
    document.getElementById('demoImage').alt = data.title + " Demo";
    
    // Update why text
    document.getElementById('whyText').textContent = data.why;
    
    // Update explanation text
    document.getElementById('explanationText').textContent = data.explanation;
    
    // Update video links
    const videoLinksContainer = document.getElementById('videoLinks');
    videoLinksContainer.innerHTML = '';
    data.videos.forEach(video => {
        const link = document.createElement('a');
        link.href = video.url;
        link.target = "_blank";
        link.textContent = video.title;
        videoLinksContainer.appendChild(link);
    });
    
    // Restart quiz for new topic
    initGeometryQuiz();
}

// Initialize geometry event listeners
function initGeometryEventListeners() {
    // Get all topic list items
    const topicItems = document.querySelectorAll('#topicList li');
    
    // Add click event to each topic
    topicItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            topicItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get the topic key
            const topic = this.getAttribute('data-topic');
            
            // Update content
            updateGeometryContent(topic);
        });
    });
    
    // Search functionality (dummy for now)
    document.getElementById('searchBar').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        console.log('Searching for:', searchTerm);
    });
}

// Initialize on page load
window.onload = function() {
    initGeometryEventListeners();
    initGeometryQuiz();
};
