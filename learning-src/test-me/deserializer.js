// Input: s = "[123,[456,[789]]]"
// Output: [123,[456,[789]]]

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

 function deserialize(s) {
  if (!s.startsWith('[') ) {
    return new NestedInteger(parseInt(s));
  }
  
  let stack = []; 
 
  for (let i=0; i < s.length; i++) {
    if (s[i] === ',') {
      continue;
    } else if (s[i] === '[') {
      stack.push(new NestedInteger());
    } else if (isDigit(s[i]) || s[i] === '-') {
      let j = i + 1; 
      while(isDigit(s[j])) {
        j++;
      }
      let num = parseInt(s.substring(i,j));
      i = j-1;
      stack[stack.length-1].add(new NestedInteger(num));
    } else if (s[i] === ']') {          
      if (stack.length >1) {
        let child = stack.pop();
        stack[stack.length-1].add(child);
      }
    }
  }
  
  return stack[stack.length-1] ;  
}

function isDigit(c) {
  return '0123456789'.includes(c)
}

console.log(deserialize('[123,[456,[789]]]'));