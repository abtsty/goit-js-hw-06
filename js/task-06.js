const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", unFocus);

const count = Number(textInput.attributes["data-length"].value);

function unFocus(event) {
    const inputValue = event.currentTarget.value.trim();
    inputValue.length === count
        ? (textInput.classList = "valid")
        : (textInput.classList = "invalid");
}
