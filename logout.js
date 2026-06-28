const btn = document.querySelector(".btn-js");

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://login-authentication-using-node-js-with.onrender.com/auth/logout", {
      method: "POST",
      credentials: "include"
    });

    const data = await response.json();
    console.log(data);

    localStorage.removeItem("loggedInUser");

    window.location.replace("index.html");
  } catch (err) {
    console.error("Logout failed:", err);
  }
});