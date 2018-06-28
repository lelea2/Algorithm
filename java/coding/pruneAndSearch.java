// A naive approach to find the n-th largest number in the given array would sort the whole array
// Performance: O(nlog(n))

// Approach: quick sort => O(c*n) c is small constant
/**
  * Prune and search
  * @param array array to be searched in
  * @param index order of the searched value (indexed starting at 0)
  * @param left first elemenent, which can be touched
  * @param right first element, which cant be touched
  * @return n-th largest value
  */
public static int pruneAndSearch(int[] array, int index, int left, int right) {
   int boundary = left;
   for (int i = left + 1; i < right; i++) { 
       if (array[i] > array[left]) { //place after the pivot every value, which is larger than the pivot
           swap(array, i, ++boundary);
       }
   }
   swap(array, left, boundary); //place pivot in the middle
   //quicksort end

   if (boundary == index) return array[boundary]; //found
   else if (boundary > index) return pruneAndSearch(array, index, left, boundary); //prune the right branch
   else return pruneAndSearch(array, index, boundary + 1, right); //prune the left branch  
}

/**
* Swap elements in the given array
* @param array array
* @param left index of the element 1
* @param right index of the element 2
*/
private static void swap(int[] array, int left, int right) {
   int tmp = array[right];
   array[right] = array[left];
   array[left] = tmp;
}