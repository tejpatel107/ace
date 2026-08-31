

function areElementsDivisibleBy2(arr) {
    return arr.every(num => typeof num === "number" && num % 2 === 0);
}



// test cases

console.log(areElementsDivisibleBy2([2, 4, 6, 8])); // true
console.log(areElementsDivisibleBy2([2, 3, 6, 8])); // false
console.log(areElementsDivisibleBy2([0, 2, NaN, 4])); // false
console.log(areElementsDivisibleBy2([2, 4, "6", 8, 10])); // false