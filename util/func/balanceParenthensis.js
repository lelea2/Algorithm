function isBalanced(inputStr) {
  if (inputStr === null) {
    console.log(true);
  }
  var expression = inputStr.split('');
  var stack = [];
  for (var i = 0; i < expression.length; i++) {
    if (isParanthesis(expression[i])) {
      if (isOpenParenthesis(expression[i])) {
        stack.push(expression[i]);
      } else {
        if (stack.length === 0) {
          return console.log(false);
        }
        var top = stack.pop(); // pop off the top element from stack
        if (!matches(top, expression[i])) {
          return console.log(false);
        }
      }
    }
  }
}

function isParanthesis(char) {
  var str = '{}[]()';
  if (str.indexOf(char) > -1) {
    return true;
  } else {
    return false;
  }
}

// store token of parenthensis in array
const tokens = [ ['{','}'] , ['[',']'] , ['(',')'] ];

function isOpenParenthesis(parenthesisChar) {
  for (var j = 0; j < tokens.length; j++) {
    if (tokens[j][0] === parenthesisChar) {
      return true;
    }
  }
  return false;
}

function matches(topOfStack, closedParenthesis) {
  for (var k = 0; k < tokens.length; k++) {
    if (tokens[k][0] === topOfStack && 
        tokens[k][1] === closedParenthesis) {
      return true;
    }
  }
  return false;
}
