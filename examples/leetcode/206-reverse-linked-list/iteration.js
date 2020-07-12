var reverseLinkedList = function(head) {
  if (!head || !head.next) return head;

  let prev = null, cur = head;

  while(cur.next !== null) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};
