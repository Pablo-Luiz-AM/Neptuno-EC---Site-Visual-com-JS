function cadastrar() {
    const newUsernameInput = document.getElementById('newUsername');
    const newPasswordInput = document.getElementById('newPassword');

    const newUsername = newUsernameInput.value;
    const newPassword = newPasswordInput.value;

    // Verifica se o usuário já existe no localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se o novo usuário já existe
    const userExists = existingUsers.some(user => user.username === newUsername);

    if (userExists) {
        alert('Usuário já existe. Escolha outro nome de usuário.');
        return;
    }

    // Adiciona o novo usuário à lista existente
    existingUsers.push({ username: newUsername, password: newPassword });

    // Salva a lista atualizada no localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Cadastro realizado com sucesso!');
}