function ListNode(val) {
  this.val = val;
  this.next = null
}

const hasCycle = function (head) {
  let nodeSeen = new Set();

  while (head !== null) {
    if (nodeSeen.has(head)) {
      return true
    } else {
      nodeSeen.add(head);
      head = head.next
    }
  }

  return false
}