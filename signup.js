const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error-msg');
const successMsg = document.getElementById('success-msg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  errorMsg.textContent = '';
  successMsg.textContent = '';

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if(!name || !email || !password ){
    errorMsg.textContent = 'All fields are required';
    return;
  }

  try{
    const response = await fetch('https://login-authentication-using-node-js-with.onrender.com/auth/signup',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name,
        email,
        password
      }),
    });

    const data = await response.json();

    if(!response.ok){
      errorMsg.textContent = data.message;
      return;
    }
    successMsg.textContent = data.message;

    form.reset();

    setTimeout(() =>{
      window.location.replace('index.html');
    }, 300);

  }catch(error){
    errorMsg.textContent = 'Something went wrong. Please try again..';
    console.log(error);

  }

  // if (nameInput.value.trim() === '' ||
  //   emailInput.value.trim() === '' ||
  //   passwordInput.value.trim() === '') {

  //   errorMsg.textContent = 'All fields are required';
  //   return;

  // }

  // successMsg.textContent = 'Details are saved';


  // setTimeout(() => {
  //   window.location.replace('index.html');

  // }, 500);

});
