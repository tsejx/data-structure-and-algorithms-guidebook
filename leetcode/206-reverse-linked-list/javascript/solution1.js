function reverseLinkedList(head) {
  if (!head || !head.next) return head;
  let prev = null,
    curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
  return head;
}
