function insertionSort(arr) {
   var temp, inner;
   for (var outer = 1; outer <= arr.length-1; ++outer) {
      temp = arr[outer];
      inner = outer;
      while (inner > 0 && (arr[inner-1] >= temp)) {
         arr[inner] = arr[inner-1];
         --inner;
      }
      arr[inner] = temp;
   }

   return arr;
}
