//A, B, "C, D", "E""F"
// ==> A
//     B
//     C,D 
//     E"F
function tokenizeCSV(str) {
  const stack = [];
  let arr = []; // array of character
  const result = [];
  for (let i =0; i < str.length; i++) {
    if (str[i] === ',') {
      if (stack.length === 0) { // nothing for ""
        arr.length > 0 && result.push(arr.join(''));
        arr = [];
      } else { // stack has it
        arr.push(str[i]); // push comma in array
      }
    } else if (str[i] === '"') { // if comma or "" push on stack
      if (arr.length === 0) {
          stack.push(str[i]);
      } else if (arr.length > 0 && stack.length === 1) { // contain " already
        if (str[i + 1] === '"') { // next char also "
          arr.push('"');
          i = i + 1; // skip next i
        } else {
          stack.pop();
          arr.length > 0 && result.push(arr.join(''));
          arr = [];
        }
      }
    } else { // character
      arr.push(str[i]);
    }
//     console.log(arr);
  }
  return result.join('\n');

} 

console.log(tokenizeCSV('A,B,"C, D","E""F"'));