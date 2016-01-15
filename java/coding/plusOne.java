/**
 * Given the number represented in array form
 * Represent a new array which is the result of that integer + 1
 */

public int[] plusOne(int[] digits) {
    for(int i = digits.length - 1; i>=0; i--) {
        if(digits[i] != 9) { //If last digit is not 9, then just add to last digit and return the array right away
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0; //change last digit to 0
        }
    }
    //This is when the result is all 0, for example, initial digit is 999, + 1 = 1000
    //Therefore this last step is to extend the array by 1 index and push 1 to first index position
    int[] re = new int[digits.length+1];
    re[0] = 1;

    return re;
}
