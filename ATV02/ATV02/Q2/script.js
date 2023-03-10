const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (password === username) {
    errorMessage.textContent = 'A senha não pode ser igual ao nome de usuário.';
    passwordInput.value = '';
    passwordInput.focus();
  } else {
    errorMessage.textContent = '';
    // enviar dados do formulário
    form.submit();
  }
});
