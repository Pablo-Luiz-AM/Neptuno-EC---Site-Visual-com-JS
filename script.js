// Função para verificar o login
function fazerLogin() {
    // Obtenha os dados do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifique os dados salvos (pode ser do localStorage ou de um servidor)
    if (verificarLogin(username, password)) {
        // Redirecione para a página desejada após o login bem-sucedido
        window.location.href = 'bem_vindo.html';
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
}

// Função para verificar o cadastro
function cadastrar() {
    // Obtenha os dados do formulário
    const newUsername = document.getElementById('newUsername').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;

    // Salve os dados do cadastro (pode ser no localStorage ou em um servidor)
    salvarCadastro(newUsername, newEmail, newPassword);

    // Redirecione para a página de login após o cadastro bem-sucedido
    window.location.href = 'login.html';
}

// Função para verificar o login (simulada)
function verificarLogin(username, password) {
    // Aqui você deve implementar a lógica real de verificação, por exemplo, consultando um banco de dados
    // Neste exemplo, verifica se os dados correspondem a um usuário fictício
    const usuarioFicticio = { username: 'usuario', password: 'senha' };
    return username === usuarioFicticio.username && password === usuarioFicticio.password;
}

// Função para salvar o cadastro (simulada)
function salvarCadastro(username, email, password) {
    // Aqui você deve implementar a lógica real de salvamento, por exemplo, armazenando em um banco de dados
    // Neste exemplo, armazena os dados no localStorage
    const cadastro = { username, email, password };
    localStorage.setItem('cadastro', JSON.stringify(cadastro));
}