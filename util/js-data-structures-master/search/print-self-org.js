load("swap.js");
function seqSearch(arr, data) {
   for (var i = 0; i < arr.length; ++i) {
      if (arr[i] == data) {
         if (i > 0) {
            swap(arr,i,i-1);
         } 
         return true;
      }
   }
   return false;
}

var numbers = [5,1,7,4,2,10,9,3,6,8];
print(numbers);
for (var i = 1; i<=3; i++) {
	seqSearch(numbers, 4);
	print(numbers);
}
