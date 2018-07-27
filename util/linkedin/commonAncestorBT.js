function commonAncestorBT(node, n1, n2) {
  if(!node) {
    return;
  }
  let val = node.value;
  if (n1 == val || n2 ==val) {
    return node;
  }
  let left = commonAncestorBT(node.left, n1, n2);
  let right = commonAncestorBT(node.right, n1, n2);
  if (left && right) {
   return node;
  }
  return (left) ? left : right;
}


function printAncestor(node, target){
  if(!node) {
    return false;
  }

  if(node.value == target) {
    return true;
  }

  if (printAncestor(node.left, target) || printAncestor(node.rigth, target)) {
    console.log(node.value);
    return true;
  }

  return false;
}

function isBST(node) {
  if (!node) {
    return true;
  }

  if (node.left != null && node.left.value > node.value) {
    return false;
  }

  if (node.right !=null && node.right.value < node.value) {
    return false;
  }

  if (!isBST(node.left) || !isBST(node.right)) {
    return false;
  }

  return true;
}
