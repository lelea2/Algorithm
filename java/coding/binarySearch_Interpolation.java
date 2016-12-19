/**
 * Interpolation search better than binary search
 * Referenced from: https://blog.imaginea.com/interpolation-search-a-search-algorithm-better-than-binary-search/
 */

// The difference between the binary and the interpolation sort is that the binary search always splits the the array in half and inspects the middle element.
// Interpolation search calculates a position p, where the value should be placed in accordance to the distribution of values a splits the array at p.
// If the array contains numbers 0, 1, 2, ..., 10 and we are looking for 9 the binary search needs three steps – split at 5, split at 8, split at 9 (found).
// The interpolation search calculates the probable position (index 9) and immediately finds the value.
// Run time: **O(log(logn))**

/**
 * Interpolation search
 * @param array array with uniformly distributed values in ascending order
 * @param value searched value
 * @param from first index that might be touched
 * @param to last index that might be touched
 * @return index index of the searched value in the array, -1 if not found
 */
public static int interpolationSearch(int[] array, int value, int from, int to){
    if(array[from] == value) {
      return from;
    } else if(from == to || array[from] ==  array[to]) {
        return -1; //not found
    }
    //probable position of the searched value
    int index = from + ((to - from)/(array[to] - array[from])) * (value - array[from]);

    if(array[index] == value) {
        return index;//found
    } else if(array[index] < value) { //continue in the right part of the array
        return interpolationSearch(array, value, index + 1, to);
    } else { //continue in the left part of the array
        return interpolationSearch(array, value, from, index - 1);
    }
}
