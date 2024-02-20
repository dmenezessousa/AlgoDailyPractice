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

  depthFirstSearch(array = [], node = this) {
    // Write your code here.
    array.push(node.name);
    node.children.forEach((child)=> this.depthFirstSearch(array, child));
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;