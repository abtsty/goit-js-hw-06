const fontControl = document.querySelector("#font-size-control");
const targetSpan = document.querySelector("#text");

fontControl.addEventListener("input", onInput);

function onInput(evt) {
    targetSpan.style.fontSize = `${evt.target.valueAsNumber}px`;
    // console.log(evt);
}
