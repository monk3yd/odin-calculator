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

const display = document.querySelector("#display");
display.textContent = "0";

const buttons = document.querySelectorAll(".btn")
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        // pressed btn value
        let btnValue = e.target.textContent;
        console.log(btnValue);
        
        if (btnValue === "=") {
            // Inputted operation
            const chars = display.textContent
            console.log(chars);

            const allOperators = ["*", "/", "+", "-"];
            for (let operator of allOperators ) {
                // Check if operator exists in given string operation
                operatorExists = chars.indexOf(operator)
                console.log(`Operator ${operator} does exist? ${operatorExists}`);
                if (operatorExists === -1) {
                    continue;
                }
                // Get operator index - 1 and index + 1 for extracting operands
                let leftOperandIndex = operatorExists - 1;
                let rightOperandIndex = operatorExists + 1;

                let operandLeft = chars[leftOperandIndex];
                let operandRight = chars[rightOperandIndex];

                // Calculate operation result
                let result = operate(
                    operator,
                    Number(operandLeft),
                    Number(operandRight)
                )
                console.log(`Result: ${result}`)
            }

            // console.log(result);
            //
            // // Show result
            // display.textContent = result;
            // return;
            // };
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


