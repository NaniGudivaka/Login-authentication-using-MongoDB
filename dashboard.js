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

    const data = await response.json();

    console.log(data);

    userName.textContent = data.user.name;

    userEmail.textContent = data.user.email;

  } catch (error) {
    console.log(error);
  }
}

loadUser();