

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? 'Error: Division by zero' : a / b;
const modulo = (a,b) => b === 0 ? undefined : a % b;

const ops = new Set(["*","+", "-", "/", "%"]);
const finalAnswer = document.getElementById('finalAnswer');
const inputDisplay = document.getElementById("currentInputDisplay");


function clearAll() {
    finalAnswer.value = "0";
    inputDisplay.value = "";
}

function deleteLastInput(){
    inputDisplay.value = inputDisplay.value.slice(0,inputDisplay.value.length-1); 
}

function selectNumber(input) {
    inputDisplay.value += input;
}

function selectOperator(op) {
    const input = inputDisplay.value;
    const size = input.length;

    if (size > 0) {

        if(!ops.has(input.charAt(size - 1))){
            inputDisplay.value += op;
        } else if (input.charAt(size - 1) !== op) {
            inputDisplay.value = input.substring(0, size-1) + op;
        }
    }  
}

function changeSignOfFinalAnswer() {
    finalAnswer.value = finalAnswer.value != 0 ? -1 * finalAnswer.value : 0;   
    inputDisplay.value = inputDisplay.value.length > 0 ? -1 * inputDisplay.value : 0;      
}

function selectDecimalPoint() {
    if (inputDisplay.value.charAt(inputDisplay.value.length - 1) !== "."){
        inputDisplay.value += ".";
    }
}

function calculate() {
    const expInputs = inputDisplay.value.match(/(?:(?<=^|[+\-*/%(])-)?\d+(?:\.\d+)?|[+\-*/%()]/g);
    console.log(expInputs);
    
    while (expInputs.length !== 1) {
        
        if (expInputs.indexOf("/") > -1) {
           
            const i = expInputs.indexOf("/");
            const a = Number(expInputs[i-1]);
            const b = Number(expInputs[i+1]);
            const ans = divide(a,b).toString();
            
            expInputs.splice(i+1,1);
            expInputs[i] = ans;
            expInputs.splice(i-1,1);

        } else if (expInputs.indexOf("*") > -1) {
           
            const i = expInputs.indexOf("*");
            const a = Number(expInputs[i-1]);
            const b = Number(expInputs[i+1]);
            const ans = multiply(a,b).toString();
            
            expInputs.splice(i+1,1);
            expInputs[i] = ans;
            expInputs.splice(i-1,1);
        
        } else if (expInputs.indexOf("+") > -1) {
           
            const i = expInputs.indexOf("+");
            const a = Number(expInputs[i-1]);
            const b = Number(expInputs[i+1]);
            const ans = add(a,b).toString();
            
            expInputs.splice(i+1,1);
            expInputs[i] = ans;
            expInputs.splice(i-1,1);

        } else if (expInputs.indexOf("-") > -1) {
           
            const i = expInputs.indexOf("-");
            const a = Number(expInputs[i-1]);
            const b = Number(expInputs[i+1]);
            const ans = subtract(a,b).toString();
            
            expInputs.splice(i+1,1);
            expInputs[i] = ans;
            expInputs.splice(i-1,1);
        
        } else {
           
            const i = expInputs.indexOf("%");
            const a = Number(expInputs[i-1]);
            const b = Number(expInputs[i+1]);
            const ans = modulo(a,b).toString();
            
            expInputs.splice(i+1,1);
            expInputs[i] = ans;
            expInputs.splice(i-1,1);
        }

    }

    console.log(expInputs);
    finalAnswer.value = expInputs.at(0);
    inputDisplay.value = expInputs.at(0);
}