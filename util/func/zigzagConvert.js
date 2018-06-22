// A     G     M
// B   F H   L N
// C E   I K   
// D     J     
var convert = function(s, numRows) {
  if(s == null) {
    return "";
  }
  if(numRows == 1) {
    return s;
  }
  var n = numRows * 2 - 2;
  var array = [];
  for(var k = 0 ; k < numRows; k++) { // str
    array.push("");
  }
  for(var i in s) { // loop through char
    var lineNumber = i % n;
    if (lineNumber < numRows) {
      array[lineNumber] += s[i];
    } else {
      array[2*numRows - lineNumber -2] += s[i];
    }
  }
  return array;
};

console.log(convert('ABCDEFGHIJKLMN', 4));

//[ 'AGM', 'BFHLN', 'CEIK', 'DJ' ]
