

function missingNumberInArray(array){
    
    let N = array.length + 1;
    let expectedSum = (N * (N + 1)) / 2;
    let actualSum = array.reduce((total, curr) => curr + total, 0);

    return expectedSum - actualSum;
}

console.log(missingNumberInArray([14, 5, 20, 11, 1, 16, 17, 3, 15, 12, 18, 9, 8, 4, 13, 19, 7, 2, 6]));

console.log(missingNumberInArray([1, 2, 3, 4, 5]));