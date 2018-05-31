// Write a function that returns true when number of things (N)
// can be precisely divided into boxes of 6, 9 and 20 => N = 6x + 9y + 20z

function checkSum(num) {
  let z = 1;
  while (z * 20 < num) {
    const sum1 = num - z * 20;
//     console.log(sum1);
    let y = 1;
    while (y * 9 < sum1) {
      const sum2 = sum1 - y * 9;
      if (sum2 % 6 === 0) {
        console.log('----z: ', z, '-----y: ', y, '----- x: ', sum2/6);
        return true;
      }
//       console.log('----j: ', j);
      y++;
    }
//     console.log('----i: ', i);
    z++;
  }
  return false;
}

//console.log(checkSum(70));
//console.log(checkSum(7000));
//console.log(checkSum(140));
console.log(checkSum(1000));