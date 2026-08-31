

function findUniqueElementFromArray(arr) {
    const set = new Set(arr);
    return [...set];
}


// test cases


console.log(findUniqueElementFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(findUniqueElementFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(findUniqueElementFromArray([1, 2, 3, 4, 5, 6, 7, "8", 8, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, "8", 9, 10]