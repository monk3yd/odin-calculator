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
        // pressed btn value
        let btnValue = e.target.textContent;
        console.log(btnValue);

        // Clear btn reset display to 0
        if (btnValue === "AC") {
            numbers.textContent = "0";
            return;
        }

        // Can't add multiple 0 as init value on display
        if (btnValue === "0" && numbers.textContent.length === 1 && numbers.textContent === "0") {
            return;
        // Can't add more than one "." in display
        } else if (btnValue === "." && numbers.textContent.includes(".")) {
            return;
        // Replace init 0 in display for first entered num
        } else if (btnValue !== "0" && btnValue != "." && numbers.textContent === "0"){
            numbers.textContent = "";
        }
        numbers.textContent += btnValue;
    });
})


