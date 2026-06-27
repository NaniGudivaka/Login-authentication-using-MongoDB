const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error-msg');
const successMsg = document.getElementById('success-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  errorMsg.textContent = '';
  successMsg.textContent = '';

  if (nameInput.value.trim() === '' ||
    emailInput.value.trim() === '' ||
    passwordInput.value.trim() === '') {

    errorMsg.textContent = 'All fields are required';
    return;

  }

  successMsg.textContent = 'Details are saved';


  setTimeout(() => {
    window.location.replace('index.html');

  }, 500);

});
