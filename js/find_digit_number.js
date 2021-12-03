"use strict";

function findDigit(x, num) {
  while (num > 0) {
    if (num % 10 === x) {
      console.log("yeee");
      break;
    } else {
      console.log("noo");
    }
    num = Math.floor(num / 10);
  }
}
findDigit(5, 65230);
findDigit(4, 6);
findDigit(5, 2463);
