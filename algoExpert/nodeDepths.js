function nodeDepths(root) {
  // Write your code here.
  return sumDepths(root,0);
}

function sumDepths(node, level){
  if(!node) return 0;

  return level + sumDepths(node.left, level + 1) + sumDepths(node.right, level + 1);
  
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
