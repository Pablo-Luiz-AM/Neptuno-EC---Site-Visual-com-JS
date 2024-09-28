function sendMessage() {
    const userMessage = document.getElementById('user-message').value;

    if (userMessage.trim() !== '') {
        // Adicione a mensagem do usuário ao chat
        appendMessage('user', userMessage);

        // Limpe o campo de entrada do usuário
        document.getElementById('user-message').value = '';

        // Simule uma resposta do ChatBot (você precisará de um ChatBot real aqui)
        const botResponse = "O ChatBot acadêmico responderia aqui.";
        setTimeout(() => {
            appendMessage('bot', botResponse);
        }, 500);
    }
}

function appendMessage(sender, message) {
    const chatContainer = document.getElementById('chat');
    const messageElement = document.createElement('div');
    messageElement.className = sender;

    const senderText = sender === 'user' ? 'Você:' : 'ChatBot:';
    messageElement.innerHTML = `<strong>${senderText}</strong> ${message}`;

    chatContainer.appendChild(messageElement);

    // Rola o chat para exibir a última mensagem
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function submitFeedback() {
    const feedbackText = document.getElementById('feedbackText').value;

    if (feedbackText.trim() !== "") {
        // Recupera feedbacks anteriores do localStorage ou cria uma lista vazia
        const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

        // Adiciona o novo feedback à lista
        feedbacks.push(feedbackText);

        // Salva a lista atualizada de feedbacks no localStorage
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

        // Atualiza a exibição dos feedbacks
        updateFeedbackList();

        // Limpa o campo de texto
        document.getElementById('feedbackText').value = "";
    } else {
        alert("Por favor, insira um feedback antes de enviar.");
    }
}

function updateFeedbackList() {
    const feedbackListContainer = document.getElementById('feedbackList');
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

    // Limpa a lista existente
    feedbackListContainer.innerHTML = '';

    // Adiciona cada feedback à lista
    feedbacks.forEach((feedback, index) => {
        const feedbackItem = document.createElement('div');
        feedbackItem.className = 'user-feedback';
        feedbackItem.textContent = `Feedback #${index + 1}: ${feedback}`;
        feedbackListContainer.appendChild(feedbackItem);
    });
}

// Atualiza a lista de feedbacks ao carregar a página
updateFeedbackList();