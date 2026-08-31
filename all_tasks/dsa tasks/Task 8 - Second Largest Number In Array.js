

function findSecondLargestNumInArray(array) {
    
    if (array.length < 2) {
        return null;
    }
    
    let max = -Infinity;
    let secondMax = -Infinity;

    for (const num of array) {

        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax ) {
            secondMax = num;
        }
    }

    return secondMax === -Infinity ? null : secondMax;
}


console.log(findSecondLargestNumInArray([23,46,7,7,8,32,854,547,43]));
console.log(findSecondLargestNumInArray([10, 5, 20, 8, 15])); // 15
console.log(findSecondLargestNumInArray([4, 4, 4]));          // null
console.log(findSecondLargestNumInArray([7, 2]));             // 2
console.log(findSecondLargestNumInArray([-5, -2, -10]));      // -5