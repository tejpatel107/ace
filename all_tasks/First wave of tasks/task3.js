

function isNumFloat(num) {

    return Number.isFinite(num) && !Number.isInteger(num);

}

function isNumFloat(num) {
    return Number.isFinite(num) && num % 1 !== 0;
}

// test cases

console.log(isNumFloat(3.14)); // true
console.log(isNumFloat(5)); // false
console.log(isNumFloat("3.14")); // false
console.log(isNumFloat(NaN)); // false
console.log(isNumFloat(Infinity)); // false
console.log(isNumFloat(-2.5)); // true
console.log(isNumFloat(0)); // false
console.log(isNumFloat(-0)); // false