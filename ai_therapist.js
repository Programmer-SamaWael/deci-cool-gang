const sendButton = document.getElementById('send-btn');
const messageInput = document.getElementById('message-input');
const chatBox = document.getElementById('chat-box');

const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your OpenAI API key

sendButton.addEventListener('click', async () => {
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        appendMessage('user', messageText);
        messageInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo', // or another model you are using
                    messages: [{ role: 'user', content: messageText }]
                })
            });

            const data = await response.json();
            const reply = data.choices[0].message.content;
            appendMessage('ai', reply);
            chatBox.scrollTop = chatBox.scrollHeight;
        } catch (error) {
            console.error('Error:', error);
        }
    }
});

function appendMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const avatarElement = document.createElement('div');
    avatarElement.classList.add('avatar');

    const messageContentElement = document.createElement('div');
    messageContentElement.classList.add('message-content');
    messageContentElement.textContent = text;

    messageElement.appendChild(avatarElement);
    messageElement.appendChild(messageContentElement);
    chatBox.appendChild(messageElement);
}
