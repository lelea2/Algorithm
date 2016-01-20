function isPalindrome(s) {
  var rev = s.split("").reverse().join("");
  return s == rev;
}

function longestPalind(s){
  var maxp_length = 0,
      maxp = '';

  for(var i=0; i < s.length; i++) {
    var subs = s.substr(i, s.length);

    for(var j=subs.length; j>=0; j--) {
      var sub_subs = subs.substr(0, j);
      if (sub_subs.length <= 1)
          continue;

      //console.log('checking: '+ sub_subs);
      if (isPalindrome(sub_subs)) {
        //console.log('palindrome: '+ sub_subs);
        if (sub_subs.length > maxp_length) {
            maxp_length = sub_subs.length;
            maxp = sub_subs;
        }
      }
    }
  }

  //console.log(maxp_length, maxp);
  return maxp;
}

console.log(longestPalind("abcxyzyxabcdaaa"));
