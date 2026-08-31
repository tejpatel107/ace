
function isValueString(value) {
    return typeof value === 'string';
}

// test cases

console.log(isValueString("Hello")); // true
console.log(isValueString(123)); // false
console.log(isValueString(true)); // false
console.log(isValueString({})); // false
console.log(isValueString(["Hello", "World"])); // false
console.log(isValueString(null)); // false
console.log(isValueString(undefined)); // false
console.log(isValueString("Hello" + " World")); // true
