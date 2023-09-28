const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const plusBtn = document.querySelector('button[data-action="increment"]');
// console.log(plusBtn);

const minusBtn = document.querySelector('button[data-action="decrement"]');
// console.log(minusBtn);

const counterValue = document.querySelector("#value");

plusBtn.addEventListener("click", function () {
    counter.increment();
    // console.log(counter);
    counterValue.textContent = counter.value;
});

minusBtn.addEventListener("click", function () {
    counter.decrement();
    // console.log(counter);
    counterValue.textContent = counter.value;
});
