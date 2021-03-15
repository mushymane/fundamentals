// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,...

let calculations = 0;
function fibonacci(n) {

    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
} // O(2^n)

function memoizedFibonacci() {
    let cache = {};
    return function fib(n) {
        calculations++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
} // O(n)

// bottom up (avoids recursion)
function fibonacciMaster(n) {
    let answer = [0, 1];
    for (let i = 2; i <= n; i++) {
        answer.push(answer[i - 2] + answer[i - 1]);
    }
    return answer.pop();
}

const fasterFib = memoizedFibonacci();
console.log('DP', fasterFib(50));
console.log('DP2', fibonacciMaster(100));
console.log('we performed', calculations, 'calculations')