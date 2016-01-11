/**
 * Counting number of 0
 * Example:
 * If n = 50. number of 0 would be 11 (0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100).
 * Note that 100 has two 0.
 */

//Ideas:
//you have a number 1 to 50 the value is 5. just 50 divided by 10.
//However, if the value is 100. the value is 11. you will get by 100/10 = 10 and 10/10.
//Thats how you will get in the more zeros in one number like (100, 200, 1000)
function countZero(n) {
    var count = 0;
    while(n>0) {
        count += Math.floor(n/10);
        n = n/10; //re-duce range of number and continue to add
    }
    return count;
}

//Test case
countZero(2014); //223

