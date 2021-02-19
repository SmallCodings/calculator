//TODO
//add comma and make sure user cant add more than one per storage

const buttonContainer = document.querySelector("#button-container");
const windowBox = document.querySelector("#text-box");
let previousStorage = "";
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
                alert("EQUAL");
            }
            else if (isOperator(button.textContent)) {
                alert("OPERATOR");
            }
            else if (isRemover(button.textContent)) {
                if (currentStorage.length != 0) {
                    currentStorage = currentStorage.slice(0, -1);
                    updateNumbers();
                    alert("REMOVER");
                }
            }
        });
    });
}

// Adds a number to the calc window
function addNumbers(button) {
    currentStorage += button.textContent;
    updateNumbers();
}

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

// Sets up calculator
function initializeCalculator() {
    initializeButtons();
    activateButtons();
}

initializeCalculator();


