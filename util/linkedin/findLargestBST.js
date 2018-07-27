// Given a Binary Tree, write a function that returns the size of the largest subtree
// which is also a Binary Search Tree (BST).
// If the complete Binary Tree is BST, then return the size of whole tree.

// The subtrees need to pass the following information up the tree for the finding the largest BST.
// 1) Whether the subtree itself is BST or not (In the following code, is_bst_ref is used for this purpose)
// 2) If the subtree is left subtree of its parent, then maximum value in it. And if it is right subtree then minimum value in it.
// 3) Size of this subtree if this subtree is BST (In the following code, return value of largestBSTtil() is used for this purpose)

