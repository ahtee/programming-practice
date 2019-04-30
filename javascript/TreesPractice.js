function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree(value) {
  let root = new Node(value);
  
  function insert(value) {
    value < this.value ? this.left : insert(value);
    value > this.value ? this.right : insert(value);
  }
}

function traverseDFSInOrder(tree) {
  if (this.root) {
    traverseDFSInOrder(this.left);
    console.log(this.value);
    traverseDFSInOrder(this.right);
  }
}
