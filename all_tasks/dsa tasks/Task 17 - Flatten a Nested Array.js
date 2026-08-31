

function flattenTheNestedArray(array) {

    const res = [];
    const stack = [...array];

    while (stack.length) {
        const temp = stack.pop();
        if (!Array.isArray(temp)) {
            res.push(temp);
        } else {
            stack.push(...temp);
        }
    }

    return res.reverse();
}

console.log(flattenTheNestedArray([1,2,[3,4,[5,6],7]]).length);
console.log(flattenTheNestedArray([1, [2, [3, 4], 5], 6]).length);
