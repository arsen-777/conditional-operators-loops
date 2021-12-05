"use strict";

function multiple(num) {
  if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
    console.log(num + " is a multiple of 3, 5 and 7");
  } else if (num % 3 === 0 && num % 7 === 0) {
    console.log(num + " is multiple of 3 and 7");
  } else if (num % 5 === 0 && num % 7 === 0) {
    console.log(num + " is multiple of 5 and 7 ");
  } else if (num % 3 === 0) {
    console.log(num + " is a multiple of 3");
  } else {
    console.log(num + " is not miltiple of 3, 5 or 7");
  }
}

multiple(35);
multiple(21);
multiple(13);
multiple(24);
multiple(420);
