function hasCycle(head) {
  if (head === null || head.next === null) return false;

  let slow = head,
    fast = head;
  while (slow.next != null || fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
}
