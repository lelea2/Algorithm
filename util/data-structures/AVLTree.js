// AVLTree ///////////////////////////////////////////////////////////////////
//   This file is originally from the Concentré XML project (version 0.2.1)
//   Licensed under GPL and LGPL
//
//   Modified by Jeremy Stephens.

// Pass in the attribute you want to use for comparing
function AVLTree(n, attr) {
    this.init(n, attr);
}

AVLTree.prototype.init = function(n, attr) {
    this.attr = attr;
    this.left = null;
    this.right = null;
    this.node = n;
    this.depth = 1;
    this.elements = [n];
};

AVLTree.prototype.balance = function() {
    var ldepth = this.left  == null ? 0 : this.left.depth;
    var rdepth = this.right == null ? 0 : this.right.depth;

    if (ldepth > rdepth + 1) {
        // LR or LL rotation
        var lldepth = this.left.left  == null ? 0 : this.left.left.depth;
        var lrdepth = this.left.right == null ? 0 : this.left.right.depth;

        if (lldepth < lrdepth) {
            // LR rotation consists of a RR rotation of the left child
            this.left.rotateRR();
            // plus a LL rotation of this node, which happens anyway
        }
        this.rotateLL();
    } else if (ldepth + 1 < rdepth) {
        // RR or RL rorarion
        var rrdepth = this.right.right == null ? 0 : this.right.right.depth;
        var rldepth = this.right.left  == null ? 0 : this.right.left.depth;

        if (rldepth > rrdepth) {
            // RR rotation consists of a LL rotation of the right child
            this.right.rotateLL();
            // plus a RR rotation of this node, which happens anyway
        }
        this.rotateRR();
    }
};

AVLTree.prototype.rotateLL = function() {
    // the left side is too long => rotate from the left (_not_ leftwards)
    var nodeBefore = this.node;
    var elementsBefore = this.elements;
    var rightBefore = this.right;
    this.node = this.left.node;
    this.elements = this.left.elements;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.node = nodeBefore;
    this.right.elements = elementsBefore;
    this.right.updateInNewLocation();
    this.updateInNewLocation();
};

AVLTree.prototype.rotateRR = function() {
    // the right side is too long => rotate from the right (_not_ rightwards)
    var nodeBefore = this.node;
    var elementsBefore = this.elements;
    var leftBefore = this.left;
    this.node = this.right.node;
    this.elements = this.right.elements;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.node = nodeBefore;
    this.left.elements = elementsBefore;
    this.left.updateInNewLocation();
    this.updateInNewLocation();
};

AVLTree.prototype.updateInNewLocation = function() {
    this.getDepthFromChildren();
};

AVLTree.prototype.getDepthFromChildren = function() {
    this.depth = this.node == null ? 0 : 1;
    if (this.left != null) {
        this.depth = this.left.depth + 1;
    }
    if (this.right != null && this.depth <= this.right.depth) {
        this.depth = this.right.depth + 1;
    }
};

AVLTree.prototype.compare = function(n1, n2) {
    v1 = n1[this.attr];
    v2 = n2[this.attr];
    if (v1 == v2) {
        return 0;
    }
    if (v1 < v2) {
        return -1;
    }
    return 1;
};

AVLTree.prototype.add = function(n)  {
    var o = this.compare(n, this.node);
    if (o == 0) {
        this.elements.push(n);
        return false;
    }

    var ret = false;
    if (o == -1) {
        if (this.left == null) {
            this.left = new AVLTree(n, this.attr);
            ret = true;
        } else {
            ret = this.left.add(n);
            if (ret) {
                this.balance();
            }
        }
    } else if (o == 1) {
        if (this.right == null) {
            this.right = new AVLTree(n, this.attr);
            ret = true;
        } else {
            ret = this.right.add(n);
            if (ret) {
                this.balance();
            }
        }
    }

    if (ret) {
        this.getDepthFromChildren();
    }
    return ret;
};

// Given the beginning of a value, return the elements if there's a match
AVLTree.prototype.findBest = function(value) {
    var substr = this.node[this.attr].substr(0, value.length).toLowerCase();
    var value = value.toLowerCase();

    if (value < substr) {
      if (this.left != null) {
        return this.left.findBest(value);
      }
      return [];
    }
    else if (value > substr) {
      if (this.right != null) {
        return this.right.findBest(value);
      }
      return [];
    }
    return this.elements;
};
