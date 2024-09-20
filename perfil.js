document.addEventListener('DOMContentLoaded', function() {
    const changeAvatarBtn = document.getElementById('change-avatar-btn');
    const avatarModal = document.getElementById('avatar-modal');
    const closeAvatarModal = document.getElementById('close-avatar-modal');
    const uploadBtn = document.getElementById('upload-btn');
    const avatarUpload = document.getElementById('avatar-upload');
    const profileForm = document.getElementById('profile-form');
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');

    changeAvatarBtn.addEventListener('click', () => {
        avatarModal.style.display = 'flex';
    });

    closeAvatarModal.addEventListener('click', () => {
        avatarModal.style.display = 'none';
    });

    uploadBtn.addEventListener('click', () => {
        const file = avatarUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profile-avatar').src = e.target.result;
                avatarModal.style.display = 'none';
                showNotification('Avatar atualizado com sucesso!');
            };
            reader.readAsDataURL(file);
        }
    });

    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newPassword !== confirmPassword) {
            showNotification('As novas senhas não correspondem!', 'error');
            return;
        }

        if (currentPassword === '') {
            showNotification('Digite sua senha atual para atualizar as informações.', 'error');
            return;
        }

        // Simula envio de dados
        showNotification('Informações atualizadas com sucesso!');
    });

    function showNotification(message, type = 'success') {
        notificationMessage.innerText = message;
        notification.className = `notification ${type} show`;
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000); // Notificação desaparece após 3 segundos
    }
});
