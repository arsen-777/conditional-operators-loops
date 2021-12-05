"use strict";

function findNumber(arr) {
  let numberCount = 0;
  let stringCount = 0;
  arr.forEach(function (val) {
    if (typeof val === "number") {
      numberCount += 1;
    } else if (typeof val === "string") {
      stringCount++;
    }
  });
  return [numberCount, stringCount];
}

const count = findNumber([1, "10", "hi", 2, 3]);
console.log(`numbers = ${count[0]}, strings = ${count[1]}`);
