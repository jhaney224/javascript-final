// Jacob Haney - 4/15/24
function addOneThruTenToNumber(number) {
    let additionString = "";
    const inputNumber = convertToNumber(number);

    for (let numberPart = 1; numberPart < 11; numberPart++) {
        additionString += displayResult("add", numberPart, inputNumber);
    }

    displayResultsForElementId("addition", additionString);
}

function subtractOneThruTenFromNumber(number) {
    let subtractionString = "";
    const inputNumber = convertToNumber(number);
    let numberPart = 1;

    while (numberPart < 11) {
        subtractionString += displayResult("subtract", numberPart, inputNumber);
        numberPart++;
    }

    displayResultsForElementId("subtraction", subtractionString);
}

function multiplyOneThruTenByNumber(number) {
    let multiplyString = "";
    const inputNumber = convertToNumber(number);
    let numberPart = 1;

    do {
        multiplyString += displayResult("multiply", numberPart, inputNumber);
        numberPart++;
    } while (numberPart < 11);

    displayResultsForElementId("multiplication", multiplyString);
}

function divideOneThruTenByNumber(number) {
    let divideString = "";
    const inputNumber = convertToNumber(number);

    for (let numberPart = 1; numberPart < 11; numberPart++) {
        divideString += displayResult("divide", numberPart, inputNumber);
    }

    displayResultsForElementId("division", divideString);
}

function calculate(event) {
    event.preventDefault();
    const input = convertToNumber(document.getElementById("num").value);

    addOneThruTenToNumber(input);
    subtractOneThruTenFromNumber(input);
    multiplyOneThruTenByNumber(input);
    divideOneThruTenByNumber(input);
}

function convertToNumber(string) {
    return Number(string);
}

function displayResult(operation, numberPart, input) {
    return numberPart + getOperationSign(operation) + input + " = " + getResult(operation, numberPart, input) + "\n";
}

function getOperationSign(operation) {
    switch (operation) {
        case "add": return " + ";
        case "subtract": return " - ";
        case "multiply": return " * ";
        case "divide": return " / ";
        default: return "Invalid operation";
    }
}

function getResult(operation, numberPart, input) {
    switch (operation) {
        case "add": return numberPart + input;
        case "subtract": return numberPart - input;
        case "multiply": return numberPart * input;
        case "divide": return (numberPart / input).toFixed(2);
        default: return "Invalid operation";
    }
}

function displayResultsForElementId(elementId, string) {
    document.getElementById(elementId).innerText = string;
}

// Calculate Button Click Event.
document.getElementById("calculate").addEventListener("click", calculate);
