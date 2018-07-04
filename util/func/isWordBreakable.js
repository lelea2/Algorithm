// Traverse the given input string.
// Take a blank string and keep adding one char­ac­ter at a time to it (or prefix).
// If prefix exist in the dic­tio­nary then add it to the answer and make recur­sive call to the rest of the string (or suffix).
// If any of the recur­sive calls returns false then back­track and remove the prefix from the answer string. And again keep adding the char­ac­ters to string to create new prefix.
// If all the recur­sive calls return true it means string has been bro­ken successfully.

// inputDict = ["I" , "have", "ha", "dog"]

// inputStr = "Ihavedog"
// Output: "I ha have dog"

// inputStr ="thisisadog"
// Output: String can not broken.

function isWordBreakable (s, dict, answer) {
  // console.log(s + '  ' + answer);
  var strLen = s.length;
  if (strLen === 0) {
    console.log(answer);
    return true;
  } else {
    var prefix = '';
    for (var i = 0; i < strLen; i++) {
      // add one char at a time
      prefix += s.charAt(i);
      // check if prefix exists in dictionary
      // if (dict.includes(prefix)) { // Array.prototype.includes() is an ES7 Feature
      if (dict.indexOf(prefix) > -1) {
        //add prefix to the answer and make a recursive call
        answer += prefix + ' ';
        var suffix = s.slice(i + 1);
        if (isWordBreakable(suffix, dict, answer)) {
          return true;
        }
      } 
      //console.log(prefix + '  backtrack');
    }
  }
}

var inputStr = 'Ihavedog';
var inputDict = ['I', 'have', 'ha' , 'am', 'this', 'dog'];

if (!isWordBreakable(inputStr, inputDict, '')) {
  console.log('String can not broken.');
} // I ha have dog

var inputStr2 = 'Ihavesdog';
if (!isWordBreakable(inputStr2, inputDict, '')) {
  console.log('String can not broken.');
} // String can not broken.
