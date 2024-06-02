console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const minNumber = arr => Math.min(...arr);