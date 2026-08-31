
// Task 6

function calcFactorial(num) {

    if (num < 0) {
        return "Factorial is not defined for negative numbers";
    }

    if (num === 0 || num === 1) {
        return 1;
    }
    
    return num * calcFactorial(num-1);
}

console.log(calcFactorial(100));
