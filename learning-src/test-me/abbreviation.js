// Given two strings s1 and s2(call letters in uppercase). Check if it is possible to convert s1 to s2 by performing following operations.

// Input : s1 = daBcd s2 = ABC 
// Output : yes
// Explanation : daBcd -> dABCd -> ABC  

// Input : s1 = argaju    s2 = RAJ
// Output : yes 
// Explanation : argaju -> aRgAJu -> RAJ  
// convert index 1, 3 and 4 to uppercase 
// and then delete. All lowercase letters

// Let DPi, j be 1 if it is possible to convert 1st i characters of s1 to j characters of s2, else DPi, j=0. Close observations gives us two conditions to deal with. 
// Initially DP0, 0=1, if DPi, j=1 then it is possible to check for next sets using following conditions. 
// 1. If s1[i] in upper case is equal to s2[j] then it is possible to convert i+1 characters of s1 to j+1 characters of s2, hence DPi+1, j+1=1.
// 2. If s1[i] is in lower case, then it is possible to delete that element and hence i+1 characters can be converted to j characters of s2. Hence DPi+1, j=1. 
// If DPn, m=1, then it is possible to convert s1 to s2 by following conditions. 

function abbreviation(s1, s2) {
	// calculates length
  let n = s1.length;
  let m = s2.length;
 
  let dp=new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i]=new Array(m+1);
    for (let j = 0; j <= m; j++) {
      dp[i][j] = false;
    }
  }
  // mark 1st position as true
  dp[0][0] = true;
 
  // traverese for all DPi, j
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {   
      // if possible for to convert i
      // characters of s1 to j characters
      // of s2
      if (dp[i][j]) {
        // if upper_case(s1[i])==s2[j]
        // is same
        if (j < s2.length && (s1[i].toUpperCase() == s2[j])) {
          dp[i + 1][j + 1] = true;
        }

        // if not upper then deletion is
        // possible          
        if (!(s1[i] == s1[i].toUpperCase())) {
          dp[i + 1][j] = true;
        }
      }
    }
  }
 
  return (dp[n][m]) ? 'YES' : 'NO';
}