"use strict";

function findIndex(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      console.log(i);
    } else if (arr[i] !== n) {
      Math.abs(n);
      console.log(arr[i]);
    }
  }
}

findIndex([21, -9, 15, 23, 16, -71, 33], 34);
