/**
 * Rotate an array of n elements to the right by k steps.
 * For example, with n= 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 */

//Idea:
//1. Divide the array two parts: 1,2,3,4 and 5, 6, 7
//2. Rotate first part: 4,3,2,1,5,6, 7
//3. Rotate second part: 4,3,2,1, 7,6,5
//4. Rotate the whole array: 5,6,1,2,3,4
//Complexity: Space O(n), O(n) time
public static void rotate(int[] arr, int order) {
    if (arr == null || order < 0 || order > arr.length) { //throw exception for invalid array given or invalid order
        throw new IllegalArgumentException("Illegal argument!");
    }

    //length of first part
    int a = arr.length - order;

    //pass arr reference, array change after every reverse function is executed
    reverse(arr, 0, a-1); //reverse first part
    reverse(arr, a, arr.length-1); //reverse second part
    reverse(arr, 0, arr.length-1); //reverse the whole array
}

//Write reverse array function
public static void reverse(int[] arr, int left, int right){
    if(arr == null || arr.length == 1) {
        return;
    } //return nothing if empty array

    while(left < right) { //Reverse using temp value
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}
