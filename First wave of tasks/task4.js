

function min(a, b) {
    return typeof a === "number" && typeof b === "number" ? (a < b ? a : b) : undefined;
}

/* function min(a, b) {
    return Math.min(a, b);
} */

// test cases
console.log(min(10, 5)); // 5
console.log(min(3, "7")); // undefined
console.log(min(-2, 0)); // -2
console.log(min(4, 4)); // 4
console.log(min(100, "abc")); // undefined
console.log(min(true, 5)); // undefined
console.log(min(true, 1)); // undefined
console.log(min(true, 0)); // undefined
console.log(min(false, 1)); // undefined
console.log(min(false, -1)); // undefined
console.log(min(0, true)); // undefined
console.log(min(null, 5)); // undefined
console.log(min(0, null)); // 0
