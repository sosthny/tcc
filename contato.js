document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const backButton = document.getElementById('back-button');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');
        successMessage.textContent = 'Enviando...';

        setTimeout(() => {
            successMessage.textContent = 'Sua mensagem foi enviada com sucesso!';
        }, 2000);
    });

    backButton.addEventListener('click', () => {
        window.history.back();
    });
});
