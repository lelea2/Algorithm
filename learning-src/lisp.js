
// Create an interpreter for a simple lisp-like language that evaluates math operations:
// ( add 3 5 ) => 8
// ( sub 2 1 ) => 1
// ( add 3 ( sub 3 1 1 ) 1 ) => 5

// (add add 3 5) // 

function operation(str) {
  const arr = str.split(' ');
  const result = _operator(arr, 0);
  return result;
}


function _operator(arr, tempVal = 0) {
  let startCal = false;
  let operator = null;
  let childArr = [];
  if (arr.length === 0) {
    return 0;
  }
  for(let i = 1; i < arr.length - 1; i++) {
    if (arr[i] === '(') {
      childArr.push(arr[i]);
      let stack = [];
      for (let j = i + 1; j < arr.length - 1; j++) {
        if (arr[j] === '(') {
          stack.push(arr[j]);
          childArr.push(arr[j]);
        } else if (arr[j] === ')') {
          childArr.push(arr[j]);
          if (stack.length > 0) { // nested value;
            stack.pop();
          } else {
             const innerResult = _operator(childArr);
             console.log('>>> result: ', innerResult, childArr);
             if (operator === 'add') {
              tempVal += innerResult;  
             } else {
              tempVal -= innerResult;
             }
             i = j;
             break;
          }
        } else {
          childArr.push(arr[j]);  
        }
      }
    } else {
      const tempNum = parseInt(arr[i], 10);
      if (isNaN(tempNum)) {
        operator = arr[i];
      } else {
        if (!startCal) {
          tempVal = tempNum;
          startCal = true;
        } else {
          if (operator == 'add') {
            tempVal += tempNum;
          } else {
            tempVal -= tempNum;
          }
        }
      }
    }
  }
  return tempVal;
}

console.log(operation("( add 3 5 )"));
console.log(operation("( sub 2 1 )"));
console.log(operation("( add 3 ( sub 3 1 1 ) 1 )"));
console.log(operation("( add 3 ( sub 3 ( add 1 1 ) ) 1 )")); //[  3 [ 3 [ 1 1 ] ] 1 ]
console.log(operation("( add 3 ( sub 5 ( add 1 ( add 1 1 ) ) ) 1 )")); // 3 + ( 5 - 3) + 1
