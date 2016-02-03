/**
 * Create Mirror image of a binary tree
 */

//Recursive solution
public static TreeNode mirrorBinaryTree(TreeNode root) {

    if(root == null || (root.left == null && root.right == null))
        return root;

    TreeNode temp = root.left;
    root.left = root.right;
    root.right = temp;

    mirrorBinaryTree(root.left);
    mirrorBinaryTree(root.right);


    return root;

}


//Interative solution
public static TreeNode mirrorBinaryTreeIterative(TreeNode root){
    if(root == null || (root.left == null && root.right == null)) {
        return root;
    }

    TreeNode parent = root;
    Stack<TreeNode> treeStack = new Stack<TreeNode>();
    treeStack.push(root);

    while(!treeStack.empty()) {
        parent = treeStack.pop();

        TreeNode temp = parent.right;
        parent.right = parent.left;
        parent.left = temp;

        if(parent.right != null) {
            treeStack.push(parent.right);
        }
        if(parent.left != null) {
            treeStack.push(parent.left);
        }
    }
    return root;
}
