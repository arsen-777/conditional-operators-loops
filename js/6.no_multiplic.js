"use strict";

let x = 0;
let y = -7;
let z = 2;
if (x === 0 || z === 0 || y === 0) {
  console.log("unsigned");
} else if (x > 0 && y > 0 && z > 0) {
  console.log("The sign is +");
} else if (x < 0 && y < 0 && z < 0) {
  console.log("The sign is -");
} else if (x > 0 && y < 0 && z < 0) {
  console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}
