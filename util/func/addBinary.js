var addBinary = function(a, b) {
  var sum = parseInt(a,2) + parseInt(b,2);
  var bitStr = "";
  while(sum > 0){
    bitStr = sum%2 + bitStr;
    sum = Math.floor(sum/2);
  }
  return bitStr == '' ? '0': bitStr;
}