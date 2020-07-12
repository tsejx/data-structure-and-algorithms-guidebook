/**
 * 尾递归法，从头节点开始，递归反转它的每个节点，直到 null
 */
function reverseLinkedList(head) {
  if (!head || !head.next) return head;
  head = reverse(null, head);
  return head;
}

function reverse(prev, curr) {
  if (!curr) return prev;
  let next = curr.next;
  curr.next = prev;
  return reverse(curr, next);
}
