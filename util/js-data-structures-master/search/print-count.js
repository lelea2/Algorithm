load("insertion-sort.js");
load("disp-arr.js");
load("count.js");
var nums = [];
for (var i = 0; i < 100; ++i) {
   nums[i] = Math.floor(Math.random() * 101);
}
insertionSort(nums);
dispArr(nums);
print();
print("Enter a value to count: ");
var val = parseInt(readline());
var retVal = count(nums, val);
print("Found " + retVal + " occurrences of " + val + ".");
