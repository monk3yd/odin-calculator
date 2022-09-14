function add(...args) {
    let total = args.reduce((a, b) => a + b);
    return total;
};

function substract(...args) {
    let total = args.reduce((a, b) => a - b);
    return total;
};

function multiply(...args) {
    let total = args.reduce((a,b) => a * b);
    return total;
};

function divide(...args) {
    let total = args.reduce((a, b) => a / b);
    return total;
};

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return substract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
};

const numbers = document.querySelector("#numbers");
numbers.textContent = "0";
const buttons = document.querySelectorAll(".btn")
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let btnValue = e.target.textContent;
        if (btnValue === "AC") {
            numbers.textContent = "0";
            return;
        }

        if (numbers.textContent.length === 1 && numbers.textContent === "0") {
            numbers.textContent = "";
        }
        numbers.textContent += btnValue;
    });
})


