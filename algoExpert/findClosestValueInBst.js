function findClosestValueInBst(tree, target) {
  let closestValue = null; 
  let minDifference = Infinity;
  let node = tree;

  while (node) {
    const difference = Math.abs(node.value - target);
    if (difference <= minDifference) {
      minDifference = difference;
      closestValue = node.value;
    }

    node = target < node.value ? node.left : node.right;
  }

  return closestValue
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//test
//{
//   "tree": {
//     "nodes": [
//       {"id": "10", "left": "5", "right": "15", "value": 10},
//       {"id": "15", "left": "13", "right": "22", "value": 15},
//       {"id": "22", "left": null, "right": null, "value": 22},
//       {"id": "13", "left": null, "right": "14", "value": 13},
//       {"id": "14", "left": null, "right": null, "value": 14},
//       {"id": "5", "left": "2", "right": "5-2", "value": 5},
//       {"id": "5-2", "left": null, "right": null, "value": 5},
//       {"id": "2", "left": "1", "right": null, "value": 2},
//       {"id": "1", "left": null, "right": null, "value": 1}
//     ],
//     "root": "10"
//   },
//   "target": 12
// }