"use strict";

function findLenth(arr) {
  let max = arr[0].length;
  let min = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
    } else if (arr[i].length < min) {
      min = arr[i].length;
    }
  }
  console.log(min + max);
}

findLenth(["anymore", "raven", "me", "communicate"]);
