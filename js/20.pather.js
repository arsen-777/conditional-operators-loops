"use strict";

let pathern = function (num) {
  let i, j;
  for (i = 1; i <= num; i++) {
    for (j = 1; j <= i; j++) {
      console.log(i);
    }
    console.log("\n");
  }
};

console.log(pathern(15));
