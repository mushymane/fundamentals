// given a number N return the index value of the Fibonacci sequence where
// 0,1,1,2,3,5,8,13,21,34,55,89,144,...
// the pattern of the sequence is that each value is the sum of the previous 2 values

function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
} // O(2^n)

function fibonacciIterative(n) {
    let array = [0, 1];
    for (let i = 2; i <= n; i++) {
        array.push(array[i - 2] + array[i - 1]);
    }
    return array[n];
} // O(n)

console.log(fibonacciIterative(8));
console.log(fibonacciRecursive(8));



// Every time you are using a tree or converting something into a tree,
// consider recursion

// 1. Divided into a number of subproblems that are smaller instances of
// same problem
// 2. Each instance of the subproblem is identical in nature
// 3. The solutions of each subproblem can be combined to solve the problem

// Divide and Conquer using Recursion