"use strict";

let str = "_, we have a _.";
let arr = ["Houston", "problem"];

let x = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "_") {
    str = str.replace("_", arr[x]);
    x++;
  }
}

console.log(str);
