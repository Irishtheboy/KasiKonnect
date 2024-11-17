// Function to toggle the chatbot visibility
function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.style.display = (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') ? 'block' : 'none';
}

// Function to send a message
function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    if (message) {
        const messagesContainer = document.querySelector('.chatbot-messages');
        const newMessage = document.createElement('div');
        newMessage.classList.add('chat-message');
        newMessage.textContent = message;
        messagesContainer.appendChild(newMessage);
        chatInput.value = ''; // Clear the input field
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
    }
}

// Optionally, you can add chatbot responses using setTimeout or a response API
