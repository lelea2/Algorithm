// The key thing to realize in this to use stack as a data structure for the solution. Also, in most of the mathematical operations stack is used.

// Push operands to stack until you encounter an operator
// When you encounter an operator, pop two operands from stack
// Calculate operands using given operator and push the result to the stack

function RPN(seq) {

  if (seq.length <= 2) {
    console.log('Please enter valid RPN');
    return;
  }

  var operands = ['+', '-', '*', '/' ];
  var stack = [];
  var i = 0;

  stack.push(seq[i]);
  i++;

  while(i <= seq.length) {
    var item = seq[i];
    var index = operands.indexOf(item);
    if (index < 0) {
      stack.push(seq[i]);
    } else {
      if (index == 0) {
        var a = parseInt(stack.splice(-1)[0], 10);
        var b = parseInt(stack.splice(-1)[0], 10);
        stack.push(a+b);
      }
      if (index == 1) {
        var a = parseInt(stack.splice(-1)[0], 10);
        var b = parseInt(stack.splice(-1)[0], 10);
        stack.push(b-a);
      }
      if (index == 2) {
        var a = parseInt(stack.splice(-1)[0], 10);
        var b = parseInt(stack.splice(-1)[0], 10);
        stack.push(a*b);
      }
      if (index == 3) {
        var a = parseInt(stack.splice(-1)[0], 10);
        var b = parseInt(stack.splice(-1)[0], 10);
        stack.push(b/a); // push result
      }
    }
    i++;
  }

  return parseInt(stack[0],10);
};

console.log(RPN(["2", "1", "+", "3", "*"])) // 9
console.log(RPN(["4", "13", "5", "/", "+"])) // 6
console.log(RPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])) // 22
console.log(RPN(["2", "1"])) // Please enter valid RPN undefined
