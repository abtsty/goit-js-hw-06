const targetInput = document.querySelector("#name-input");
const targetSpan = document.querySelector("#name-output");

targetInput.addEventListener("input", onInputChange);

function onInputChange(evt) {
    targetSpan.textContent = evt.currentTarget.value;
    if (evt.currentTarget.value.trim() === "") {
        targetSpan.textContent = "Anonymous";
    }
}
