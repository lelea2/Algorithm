// Given two strings, string1 and string2, the task is to find the smallest substring in string1 containing all characters of string2 efficiently. 
// Input: string = “this is a test string”, pattern = “tist” 
// Output: Minimum window is “t stri” 
// Explanation: “t stri” contains all the characters of pattern.

// Input: string = “geeksforgeeks”, pattern = “ork” 
// Output: Minimum window is “ksfor”

// 1. First check if the length of the string is less than the length of the given pattern, if yes then “no such window can exist “.
// 2. Store the occurrence of characters of the given pattern in a hash_pat[].
// 3. we will be using two pointer technique basically
// 4. Start matching the characters of pattern with the characters of string i.e. increment count if a character matches.
// 5. Check if (count == length of pattern ) this means a window is found.
// 6. If such a window found, try to minimize it by removing extra characters from the beginning of the current window.
// 7. delete one character from first and again find this deleted key at right, once found apply step 5 .
// 8. Update min_length.
// 9. Print the minimum length window.

function Minimum_Window(s, t) {
  let m = new Array(256);
  for (let i = 0; i < 256; i++) {
    m[i] = 0;
  }

  // Length of ans
  let ans = Number.MAX_VALUE;

  // Starting index of ans
  let start = 0;
  let count = 0;

  // Creating map
  for (let i = 0; i < t.length; i++) {
    if (m[t[i].charCodeAt(0)] == 0) {
      count++;
    }

    m[t[i].charCodeAt(0)]++;
  }

  // References of Window
  let i = 0;
  let j = 0;

  // Traversing the window
  while (j < s.length) {
    // Calculations
    m[s[j].charCodeAt(0)]--;

    if (m[s[j].charCodeAt(0)] == 0) {
      count--;
    }

    // Condition matching
    if (count == 0) {
      while (count == 0) {
        // Soring ans
        if (ans > j - i + 1) {
          ans = Math.min(ans, j - i + 1);
          start = i;
        }

        // Sliding I
        // Calculation for removing I
        m[s[i].charCodeAt(0)]++;

        if (m[s[i].charCodeAt(0)] > 0) {
          count++;
        }
        i++;
      }
    }
    j++;
  }
  if (ans != Number.MAX_VALUE) {
    return (s).join("").substring(
      start, (start + ans));
  } else {
    return "-1";
  }
}