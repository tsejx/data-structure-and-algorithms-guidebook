/**
 * 迭代
 * @param {*} l1
 * @param {*} l2
 */
function mergeTwoLists(l1, l2) {
  // 哨兵结点
  let prehead = new ListNode(-1);
  let prev = prehead;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  prev.next = l1 == null ? l2 : l1;

  return prehead.next;
}
