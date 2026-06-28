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

    document.getElementById('username').textContent = user.name;

    document.getElementById("email").textContent = user.email;

  } catch (error) {
    console.log(error);
  }
}

loadUser();