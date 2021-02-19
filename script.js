const buttonContainer = document.querySelector("#button-container");

// Creates buttons on calculator
function initializeButtons() {
    for(let i = 0; i < 20; i++) {
        let newButton = document.createElement("div");
        newButton.classList.add("button");
        newButton.textContent = i;
        buttonContainer.appendChild(newButton);
    }
}





initializeButtons();
