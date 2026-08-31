

function gcd(a, b) {

    if (b === 0) {
        return a;
    } 

    return gcd(b, a % b);
}

console.log(gcd(60,35));
console.log(gcd(12,18));
console.log(gcd(355,685));
console.log(gcd(160,240));
console.log(gcd(5,0));

