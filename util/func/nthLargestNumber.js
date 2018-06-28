// Find nth largest number in unsorted array

function nthlargest(arra, highest) {
  let x = 0;
  let y = 0;
  let z = 0;
  let temp = 0;
  const tnum = array.length;
  let flag = false;
  let result = false;

  while(x < tnum) { // loop through array
    y = x + 1; // next number
    if (y < tnum) { // if y still in array length range
      for(z = y; z < tnum; z++) {
        if (arra[x] < arra[z]) {
          temp = arra[z];
          arra[z] = arra[x];
          arra[x] = temp;
          flag = true;
        } else {
          continue;
        }
      }
    }
    if (flag) {
      flag = false;
    } else {
      x++;
      if(x === highest) {
        result = true;
      }
    }
    if (result) {
      break;
    }
  }

  return (array[(highest - 1)]);
}

console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));