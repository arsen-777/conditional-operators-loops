"use strict";

const isPrime = function (num) {
  let res = 1;
  let i = 2;
  while (i <= num) {
    if (num % i === 0) {
      res = i;
      break;
    } else {
      i++;
    }
  }
  if (res === num) {
    console.log("no");
  } else {
    console.log("yes");
  }
};

isPrime(401);
isPrime(63);
