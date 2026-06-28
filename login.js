const form = document.querySelector('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorMsg = document.getElementById('error-msg');


//Dummy users dor checking 
// const users =[  {
//     email: "admin@gmail.com",
//     password: "admin123"
//   },
//   {
//     email: "john@gmail.com",
//     password: "john123"
//   },
//   {
//     email: "nani@gmail.com",
//     password: "nani123"
//   }]

form.addEventListener('submit', async (e) =>{
  e.preventDefault();

  errorMsg.textContent = '';

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if(!emailValue || !passwordValue){
    errorMsg.textContent = 'All fields are required';
    return;
  }
  try{

    const response = await fetch('https://login-authentication-using-node-js-with.onrender.com/auth/login',{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
      },
      credentials:'include',
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue
      }),
    }
  );

  const data = await response.json();

  if(!response.ok){
    errorMsg.textContent = data.message;
    password.value = '';
    return;
  }

    window.location.replace('dashboard.html');

  }catch(error){

    errorMsg.textContent = 'Something went wrong, PLease tey again';
    console.log(error);

  }
  

//   if(email.value.trim() === '' ||
// password.value.trim() === ''){
//     alert("Please fill the all fields");
//     return;
//   }

//   const loggedInUser = users.find((u) =>
//     u.email === email.value.trim() &&
//     u.password === password.value.trim()
//   );
//   if(!loggedInUser){
//     errorMsg.textContent = 'Invalid email or password';
//     return;
//   }

//   localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

  
//   window.location.href= 'dashboard.html';

});