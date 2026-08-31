

function splitIntoEvenOdd(array) {

    return {
        even: array.filter(num => num%2 === 0), 
        odd : array.filter(num => num%2 !== 0)
    };
}

console.log(splitIntoEvenOdd([23,46,7,7,8,32,854,547,43]));
console.log(splitIntoEvenOdd([14, 5, 20, 11, 1, 16, 17, 3, 15, 12, 18, 9, 8, 4, 13, 19, 7, 2, 6]));