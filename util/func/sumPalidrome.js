/*
 The number 47 has an interesting property: if you add the number to a reversal of itself (47 => 74), the answer (121) is a palindrome.=
 Starting at 0, find the first 25 numbers that also exhibit this characteristic where the palindrome is greater than 1000.
 Bonus points if you can reverse integers without turning them into strings first.
*/

// O(3*n)
function isPalidrome(str) {
  const reverseStr = str.split('').reverse().join('');
  return reverseStr === str;
}

// 209 => 9
// 20 => 0
// 2 => 2
// O(n)
function reverseNum(number) {
  let rNum = 0;
  while (number > 0) {
    rNum = number % 10 + rNum * 10;
    number = Math.floor(number / 10);
  }
  return rNum;
}

function getSpecialNumbers() {
  let number = 100;
  const arr = [];
  while(number) {
    if (arr.length >= 25) {
      break; // stop the loop
    }
    const rNumber = reverseNum(`${number}`);
    const total = rNumber + number;
    if (total > 1000 && isPalidrome(`${total}`) && arr.length < 25) {
      arr.push(number);
    }
    number++;
  }
  console.log(arr);
}

getSpecialNumbers();
// [ 209, 
//   308, 
//   407, 
//   506, 
//   605, 
//   704, 
//   803, 
//   902, 
//   1000, 
//   1001, 
//   1002, 
//   1003, 
//   1004, 
//   1005, 
//   1006, 
//   1007, 
//   1008, 
//   1010, 
//   1011, 
//   1012, 
//   1013, 
//   1014, 
//   1015, 
//   1016, 
//   1017 ] 