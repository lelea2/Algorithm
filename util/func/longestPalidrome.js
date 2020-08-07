// Runtime  O(n^2)
// O(n) space
//Helper function checking for palidrome string
function isPalindrome(s) {
  let rev = s.split("").reverse().join("");
  return s === rev;
}

function longestPalindromicSubstring(s) {
  let maxp_length = 0; //local variable to keep track of longest palidrome length
  let maxp = ''; //local variable to keep track of actual string which is longest palidrome

  // Special cases
  if (s.length <= 1) {
    return s;
  }
  for(let i = 0; i < s.length; i++) {
    let subs = s.substr(i, s.length); //abaxyzzyxf
    for(let j = subs.length; j>=0; j--) {
      let sub_subs = subs.substr(0, j); //abaxyzzyxf
      if (sub_subs.length <= 1) { //if substr <=1, then it's not a palidrome, just loop the outer loop, ignore checking
        continue;
      }
      if (isPalindrome(sub_subs)) {
        //console.log('palindrome: '+ sub_subs);
        if (sub_subs.length > maxp_length) {
          maxp_length = sub_subs.length;
          maxp = sub_subs;
        }
      }
    }
  }

  return maxp;
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;

// Input {"string": "abaxyzzyxf"}
// Output "xyzzyx"

// Input: {"string": "zzzzzzz2345abbbba5432zzbbababa"}
// Output: "zz2345abbbba5432zz"
