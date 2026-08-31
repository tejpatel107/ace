

function fibonacci(N) {

    if (N < 0) {
        return "Fibonacci is not defined for negative numbers";
    } else if (N === 0) {
        return [];
    } else {
        const res = [0,1]

        if (N === 1) {
            return [res[0]];
        }

        for (let i = 2; i < N; i++) {
            res.push(res[i-1] + res[i-2]);
        }

        return res;
    }    
}


console.log(fibonacci(5));
console.log(fibonacci(10));

console.log(fibonacci(0));
console.log(fibonacci(1));

