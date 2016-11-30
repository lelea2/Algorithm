function Node(data, left, right) {
   this.data = data;
   this.left = left;
   this.right = right;
   this.show = show;
   this.count = 1;
   this.nodePrint = nodePrint;
}

function nodePrint(prefix, isTail) {
/// http://stackoverflow.com/questions/4965335/how-to-print-binary-tree-diagram
    print(prefix + (isTail ? "└── " : "├── ") + this.data);
    // for (int i = 0; i < 2 - 1; i++) {
    if (this.left) {
      this.left.nodePrint(prefix + (isTail ? "    " : "│   "), false);
    }

    if (this.right) {
      this.right.nodePrint(prefix + (isTail ? "    " : "│   "), false);
    }
}

function show() {
   return this.data;
}

function BST() {
   this.root = null;
   this.insert = insert;
   this.inOrder = inOrder;
   this.preOrder = preOrder;
   this.postOrder = postOrder;
   this.getmin = getmin;
   this.getmax = getmax;
   this.find = find;
   this.remove = remove;
   this.removeNode = removeNode;
   this.getSmallest = getSmallest;
   this.update = update;
}

function insert(data) {
   var n = new Node(data, null, null);
   if (this.root == null) {
      this.root = n;
   }
   else {
      var current = this.root;
      var parent;
      while (true) {
         parent = current;
         if (data < current.data) {
            current = current.left;
            if (current == null) {
               parent.left = n;
               break;
            }
         }
         else {
            current = current.right;
            if (current == null) {
               parent.right = n;
               break;
            }
         }
      }
   }
}

function inOrder(node) {
   if (!(node == null)) {
      inOrder(node.left);
      print(node.show() + " ");
      inOrder(node.right);
   }
}

function preOrder(node) {
   if (!(node == null)) {
      print(node.show() + " ");
      preOrder(node.left);
      preOrder(node.right);
   }
}

function postOrder(node) {
   if (!(node == null)) {
      postOrder(node.left);
      postOrder(node.right);
      print(node.show() + " ");
   }
}

function getmin() {
   var current = this.root;
   print("debug: " + current.data);
   while (!(current.left == null)) {
      current = current.left;
   }
   return current.data;
}

function getmax() {
   var current = this.root;
   while (!(current.right == null)) {
      current = current.right;
   }
   return current.data;
}

function find(data) {
   var current = this.root;
   while (current && current.data != data) {
      if (data < current.data) {
         current = current.left;
      }
      else {
         current = current.right;
      }
      if (current == null) {
         return null;
      }
   }
   return current;
}

function getSmallest(node) {
   if (node.left == null) {
      return node;
   }
   else {
      return getSmallest(node.left);
   }
}

function remove(data) {
   root = removeNode(this.root, data);
}

function removeNode(node, data) {
   if (node == null) {
      return null;
   }
   if (data == node.data) {
      // node has no children
      if (node.left == null && node.right == null) {
         return null;
      }
      // node has no left child
      if (node.left == null) {
         return node.right;
      }
      // node has no right child
      if (node.right == null) {
         return node.left;
      }
      // node has two children
      var tempNode = getSmallest(node.right);
      node.data = tempNode.data;
      node.right = removeNode(node.right, tempNode.data);
      return node;
   }
   else if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
   }
   else {
      node.right = removeNode(node.right, data);
      return node;
   }
}

function update(data) {
  var grad = this.find(data);
  grade.count++;
  // print (grade.count)
  return grade;
}

function prArray(arr) {
  print(arr[0].toString() + ' ');
  for (var i = 1; i < arr.length; ++i) {
    print(arr[i].toString() + ' ');
    if (i % 10 == 0) {
      print("");
    }
  }
}

function genArray(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr[i] = Math.floor(Math.random() * 101);
  }
  return arr;
}
// end of bst classes
