//This problems seems like a binary search, and the key is how to break the array to two parts, so that we only need to work on half of the array each time, i.e., when to select the left half and when to select the right half.
//If we pick the middle element, we can compare the middle element with the left-end element. If middle is less than leftmost, the left half should be selected; if the middle is greater than the leftmost, the right half should be selected. Using simple recursion, this problem can be solve in time log(n).
//In addition, in any rotated sorted array, the rightmost element should be less than the left-most element, otherwise, the sorted array is not rotated and we can simply pick the leftmost element as the minimum.

public int findMin(int[] num, int left, int right) {
    //Special cases
    if (left == right) { //index colide
        return num[left];
    }
    if ((right - left) == 1) { //array only contains 2 element
        return Math.min(num[left], num[right]);
    }

    int middle = left + (right - left) / 2; //find middle index

    //Find rotate element
    // not rotated
    if (num[left] < num[right]) {
        return num[left];
    } else if (num[middle] > num[left]) { // go right side, rotate, smallest element is in the right side
        return findMin(num, middle, right);

    // go left side
    } else { //rotate, smallest element in the left side
        return findMin(num, left, middle);
    }
}

//findMin(num, 0, num.length - 1);
