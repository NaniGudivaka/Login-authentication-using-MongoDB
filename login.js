const form = document.querySelector('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorMsg = document.getElementById('error-msg');


//Dummy users dor checking 
const users =[  {
    email: "admin@gmail.com",
    password: "admin123"
  },
  {
    email: "john@gmail.com",
    password: "john123"
  },
  {
    email: "nani@gmail.com",
    password: "nani123"
  }]

form.addEventListener('submit', (e) =>{
  e.preventDefault();

  errorMsg.textContent = '';
  

  if(email.value.trim() === '' ||
password.value.trim() === ''){
    alert("Please fill the all fields");
    return;
  }

  const loggedInUser = users.find((u) =>
    u.email === email.value.trim() &&
    u.password === password.value.trim()
  );
  if(!loggedInUser){
    errorMsg.textContent = 'Invalid email or password';
    return;
  }

  localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

  
  window.location.href= 'dashboard.html';

});