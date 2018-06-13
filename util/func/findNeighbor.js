/*
    Write a function that takes, as an argument, the root node of a binary tree. None of the ‘neighbor’ fields
    of any node in the tree have been assigned; they are all initially set to ‘null’. Your function should assign them.
    You may assume that the ‘left’ and ‘right’ fields have already been assigned.

    If the function were to take this tree as its input:

                      (root)
                    /        \
                   •          •
                /     \          \
               •       •          •
              /                /     \
             •                •       •
          /     \          /             \
         •       •        •               •     
               
               
     The function should populate the ‘neighbor’ fields to look like this:
               
               
                      (root)
                    /        \
                   •    ——>   •
                /     \          \
               •  ——>  •    ——>   •
              /                /     \
             •      ———>      •  ——>  •
          /     \          /             \
         •  ——>  •   ——>  •      ———>     •   
 */

// {
//   leftChild: obj
//   rightChild: obj
//   neighbor: obj
// }


// runtime: O(n^2) 
// space: O(?)
// n == # of nodes in tree


function assignNeighbors(root, leftmost) {
  // your code here
  if (root.children[0] && root.children[1]) {
    root.children[0].neighbor = root.children[1];
    root.children[1].neighbor = leftmost;
    assignNeighbors(root.children[1], findClosetNeighbor(leftmost));
    assignNeighbors(root.children[0], findClosetNeighbor(root.children[1]));
    return;
  }
  let child = root.children[0] || root.children[1];
  if (child) {
    // child.neighbor = 
    child.neighbor = leftmost;
    assignNeighbors(child, findCloseNeighbor(leftmost));
  }
}

function findClosetNeighbor(root) {
  if (root) {
    return root[0] || root[1] || findClosetNeighbor(root.neighbor);
  }
  return null;
}