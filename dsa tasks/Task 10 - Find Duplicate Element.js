

function findDuplicateElement(array) {

    const seen = new Set();
    const repeated = new Set();

    for (const num of array) {

        if (!seen.has(num)){
            seen.add(num)
        } else {
            repeated.add(num);
        }
    }

    return [...repeated];
}


console.log(findDuplicateElement([2, 4, 1, 2, 2, 0, 4, 1, 3, 2]));
console.log(findDuplicateElement([3, 1, 5, 3, 2, 5, 5, 4, 1, 3]));
