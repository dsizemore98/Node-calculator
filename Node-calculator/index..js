const rs = require('readline-sync');


const validOperations = ["+", "-", "*", "/"];


function getOperation() {
    while (true) {
        let input = rs.question("What operation would you like to perform? (+, -, *, /): ");
        if (validOperations.includes(input)) {
            return input;
        } else {
            console.log("That is not a valid operation");
        }
    }
}


function getNumber(promptText) {
    while (true) {
        let input = rs.question(promptText);
        let number = Number(input);
        if (!isNaN(number)) {
            return number;
        } else {
            console.log("This is not a number");
        }
    }
}


function calculate(operation, num1, num2) {
    if (operation === "+") return num1 + num2;
    if (operation === "-") return num1 - num2;
    if (operation === "*") return num1 * num2;
    if (operation === "/") {
        if (num2 === 0) {
            console.log("Error: Cannot divide by zero");
            return null;
        }
        return num1 / num2;
    }
}


const operation = getOperation();
const num1 = getNumber("Please enter the first number: ");
const num2 = getNumber("Please enter the second number: ");

const result = calculate(operation, num1, num2);

if (result !== null) {
    console.log("The result is: " + result);
}
