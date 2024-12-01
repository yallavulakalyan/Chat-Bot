// Function to open the chat container
function openChat() {
    document.getElementById('chat-container').style.display = 'block';
    document.getElementById('chat-icon').style.display = 'none';  // Hide the icon after opening the chat
}

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== "") {
        // Add user message to chat box
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = userInput;
        document.getElementById('chat-box').appendChild(userMessage);

        // Scroll to the bottom of the chat box
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;

        // Clear the input field
        document.getElementById('user-input').value = '';

        // Simulate a bot response after a short delay
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot-message');

            // Simple bot responses
            if (userInput.toLowerCase().includes("hello") || userInput.toLowerCase().includes("hi")) {
                botMessage.textContent = "Hello! How can I assist you today?";
            } else if (userInput.toLowerCase().includes("how are you")) {
                botMessage.textContent = "I'm just a bot, but I'm doing great! How about you?";
            } else if (userInput.toLowerCase().includes("your name")) {
                botMessage.textContent = "I am your friendly chatbot!";
            } else {
                botMessage.textContent = "Sorry, I didn't understand that. Can you ask something else?";
            }

            document.getElementById('chat-box').appendChild(botMessage);
            document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
        }, 1000);
    }
}

// To submit when pressing "Enter"
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
