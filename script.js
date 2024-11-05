let displayValue = "";
let firstNum = "";
let operator = "";
let secondNum = "";
const maxLength = 10;
let displayElement = document.querySelector(".display");

document.querySelector(".buttons-container").addEventListener("click", (event) => {
    const id = event.target.id;
    if (!isNaN(id)) {
        if (displayValue.length < maxLength) {  // Only update if within max length
            displayValue += id;
            displayElement.textContent = displayValue;
        }
    }
    else if (["+", "-", "*", "/"].includes(id)) {
        firstNum = displayValue;
        operator = id;
        displayValue = "";
    }
    else if (id === "=") {
        secondNum = displayValue;
        if (operator === '/' && secondNum === "0") {
            displayElement.textContent = "You can't divide by zero!";
            return; // Prevent further calculations
        }
        const result = operate(Number(firstNum), operator, Number(secondNum));
        displayElement.textContent = result;
        displayValue = result.toString();
        firstNum = "";
        operator = "";

    }
    else if (id === "C") {
        displayValue = "";
        firstNum = " ";
        operator = "";
        secondNum = " ";
        displayElement.textContent = "0";
    }


});
const buttons = document.querySelectorAll(".buttons-container button");

buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#00CED1"; // Change background color on hover
        button.style.color = "white"; // Change text color on hover
    });

    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = ""; // Reset background color
        button.style.color = ""; // Reset text color
    });
});





const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};
const multiply = function (a, b) {
    return a * b;
};
const divide = function (a, b) {
    return a / b;
};
const operate = function (num1, op, num2) {
    if (op === '+') {
        return add(num1, num2);
    }
    else if (op === '-') {
        return subtract(num1, num2);
    }
    else if (op === '*') {
        return multiply(num1, num2);
    }
    else if (op === '/') {
        return divide(num1, num2);
    }
    else {
        return "invalid operator";
    }

};
