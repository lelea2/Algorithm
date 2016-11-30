load("seq-search-self-org-data.js");
load("disp-arr.js");
load("swap.js");
var nums = [];
for (var i = 0; i < 10; ++i) {
   nums[i] = Math.floor(Math.random() * 11);
}
dispArr(nums);
print();
print("Enter a value to search for: ");
var val = parseInt(readline());
if (seqSearch(nums, val)) {
   print("Found element: ");
   print();
   dispArr(nums);
}
else {
   print(val + " is not in array.");
}
