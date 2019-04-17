// https://medium.com/@mbetances1002/data-structures-binary-search-trees-explained-5a2eeb1a9e8b
// Binary search trees in JavaScript

// A binary tree is a type of tree in which each node has a maximum of two children. Binary trees can be:
//      full: every node has either zero or two children. Nodes do not have only one child.
//      complete: every level in the tree is fully filled with the possible exception of 
//                the last level, which should be filled from left to right.
//      perfect: it is both full and complete and must have exactly 2^(n - 1) nodes.

// A BST's time complexity has an average of O(log n) for insert and find as you need not go 
// through each node in the tree.

// A BST has a max of two children where one child is to the left of (less than) and one is to the right of (greater than) their parent.

// We will build our BST with the use of a constructor, 
// which is an object type that is 
// leveraged to create many objects of the same type. 
// A constructor will allow us to create multiple BSTs 
// with the same properties and methods, which is very 
// useful for creating our subtrees.

function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// Inserting a Node

BinarySearchTree.prototype.insert = function (value) {
    let subTree = value < this.value ? 'left' : 'right';

    if (this[subTree]) {
        this[subTree].insert(value);
    } else {
        this[subTree] = new BinarySearchTree(value);
    }

};

const tree = new BinarySearchTree(0);
tree.insert(2);
tree.insert(1);
tree.insert(30);
tree.insert(10);
tree.insert(-1);

// Finding a Node

BinarySearchTree.prototype.contains = function (value) {
    if (value === this.value) {
        return true;
    }

    let subTree = value < this.value ? 'left' : 'right';
    if (this[subTree]) {
        return this[subTree].contains(value);
    } else {
        return false;
    }
};

console.log(tree.contains(12));
console.log(tree.contains(-1));

// Tree traversal
