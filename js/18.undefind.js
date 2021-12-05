"use strict";

function underfind(arr) {
  let arr2 = arr.sort();
  let max = Math.max.apply(Math, arr2);
  let min = Math.min.apply(Math, arr2);

  let newarr = [];

  alert(arr2);
  let i = min;
  while (i <= max) {
    newarr.push(i);
    i++;
  }
  alert(newarr);

  for (let j = 0; j < newarr.length; j++) {
    if (!(newarr[j] in arr2)) {
      newarr[j] = undefined;
    }
  }

  console.log(new2);
}
underfind([4, 3, 7]);
