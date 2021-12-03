"use strict";

function calkProd(arr) {
  let sum = 0;
  let calk = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    calk *= arr[i];
  }

  if (sum === 0) {
    console.log("Cannot calculate");
  } else if (calk % sum === 0) {
    console.log("Question is " + calk / sum);
  } else if (calk % sum != 0) {
    let y = calk % sum;
    console.log("Reminder is " + y);
  }
}

calkProd([1, 2, 3, 3]);
calkProd([5]);
calkProd([0]);
calkProd([4, 5, 5]);
