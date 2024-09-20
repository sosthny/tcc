// Validação do formulário de login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const username = document.getElementById('username')?.value;
    const password = document.getElementById('password')?.value;
    const messageElement = document.getElementById('message');

    if (username === '' || password === '') {
        messageElement.textContent = 'Por favor, preencha todos os campos.';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Login realizado com sucesso!';
        messageElement.style.color = 'green';
        window.location.href = 'home.html'; // Redireciona para home.html
    }
});

// Validação do formulário de registro
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const newUsername = document.getElementById('newUsername')?.value;
    const email = document.getElementById('email')?.value;
    const newPassword = document.getElementById('newPassword')?.value;
    const registerMessageElement = document.getElementById('registerMessage');

    if (newUsername === '' || email === '' || newPassword === '') {
        registerMessageElement.textContent = 'Por favor, preencha todos os campos.';
        registerMessageElement.style.color = 'red';
    } else {
        registerMessageElement.textContent = 'Registro realizado com sucesso!';
        registerMessageElement.style.color = 'green';
        window.location.href = 'home.html'; // Redireciona para home.html
    }
});
