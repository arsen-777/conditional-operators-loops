"use strict";

function reverse(num) {
  const numArr = Array.from(String(num));
  // alert(numArr);
  let i = 0;
  let i2 = numArr.length - 1;

  while (i < numArr.length / 2) {
    let d = numArr[i];
    numArr[i] = numArr[i2];
    numArr[i2] = d;

    i = i + 1;
    i2 = i2 - 1;
  }
  console.log(numArr);
}

reverse(12345);
