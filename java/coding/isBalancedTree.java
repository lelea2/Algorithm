/**
 * Given a binary tree, determine if it is height-balanced.
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees * of every node never differ by more than 1.
 */

// Definition for binary tree
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
        val = x;
    }
}

//This solution only care for height of the tree, not care how many node in each tree
public class Solution {
    public boolean isBalanced(TreeNode root) {
        if (root == null) { //empty tree
            return true;
        }

        if (getHeight(root) == -1) {
            return false;
        }

        return true;
    }

    //Get height of given tree
    public int getHeight(TreeNode root) {
        if (root == null)
            return 0;

        int left = getHeight(root.left);
        int right = getHeight(root.right);

        if (left == -1 || right == -1) {
            return -1;
        }
        if (Math.abs(left - right) > 1) { //inbalanced tree, height between left and right node is not equal
            return -1;
        }

        //return height of the tree
        return Math.max(left, right) + 1;
    }
}
