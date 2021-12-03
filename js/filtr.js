"use strict";

function filtr(arr) {
  let arr2 = arr.filter(function (val) {
    return typeof val === "number";
  });
  alert(
    arr2.sort(function (a, b) {
      return a - b;
    })
  );
}
filtr([8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3]);
