// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // O(v+ e) runtime, v is vertices, e is edges
  // O(v)  spacetime
  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;

//structure
// {
//   "nodes": [
//     {"children": ["B", "C", "D"], "id": "A", "value": "A"},
//     {"children": ["E", "F"], "id": "B", "value": "B"},
//     {"children": [], "id": "C", "value": "C"},
//     {"children": ["G", "H"], "id": "D", "value": "D"},
//     {"children": [], "id": "E", "value": "E"},
//     {"children": ["I", "J"], "id": "F", "value": "F"},
//     {"children": ["K"], "id": "G", "value": "G"},
//     {"children": [], "id": "H", "value": "H"},
//     {"children": [], "id": "I", "value": "I"},
//     {"children": [], "id": "J", "value": "J"},
//     {"children": [], "id": "K", "value": "K"}
//   ],
//   "startNode": "A"
// }

// output
// ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]
