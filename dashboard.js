const userName = document.getElementById('username');
const userEmail = document.getElementById("email");


async function loadUser() {
  try {
    const response = await fetch(
      "https://login-authentication-using-node-js-with.onrender.com/auth/me",
      {
        credentials: "include",
      }
    );

    if (!response.ok) {
      window.location.replace("index.html");
      return;
    }

    const user = await response.json();

    console.log(user);

    userName.textContent = user.name;

    userEmail.textContent = user.email;

  } catch (error) {
    console.log(error);
  }
}

loadUser();