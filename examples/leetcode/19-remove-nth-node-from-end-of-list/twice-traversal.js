var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let length = 0;
  let first = head;

  while (first !== null) {
    length++;
    first = first.next;
  }

  length -= n;
  first = dummy;

  while (length > 0) {
    length--;
    first = first.next;
  }
  first.next = first.next.next;
  return dummy.next;
};
