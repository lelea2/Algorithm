// min --> Minimum horizontal distance from root
// max --> Maximum horizontal distance from root
// hd  --> Horizontal distance of current node from root 

// O(n^2)

// find min max distance with respect to root
findMinMax(tree, min, max, hd)
  if tree is NULL then return;

  if hd is less than min then
    min = hd;
  else if hd is greater than max then
    max = hd;

  findMinMax(tree->left, min, max, hd-1);
  findMinMax(tree->right, min, max, hd+1);

 
printVerticalLine(tree, line_no, hd)
  if tree is NULL then return;

  if hd is equal to line_no, then
    print(tree->data);
  printVerticalLine(tree->left, line_no, hd-1);
  printVerticalLine(tree->right, line_no, hd+1); 

verticalOrder(Node node) 
  // Find min and max distances with resepect to root
  findMinMax(node, val, val, 0);

  // Iterate through all possible vertical lines starting
  // from the leftmost line and print nodes line by line
  for (int line_no = val.min; line_no <= val.max; line_no++)
    printVerticalLine(node, line_no, 0);

// The below have bugs
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */
// var verticalOrder = function(root) {
//     var store =  {};
//     traverse(root, 0, store);
//     var columnKey = Object.keys(store).sort(function(a,b){return a - b});
//     var results = [];
//     for(var i = 0; i < columnKey.length; i++){
//         results.push(store[columnKey[i]]);
//     }
//     return results
// };

// var traverse = (node, count, columns) => {
//     if(!node) return;
//     if(columns[count]) columns[count].push(node.val);
//     else columns[count] = [node.val];
//     if(node.left) traverse( node.left, count-1 ,columns)
//     if(node.right) traverse(node.right, count+1,  columns)

// }