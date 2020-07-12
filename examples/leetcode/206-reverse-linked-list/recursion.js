/**
 * 递归法，不断递归反转当前节点 head 的后继节点
 */
function reverseLinkedList(head) {
  if (!head || !head.next) return head;

  // 存储下个反转的结点
  let next = head.next;

  // 递归反转
  let reverseHead = reverseLinkedList(next);

  // 变更指针
  next.next = head;
  head.next = null;

  return reverseHead;
}
