var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(0);
  // 当前结点
  let cur = dummy;

  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      cur = cur.next;
      l1 = l1.next;
    } else {
      cur.next = l2;
      cur = cur.next;
      l2 = l2.next;
    }
  }

  while (l1 != null) {
    cur.next = l1;
    cur = cur.next;
    l1 = l1.next;
  }

  while (l2 != null) {
    cur.next = l2;
    cur = cur.next;
    l2 = l2.next;
  }

  return dummy.next;
};
