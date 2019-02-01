/**

1. Node with id 0 is root. It will only be a parent.

2. When deleting a node, if the node has children don't delete, but if it ever reaches a state of having no children delete it.

addNode(id: int, parentId: int): void

deleteNode(id: int): void

*/

// {
//   "0": { parent: null, children: [1, 2, 3, 4] },
//   "1": { parent: 0, children: [5, 6] },
// }

const storeTree = {
  "0": { parent: null, children: [] }
};

const addNode = (id, parentId) => {
  const key = `${parentId}`;
  const nodeKey = `${id}`;
  if (id === parentId) {
     return;
  }
  if (!storeTree[nodeKey]) {
    storeTree[nodeKey] = { parent: parentId, children: [] };
  } else if (!storeTree[nodeKey].parent) {
    storeTree[nodeKey].parent = parentId;
  } else { // parent exist already
    return; // not execute adding node
  }
  if (!storeTree[key]) {
    storeTree[key] = { parentId: null, children: [id] };
  } else if(storeTree[key] && storeTree[key].children.indexOf(id) < 0) { // id not exist yet
    storeTree[key].children.push(id);
  } else {
    // value already exists on the store Tree
  }
  // console.log(storeTree);
};

addNode(2, 0);
addNode(1, 0);
addNode(5, 0);
addNode(6, 2);

console.log('addNode', storeTree);

const deleteNode = (id) => {
  const nodeKey = `${id}`;
  if (storeTree[nodeKey] && storeTree[nodeKey].children.length > 0) {
    return; // delete node but node already has children.
  } else if (storeTree[nodeKey] && storeTree[nodeKey].children.length === 0) {
    const parentId = `${storeTree[nodeKey].parent}`;
    // console.log(parentId);
    if (parentId && storeTree[parentId]) { // if parent Id exists
      const index = storeTree[parentId].children.indexOf(id);
      storeTree[parentId].children.splice(index, 1);
    }
    delete storeTree[nodeKey];
  }
  // console.log('>>>>>delete', storeTree);
};

deleteNode(1);
deleteNode(5);
deleteNode(6);
deleteNode(2);
deleteNode(0);
deleteNode(2);
console.log('deleteNode', storeTree);
