// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// my recursion version 
function fib(n, fibo = [0, 1], counter = 0) {
    if (n === 0) return;
    fibo.push(fibo[counter] + fibo[counter + 1]);
    counter++;
    fib(n - 1, fibo, counter); 
    return fibo[n];
}

// Stephen's recursion version
function fib(n) {
    if (n < 2) return n;

    return fib(n - 1) + fib(n - 2);
}

// my iterative solution
// function fib(n) {
//     let fibo = [0, 1];
    
//     for (let i = 0; i <= n; i++) {
//         fibo.push(fibo[i] + fibo[i + 1]);
//     }
//     return fibo[n];
// }

module.exports = fib;
