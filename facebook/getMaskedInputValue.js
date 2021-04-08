/**

Prompt: Build a masking method that formats an input string based on a given pattern.

Agreed upon rules:
1. The method should take 2 parameters: input string (type: string) and pattern string (type: string)

2. The output should be a "sanitized" string

3. The pattern string decides what character type is allowed in a particular index

4. The pattern string also restricts the max length of the output
  ie.  getMaskedInputValue('5555eeeeeee', '0000aa') ==> '5555ee'

5. If a character in input value does not match the rule in the pattern string, the method should skip adding it in the output
  ie. getMaskedInputValue('5555555ee', '000aa') ==> '555ee'
*/

/** Spec 1: Allow specifying which characters at what indexes should be restricted to digits or alphabet characters

Legend:
 - "0" = any digit [0-9]
 - "a" = any alphabet characters [A-Z, a-z]
 */
// (!(code > 47 && code < 58) && // numeric (0-9)
// !(code > 64 && code < 91) && // upper alpha (A-Z)
//         !(code > 96 && code < 123)) { // lower alpha (a-z)

function isValidMatch(charCode, patternChar) {
  return (((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) && patternChar === 'a') || ((charCode > 47 && charCode < 58) && patternChar === '0');
}

function getMaskedInputValue(inputStr, patternStr) {
  let result = '';
  let k = 0; // for patterns
  let i = 0;
  while (i < inputStr.length) {
    const charCode = inputStr.charCodeAt(i);
    const patternChar = patternStr[k];
     if (isValidMatch(charCode, patternChar)) {
         result += inputStr[i];
         k++;
         i++;
     } else {
       (inputStr.length >= patternStr.length) ? i++ : k++;
     }
  }
  return result;
}

// k = 0, i = 0, 5 => 0  => result. =. 5, k = 1
// k = 1, i = 1, 5 => 0 => result = 55 k = 2
// k = 2, i = 2, 5 => 0 => result = 555, k.= 3
// k = 3, i = 3, 5 => 0 => result = 5555, k =. 4;
// k = 4; i = 4, 6 != a => result = 5555, k = 4

function checkResult(result, expectedValue) {
  console.log(result === expectedValue, `result: ${result}, expected: ${expectedValue}`);
}

checkResult(getMaskedInputValue("5555ee", "0000aa"), '5555ee');
checkResult(getMaskedInputValue("555565oo", "0000aa"), '5555oo');
checkResult(getMaskedInputValue("555oo9", "0000aa"), '5559');
checkResult(getMaskedInputValue("5ee", "0000aa"), '5ee');

/** Spec 2. Custom character placements within the string

  Additional Legend:
   - "(...)" = is a container and all characters within that container should be inserted into the output at the index it appears.
      - ie. getMaskedInputValue('ee', '(**)a') => '**e'
      - ie. getMaskedInputValue('ee', '(*--)a') => '*--e'
*/

// checkResult(getMaskedInputValue('555oo', '00(**)0'), '55**5');
// checkResult(getMaskedInputValue('555oou8e', '00(**)aa(*)a'), '55**oo*u');
// checkResult(getMaskedInputValue('555oou8e', '00(****)aa(*)a'), '55****oo*u');
// checkResult(getMaskedInputValue('555oou8e', '00(****)aa(*)a(*)0'), '55****oo*u*8');
