"use strict";

function findNum(n) {
  if (n < 10) {
    console.log(n);
  } else if (n % 10 === 0) {
    console.log(n);
  } else {
    let num2 = n % 10;
    let x = n / 10;
    let z = Math.floor(x);
    let k = "" + num2 + z;
    console.log(k);
  }
}
findNum(8);
