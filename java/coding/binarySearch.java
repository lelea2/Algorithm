/**
 * Simple binary search in Java for array of integer
 */

//Purposes: test your basic skill of recursion
//Function will take the array, start and end index and the number we want to look for

//return the index that has the requested value
//Runtime: O(logn)
public static int binarySearch(int arr[], int low, int high, int num) {
    if (high < low) { //return -1 for invalid cases
        return -1;
    }
    int mid = (low + high) / 2; //calculate the middle index
    if (num == arr[mid]) {
        return mid;
    }
    if (num > arr[mid]) { //walk the right tree
        return binarySearch(arr, (mid + 1), high, num);
    } else {//walk the left tree
        return binarySearch(arr, low, (mid - 1), num);
    }
}
