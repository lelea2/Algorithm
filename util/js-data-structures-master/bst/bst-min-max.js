load("bst.js")

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

print("tree:")
nums.root.nodePrint()

var min = nums.getmin();
print("The minimum value of the BST is: " + min);
print("\n");
var max = nums.getmax();
print("The maximum value of the BST is: " + max);
