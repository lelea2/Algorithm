/*
 * Input:   '2+4+8'
 * Output:  14
 *
 * Input:   '7+6-5*2' // 7 6 / 5 * 2 -
 * Output:  3 // 7+6-10
 *
 * Input:   '4+8-4*2/2'
 * Output:  8 // 4+8-8/2
 */

const input = '3+10-3*2';

// your code goes here...
function run(input) {
  const arr = [];
  let multipliedArr = [];
  const mathOperator = [];
  let tempStr = "";
  const MATH_OPERATOR = ['+', '-', '*', '/'];
  const generateResult = (multipliedArr, mathOperator, tempStr) => {
     const multipliedVal = multipliedArr.pop();
     const currCal = mathOperator.pop(); // * or /
     const val1 = parseInt(multipliedVal, 10);
     const val2 = parseInt(tempStr, 10);
     let result = 0;
     if (currCal === '*') {
       result = val1 * val2;
     } else if (currCal === '/') {
       result = val1 / val2;
     }
    return result;
  };
  for(let i  = 0; i <= input.length; i++) {
    // need to do something calculator
    if (MATH_OPERATOR.indexOf(input[i]) > -1 || i === input.length) {
       if (input[i] === '*' || input[i] === '/') {
         if (multipliedArr.length) {
           const result = generateResult(multipliedArr, mathOperator, tempStr);
           multipliedArr.push(result);
         } else {
           multipliedArr.push(tempStr);
         }

       } else {
          if (multipliedArr.length) {
            const result = generateResult(multipliedArr, mathOperator, tempStr);
            arr.push(result);
          } else {
             arr.push(tempStr);
          }
       }
       if (i !== input.length) {
         mathOperator.push(input[i]);
       }
       tempStr = "";
    } else if (!!input[i]) {
       tempStr += input[i];
    }
  }
  console.log('>>>>', mathOperator, arr, multipliedArr);


  // 7+6-5*2
  // arr [7, 6, 10]
  // mathOperator [+, -];
  let currVal = parseInt(arr[0], 10);
  // console.log(arr.length);
  for (let i = 1; i < arr.length; i++) {
     let nextVal = parseInt(arr[i]);
    // console.log(currVal);
    // console.log(nextVal);
     if (mathOperator[i - 1] === '+') {
        currVal += nextVal;
     } else { // '-'
        currVal -= nextVal;
     }
  }
  return currVal;
}

console.log(run('3+10-3*2'));
console.log(run('7+6-5*2'));
console.log(run('2+4+8'));
console.log(run('4+8-4*2/2'));