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
    else{
        return "invalid operator";
    }

};
console.log(operate(5, '+', 5));