const resultDisplay = document.getElementById("result");
const expressionDisplay = document.getElementById("expression");
const errorMessage = document.getElementById("errorMessage");
const historyList = document.getElementById("historyList");
const buttons = document.querySelector(".buttons");


let currentValue = "0";
let previousValue = null;
let currentOperator = null;
let waitingForValue = false;

let calculationHistory = [];


// -----------------------------
// Display
// -----------------------------

function updateDisplay() {

    resultDisplay.textContent = currentValue;

    if (previousValue !== null && currentOperator !== null) {

        expressionDisplay.textContent =
            `${previousValue} ${getOperatorSymbol(currentOperator)}`;

    } else {

        expressionDisplay.textContent = "";
    }
}


// -----------------------------
// Operator Symbol
// -----------------------------

function getOperatorSymbol(operator) {

    if (operator === "*") {
        return "×";
    }

    if (operator === "/") {
        return "÷";
    }

    return operator;
}


// -----------------------------
// Number Input
// -----------------------------

function enterNumber(number) {

    if (waitingForValue) {

        currentValue = number;

        waitingForValue = false;

    } else {

        if (currentValue === "0") {

            currentValue = number;

        } else {

            currentValue += number;
        }
    }

    updateDisplay();
}


// -----------------------------
// Decimal
// -----------------------------

function enterDecimal() {

    if (waitingForValue) {

        currentValue = "0.";

        waitingForValue = false;

    } else if (!currentValue.includes(".")) {

        currentValue += ".";
    }

    updateDisplay();
}


// -----------------------------
// Operator
// -----------------------------

function selectOperator(operator) {

    const number = Number(currentValue);

    if (!Number.isFinite(number)) {

        showError("Invalid number");

        return;
    }


    if (currentOperator !== null && !waitingForValue) {

        calculate();
    }


    previousValue = Number(currentValue);

    currentOperator = operator;

    waitingForValue = true;

    updateDisplay();
}


// -----------------------------
// Calculate
// -----------------------------

function calculate() {

    if (
        previousValue === null ||
        currentOperator === null
    ) {
        return;
    }


    const firstNumber = Number(previousValue);
    const secondNumber = Number(currentValue);

    let result;


    try {

        if (
            !Number.isFinite(firstNumber) ||
            !Number.isFinite(secondNumber)
        ) {

            throw new Error("Invalid number");
        }


        if (
            currentOperator === "/" &&
            secondNumber === 0
        ) {

            throw new Error("Cannot divide by zero");
        }


        switch (currentOperator) {

            case "+":

                result = firstNumber + secondNumber;

                break;


            case "-":

                result = firstNumber - secondNumber;

                break;


            case "*":

                result = firstNumber * secondNumber;

                break;


            case "/":

                result = firstNumber / secondNumber;

                break;


            default:

                throw new Error("Invalid operator");
        }


        if (!Number.isFinite(result)) {

            throw new Error("Invalid calculation result");
        }


        result = Number(
            result.toPrecision(12)
        );


        const expression =
            `${firstNumber} ${getOperatorSymbol(currentOperator)} ${secondNumber}`;


        addHistory(expression, result);


        currentValue = String(result);

        previousValue = null;

        currentOperator = null;

        waitingForValue = true;

        updateDisplay();


    } catch (error) {

        showError(error.message);
    }
}


// -----------------------------
// Clear
// -----------------------------

function clearCalculator() {

    currentValue = "0";

    previousValue = null;

    currentOperator = null;

    waitingForValue = false;

    errorMessage.textContent = "";

    updateDisplay();
}


// -----------------------------
// Positive / Negative
// -----------------------------

function toggleSign() {

    if (currentValue === "0") {
        return;
    }


    if (currentValue.startsWith("-")) {

        currentValue = currentValue.slice(1);

    } else {

        currentValue = "-" + currentValue;
    }


    updateDisplay();
}


// -----------------------------
// Percentage
// -----------------------------

function calculatePercentage() {

    const number = Number(currentValue);


    if (!Number.isFinite(number)) {

        showError("Invalid number");

        return;
    }


    currentValue = String(number / 100);

    updateDisplay();
}


// -----------------------------
// Backspace
// -----------------------------

function deleteLastNumber() {

    if (waitingForValue) {
        return;
    }


    if (currentValue.length === 1) {

        currentValue = "0";

    } else {

        currentValue = currentValue.slice(0, -1);
    }


    if (currentValue === "-") {

        currentValue = "0";
    }


    updateDisplay();
}


// -----------------------------
// History
// -----------------------------

function addHistory(expression, result) {

    calculationHistory.unshift({
        expression: expression,
        result: result
    });


    calculationHistory =
        calculationHistory.slice(0, 10);


    displayHistory();
}


function displayHistory() {

    historyList.innerHTML = "";


    if (calculationHistory.length === 0) {

        historyList.textContent =
            "No calculations yet.";

        return;
    }


    calculationHistory.forEach(function (item) {

        const historyItem =
            document.createElement("div");

        historyItem.className =
            "history-item";


        const expression =
            document.createElement("span");

        expression.textContent =
            item.expression;


        const answer =
            document.createElement("span");

        answer.className =
            "history-answer";

        answer.textContent =
            item.result;


        historyItem.appendChild(expression);

        historyItem.appendChild(answer);

        historyList.appendChild(historyItem);
    });
}


// -----------------------------
// Error Handling
// -----------------------------

function showError(message) {

    errorMessage.textContent = message;


    setTimeout(function () {

        errorMessage.textContent = "";

    }, 2000);
}


// -----------------------------
// Event Delegation
// -----------------------------

buttons.addEventListener("click", function (event) {

    const button = event.target.closest("button");


    if (!button) {
        return;
    }


    // Number

    if (button.dataset.number !== undefined) {

        enterNumber(
            button.dataset.number
        );

        return;
    }


    // Operator

    if (button.dataset.operator) {

        selectOperator(
            button.dataset.operator
        );

        return;
    }


    // Other actions

    const action = button.dataset.action;


    switch (action) {

        case "clear":

            clearCalculator();

            break;


        case "sign":

            toggleSign();

            break;


        case "percent":

            calculatePercentage();

            break;


        case "decimal":

            enterDecimal();

            break;


        case "backspace":

            deleteLastNumber();

            break;


        case "equals":

            calculate();

            break;
    }
});


// -----------------------------
// Keyboard Support
// -----------------------------

document.addEventListener("keydown", function (event) {

    const key = event.key;


    // Numbers

    if (/^[0-9]$/.test(key)) {

        enterNumber(key);

        return;
    }


    // Decimal

    if (key === ".") {

        enterDecimal();

        return;
    }


    // Operators

    if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/"
    ) {

        selectOperator(key);

        return;
    }


    // Enter

    if (
        key === "Enter" ||
        key === "="
    ) {

        calculate();

        return;
    }


    // Escape

    if (key === "Escape") {

        clearCalculator();

        return;
    }


    // Backspace

    if (key === "Backspace") {

        deleteLastNumber();

        return;
    }


    // Percentage

    if (key === "%") {

        calculatePercentage();

        return;
    }
});


// Initial display

updateDisplay();