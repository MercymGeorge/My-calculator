function appendToDisplay(value) {
    const display = document.querySelector("#display");
    display.value += value;
}

function clearDisplay() {
    const display = document.querySelector("#display");
    display.value = "";
}

function calculate() {
    const display = document.querySelector("#display");
    const expression = display.value;
    
   
    const invalidCharacters = expression.match(/[^\d\s+\-×÷]/g);
    if (invalidCharacters !== null) {
        display.value = "Error";
        return;
    }
    
    
    const formattedExpression = expression.replace(/×/g, "*").replace(/÷/g, "/");
    
    const result = evaluateExpression(formattedExpression);
    display.value = result !== null ? result : "Error";
}

function evaluateExpression(expr) {
    const safeEval = new Function('return ' + expr);
    return safeEval();
}

