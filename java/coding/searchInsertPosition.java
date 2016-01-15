/**
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You may assume no duplicates in the array.
 * Here are few examples.
 * [1,3,5,6], 5 -> 2
 * [1,3,5,6], 2 -> 1
 * [1,3,5,6], 7 -> 4
 * [1,3,5,6], 0 -> 0
 */

//Idea: apply binary search tree Here
//Find the mid point of the array
//Walk array left if the midpoint > given value
//Walk array right if midpoint < given value

public static int searchInsert(int[] A, int target, int start, int end) {
    int startIndex = (start == null) ? 0 : start;
    int endIndex = (end == null) ? (A.length - 1) : end;
    int mid = (startIndex + endIndex)/2;
    if (target == A[mid]) {
        return mid;
    } else if(target < A[mid]) { //return 0 if mid index is < startIndex
        return (startIndex < mid) ? searchInsert(A, target, startIndex, mid-1) : startIndex;
    } else { //return endIndex+1 if mid index > endIndex
        return (endIndex > mid) ? searchInsert(A, target, mid+1, endIndex) : (endIndex+1);
    }
}
