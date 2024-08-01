JavaScript (script.js):
document.addEventListener("DOMContentLoaded", function() {
    const chatOutput = document.getElementById("chat-output");
    const userInput = document.getElementById("user-input");

    const responses = {
        "hello": "Hello! How can I help you today?",
        "how are you": "I'm just a bot, but I'm here to assist you!",
        "what is your name": "I'm your personal chatbot!",
        "default": "I'm sorry, I don't understand that."
    };

    function sendMessage() {
        const message = userInput.value.trim().toLowerCase();
        if (message) {
            appendMessage("You: " + message);
            const response = responses[message] || responses["default"];
            appendMessage("Bot: " + response);
            userInput.value = "";
        }
    }

    function appendMessage(text) {
        const messageElement = document.createElement("div");
        messageElement.textContent = text;
        chatOutput.appendChild(messageElement);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }

    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
