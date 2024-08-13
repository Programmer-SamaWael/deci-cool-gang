document.addEventListener('DOMContentLoaded', function() {
    // Handle message sending
    document.getElementById('send-btn').addEventListener('click', function() {
        const messageInput = document.getElementById('message-input');
        const messageText = messageInput.value.trim();

        if (messageText !== "") {
            const chatContainer = document.querySelector('.chat-container');

            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'user');
            
            const avatarElement = document.createElement('div');
            avatarElement.classList.add('avatar');
            
            const messageContentElement = document.createElement('div');
            messageContentElement.classList.add('message-content');
            messageContentElement.textContent = messageText;

            messageElement.appendChild(avatarElement);
            messageElement.appendChild(messageContentElement);
            chatContainer.appendChild(messageElement);

            messageInput.value = "";
            chatContainer.scrollTop = chatContainer.scrollHeight; // Auto-scroll to the bottom
        }
    });

    // Example function to simulate receiving messages
    function receiveMessage(text) {
        const chatContainer = document.querySelector('.chat-container');

        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'system');
        
        const messageContentElement = document.createElement('div');
        messageContentElement.classList.add('message-content');
        messageContentElement.textContent = text;

        messageElement.appendChild(messageContentElement);
        chatContainer.appendChild(messageElement);

        chatContainer.scrollTop = chatContainer.scrollHeight; // Auto-scroll to the bottom
    }

    // Simulate receiving a welcome message
    receiveMessage("Welcome to the community chat!");
});
