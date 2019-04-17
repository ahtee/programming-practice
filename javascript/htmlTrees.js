// Data Structures with trees!
// 04-16-19
// https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393

// Implementation

// Node constructor
function Node(data) {
    this.data = data;
    this.parent = null;
    this.next = null;

    // optional children property for a tree like a webpage.
    // this.children = [];
}

// Tree constructor
function Tree(data) {
    // First, create new instance of node
    const node = new Node(data);
    // Assign the initial node as the root of the tree.
    this.root = node;
}

const tree = new Tree(5);
// tree.root;
// Node { data: 5, parent: null, next: null }

// Implement an algorithm on the Tree constructor's prototype to traverse a tree in DFS
Tree.prototype.traverseDFS = function (callback) {
    (function recurse(currNode) {
        for (let i = 0, length = currNode.children.length; i < length; i++) {
            return recurse(currNode.children[i]);
        }
        callback(currNode);

    })(this.root);
};