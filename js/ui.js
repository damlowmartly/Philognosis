// UI Logic and Event Handlers

// Function to update content based on selected topic
function updateContent(topic) {
    currentTopic = topic;
    const data = topicData[topic];
    
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
    initQuiz();
}

// Initialize event listeners
function initEventListeners() {
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
            updateContent(topic);
        });
    });
    
    // Search functionality (dummy for now)
    document.getElementById('searchBar').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        // You can implement search functionality here later
        console.log('Searching for:', searchTerm);
    });
}

// Initialize on page load
window.onload = function() {
    initEventListeners();
    initQuiz();
};
