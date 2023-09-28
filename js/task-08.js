const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value === "" || passwordInput.value === "") {
        alert("All inputs must be completed!");
        return;
    }

    loginForm.reset();
});
