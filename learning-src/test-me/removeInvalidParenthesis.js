// Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

// Note: The input string may contain letters other than the parentheses ( and ).

// Example 1:

// Input: "()())()"
// Output: ["()()()", "(())()"]
// Example 2:

// Input: "(a)())()"
// Output: ["(a)()()", "(a())()"]
// Example 3:

// Input: ")("
// Output: [""]

// https://gist.github.com/jerryvig/9d4f2f1a9ca6017975a54c8f839066c7

var removeInvalidParentheses = function(s) {
	var queue = [];
	var visited = new Set();
	queue.push(s);
	var result = [];
	var found = false;
	  
	while(queue.length !== 0) {
	  var str = queue.shift();
	  if(isValid(str)) {
	    result.push(str);
	    found = true;
	  } else if(!found){   
	    for(var i = 0; i < s.length; i++) {
	      if(str[i] === "(" || str[i] === ")") {
		var subStr = str.slice(0, i) + str.slice(i + 1, s.length);
		if(!visited.has(subStr)) {
		  queue.push(subStr);   
		  visited.add(subStr);
		}
	      }    
	    }
	  }
	}
	
	return result;
      };
      
      var isValid = function(s) {
	var leftCount = 0;
	var iter = 0;
	while(iter < s.length) {
	  if(s[iter] === "(") 
	    leftCount++;
	  else if(s[iter] === ")") {
	    leftCount--;
	    if(leftCount < 0)
	      return false;
	  }
	  iter++;
	}    
	
	return leftCount === 0;
}

/*============================================================*/
function isValidString(s) {
  var count = 0;
  for (let c of s) {
      if (c === '(') {
          count++;
      }
      else if (c === ')') {
          count--;
      }
      if (count < 0) return false;
  }
  return count === 0;
}

function removeInvalidParentheses(s) {
  let levels = [s];
  while (true) {
      let valid = levels.filter(isValidString);
      if (valid.length > 0) {
          return new Set(valid);
      }

      // check validity of all possible substrings with one character removed.
      let nextlevels = [];
      for (let s of levels) {
          for (let i = 0; i < s.length; i++) {
              nextlevels.push(s.substring(0, i) + s.substring(i + 1));
          }
      }
      levels = nextlevels;
  }
}

console.log(removeInvalidParentheses(')()()('));
console.log(removeInvalidParentheses('(()))'));
console.log(removeInvalidParentheses(')('));
console.log(removeInvalidParentheses('()))(()'));
console.log(removeInvalidParentheses('(()())'));
