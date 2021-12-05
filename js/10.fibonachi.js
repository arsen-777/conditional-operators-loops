"use strict";

//  one solution stra

function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
}
console.log(fib(20));

//  one solution strat

function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
console.log(fib(0));
console.log(fib(2));
console.log(fib(10));
console.log(fib(20));
