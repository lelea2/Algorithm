/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public TreeNode reverse(TreeNode node) {
        if (node == null) return null;
        
        TreeNode temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        if (node.left != null) {
            invertTree(node.left);
        }
        if (node.right != null) {
            invertTree(node.right);
        }
        return node;
    }
    
    public TreeNode invertTree(TreeNode root) {
       root = reverse(root);
       return root;
    }
}