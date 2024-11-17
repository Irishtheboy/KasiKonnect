function toggleChatbot() {
    const chatbotModal = document.getElementById('chatbot-modal');
    chatbotModal.style.display = chatbotModal.style.display === 'block' ? 'none' : 'block';
}

function closeChatbot() {
    const chatbotModal = document.getElementById('chatbot-modal');
    chatbotModal.style.display = 'none';
}

