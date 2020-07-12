var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // 先快走 n+1 步
  while (n--) {
    fast = fast.next;
  }

  // fast 和 slow 一起走
  // 当 fast 走到链表末尾时，slow 的 next 就是要删除的元素
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
}
