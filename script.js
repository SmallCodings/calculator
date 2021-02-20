//TODO
//add comma and make sure user cant add more than one per storage
//fix a bug where adding an operator followed immediately by an = causes a crash

const buttonContainer = document.querySelector("#button-container");
const windowBox = document.querySelector("#text-box");
let previousStorage = [];
let currentStorage = "";

// Creates buttons on calculator
function initializeButtons() {
    let buttonTextArray = ["^2", "sq2", "C", "<=", "1", "2", "3", "/", "4", "5", "6", "x", "7", "8", "9", "-", "0", ".", "=", "+"];
    for(let i = 0; i < 20; i++) {
        let newButton = document.createElement("div");
        newButton.classList.add("button");
        newButton.textContent = buttonTextArray[i];
        buttonContainer.appendChild(newButton);
    }
}

// Allow buttons to be clicked on
function activateButtons() {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (parseInt(button.textContent) || button.textContent == 0) {
                addNumbers(button);
            }
            else if (button.textContent == "=") {
                if (previousStorage.length > 1) {
                    calculate(button.textContent);
                }
            }
            else if (isOperator(button.textContent)) {
                storeNumber(button.textContent);
            }
            else if (isRemover(button.textContent)) {
                if (currentStorage.length != 0) {
                    removeNumber(button.textContent);
                }
                else if (button.textContent == "C" && previousStorage.length > 0) {
                    removeNumber(button.textContent);
                }
            }
        });
    });
}

// Adds a number to the calc storage
function addNumbers(button) {
    currentStorage += button.textContent;
    updateNumbers();
}

// Updates the calc window with storage number
function updateNumbers() {
    windowBox.textContent = currentStorage;
}

// Checks to see if the button pressed is an operator sign (+ - * /)
function isOperator(button) {
    if (button == "+" || button == "-" || button == "x" || button == "/") {
        return true;
    }
    return false;
}

//Checks to see if the button pressed is the backspace or clear buttons
function isRemover(button) {
    if (button == "<=" || button == "C") {
        return true;
    }
    return false;
}

// Removes numbers from the storage and updates window
function removeNumber(button) {
    if (button == "C") {
        currentStorage = "";
        previousStorage.length = 0;
    }
    else {
        currentStorage = currentStorage.slice(0, -1);
    }
    updateNumbers();
}

// Stores the current storage into the array previousStorage
function storeNumber(button) {
    previousStorage.push(currentStorage);
    if (button == "x") {
        previousStorage.push("*");
    }
    else if (button != "=") {
        previousStorage.push(button);
    }
    currentStorage = "";
    updateNumbers();
}

// Calculate equation
function calculate(button) {
    storeNumber(button);
    let equation = "";
    for (let i = 0; i < previousStorage.length; i++) {
        equation += previousStorage[i];
    }
    previousStorage.length = 0;
    currentStorage = eval(equation);
    updateNumbers();
}

// Sets up calculator
function initializeCalculator() {
    initializeButtons();
    activateButtons();
}

initializeCalculator();


