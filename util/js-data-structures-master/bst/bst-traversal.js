load("bst.js");

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);


print("tree")

nums.root.nodePrint();

print("Inorder traversal: ");

inOrder(nums.root);


print("PreOrder traversal: ");

preOrder(nums.root);


print("PostOrder traversal: ");

postOrder(nums.root);
