

function isDivisibleBy5(num) {
    return (typeof num === 'number' && !isNaN(num) && num % 5 === 0) ? true : 5;
}   


// test cases

console.log(isDivisibleBy5(10)); // true
console.log(isDivisibleBy5(7));  // 5
console.log(isDivisibleBy5(654564135745645e521)); // 5
console.log(isDivisibleBy5(654564135745645e1)); // true
console.log(isDivisibleBy5(654564135745645e2)); // 5
console.log(isDivisibleBy5("5234265")); // 5