/**
 * Convert sorted array to binary search tree
 */

//Idea: this is to test your ability for recursive
//Find the middle index of the array, that will be the rot of the array
//recursively devided the array into half by half and continuously find the root for subtree

public static TreeNode sortedArrayToBST(int[] num, int start, int end) {
    if (num.length == 0) { //If empty array, then empty tree
        return null;
    }

    int startIndex = (start == null) ? 0 : start;
    int endIndex = (end == null) ? (num.length -1) : end; //end index is last index of the array
    int mid = (startIndex + endIndex) / 2;
    //Create treenode, left and right
    TreeNode root = new TreeNode(num[mid]);
    root.left = sortedArrayToBST(num, startIndex, mid -1);
    root.right = sortedArrayToBST(num, mid, endIndex);
    return root;
}
