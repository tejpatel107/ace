// Task 16 - Parse and Evaluate a Simple Expression

// Redo

function calculate(exp) {
    const expInputs = exp.match(/(?:(?<=^|[+\-*/%(])-)?\d+(?:\.\d+)?|[+\-*/%()]/g);
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