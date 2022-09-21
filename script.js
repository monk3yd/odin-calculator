const display = document.querySelector("#display");
display.textContent = "0";

const buttons = document.querySelectorAll(".btn")
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        // pressed btn value
        let btnValue = e.target.textContent;
        console.log(`Press btn: ${btnValue}`);
        
        if (btnValue === "=") {
            // Inputted operation
            let chars = display.textContent
            console.log(`Display: ${chars}`);

            const allOperators = ["*", "/", "+", "-"];
            let operatorIndexes = [];
            
            // iterate over display looking for operators
            for (let i = 0; i < chars.length; i++) {
                // get all operators indexes
                if (allOperators.includes(chars[i])) {
                    operatorIndexes.push(i);
                }
            }
            console.log(operatorIndexes);

            let result = 0;
            for (let i = 0; i < operatorIndexes.length; i++) {

                // get all to left of operator
                let leftOperand = Number(chars.slice(0, operatorIndexes[0]));
                console.log(`Left Operand: ${leftOperand}`);

                // get all to right of operator until next operator
                let rightOperand = Number(chars.slice(operatorIndexes[0] + 1, operatorIndexes[1]))
                console.log(`Right Operand: ${rightOperand}`);
                
                // operate
                result = operate(chars[operatorIndexes[0]], leftOperand, rightOperand);
                
                if (i === operatorIndexes.length - 1) {
                    chars = chars.slice(operatorIndexes[1]);
                    console.log(`New Display: ${chars}`);
                    break;
                }
                // new display with new result
                chars = result + chars.slice(operatorIndexes[1]);
                console.log(`New Display: ${chars}`);
            }

            // Show result
            console.log(`Result: ${result}`)
            display.textContent = result;
            return;
        }

        // Clear btn reset display to 0
        if (btnValue === "AC") {
            display.textContent = "0";
            return;
        }

        // Can't add multiple 0 as init value on display
        if (btnValue === "0" && display.textContent.length === 1 && display.textContent === "0") {
            return;
        // Can't add more than one "." in display
        } else if (btnValue === "." && display.textContent.includes(".")) {
            return;
        // Replace init 0 in display for first entered num
        } else if (btnValue !== "0" && btnValue != "." && display.textContent === "0"){
            display.textContent = "";
        }
        display.textContent += btnValue;
    });
})

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
