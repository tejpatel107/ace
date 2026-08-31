

function isNumberPrime(num) {

    if (num <= 1) {
        return false;
    }

    let sqrt = Math.sqrt(num);
    
    let i = 2
    while (i <= sqrt) {
        if (num % i === 0) {
            return false;
        }
        i += 1;
    }

    return true;
}

console.log(isNumberPrime(25));
console.log(isNumberPrime(1009));
console.log(isNumberPrime(6549));

