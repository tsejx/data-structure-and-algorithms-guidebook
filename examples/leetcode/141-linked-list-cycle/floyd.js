var hasCycle = function(head) {
  if (head === null || head.next === null) return false;

  let slow = head,
    fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    // 指针相遇
    if (slow === fast) return true;
  }

  return false;
};
