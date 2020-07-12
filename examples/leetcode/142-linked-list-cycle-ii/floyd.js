/**
 * 给定链表，返回链表开始入环的第一个节点，如果链表无环，则返回 null
 */
var detectCycle = function(head) {
  let slow = head,
    fast = head;

  while (true) {
    // 快指针先到达链表尾部，表示链表无环
    if (fast === null || fast.next === null) return null;

    fast = fast.next.next;
    slow = slow.next;

    // 相遇点，也表示链表存在环
    if (fast === slow) break;
  }

  fast = head;

  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
};
