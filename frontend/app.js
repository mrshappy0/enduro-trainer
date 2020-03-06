const signUpHamburger = document.getElementById("hamburgerToggler");
const welcomeMessage = document.querySelector(".text-white.h4");
const logOutButton = document.getElementById("logOutButton")
const welcomeBox =document.querySelector(".welcome-box")
const main = document.querySelector("main")

window.addEventListener("DOMContentLoaded", event => {
  hideLoginIfToken();
});

signUpHamburger.addEventListener("click", event => {
    if(main.classList.contains("hidden")){
        main.classList.remove("hidden")
    } else{
        main.classList.add("hidden")
    }
})

function checkIfLoggedIn() {
    return localStorage.getItem("token");
}

function hideLoginIfToken() {
    if (checkIfLoggedIn()) {
        userSignUpForm.classList.add("hidden");
        signUpHamburger.classList.add("hidden");
        logOutButton.classList.remove("hidden");
  }
}

const userSignUpForm = document.querySelector(".user-signup");
userSignUpForm.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const user = {
    username: formData.get("username1"),
    password: formData.get("password1")
  };

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then(response => response.json())
    .then(response => {
      localStorage.setItem("token", response.token);
      location.reload();
      userSignUpForm.classList.add("hidden");
    });
});

logOutButton.addEventListener("click", event => {
    console.log("hit")
    event.preventDefault();
    localStorage.removeItem("token");
    document.location.href="/";
})