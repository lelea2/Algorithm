// Breadth First Search (BFS) Graph Traversal in Javascript

const nodes = [
    {
        links: [1], // node 0 is linked to node 1
        visited: false
    }, {
        links: [0, 2], // node 1 is linked to node 0 and 2
        path: [],
        visited: false
    },
];


function bfs(start) {
    let listToExplore = [start];

    nodes[start].visited = true;

    while (listToExplore.length > 0) {
        let nodeIndex = listToExplore.shift(); // first of array
        nodes[nodeIndex].links.forEach((childIndex) => {
            if (!nodes[childIndex].visited) {
                nodes[childIndex].visited = true;
                listToExplore.push(childIndex);
            }
        });
    }
};

bfs(0);
