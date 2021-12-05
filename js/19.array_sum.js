"use strict";

function arraySum(arr) {
  for (let i = 0; i < arr.length; i++) {
    let arrnew = arr[i].reduce(function (aggr, val) {
      return aggr + val;
      0;
    });
    console.log(arrnew);
  }
}
arraySum([
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
]);
