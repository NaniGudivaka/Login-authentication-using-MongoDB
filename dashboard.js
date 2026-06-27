const user = JSON.parse(localStorage.getItem('loggedInUser'));

if (user) {
  document.getElementById("email").textContent = user.email;
}