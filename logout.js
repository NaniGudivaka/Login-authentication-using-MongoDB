

const btn = document.querySelector('.btn-js');

btn.addEventListener('click', (e)=>{
  e.preventDefault();
  console.log('clicked');

  localStorage.removeItem('loggedInUser');

  window.location.replace('index.html');

});