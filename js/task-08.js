const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;
    const allUserData = {
        email: emailInput.value,
        password: passwordInput.value,
    };

    if (emailInput.value === "" || passwordInput.value === "") {
        alert("All inputs must be completed!");
        return;
    }
    console.log(allUserData);
    loginForm.reset();
});
