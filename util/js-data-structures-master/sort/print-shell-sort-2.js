load("shell-sort.js")
var nums = new CArray(10);
nums.setData();
print("Before Shellsort: \n");
print(nums.toString());
print("\nDuring Shellsort: \n");
nums.shellSort();
print("\nAfter Shellsort: \n");
print(nums.toString());
