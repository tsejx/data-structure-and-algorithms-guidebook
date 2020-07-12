/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 进位记录
  let carry = 0;
  // 返回结果链表的头部结点
  let head = null;
  let extra = null;
  while (l1 || l2) {
    // 计算求和并移动结点
    let sum = carry;
    if (l1) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    // 存储结果
    let node = new ListNode(sum % 10);
    if (head === null) {
      head = node;
      extra = node;
    } else {
      extra.next = node;
      extra = node;
    }
    // 重置进位
    carry = 0;
    if (sum >= 10) {
      // 如果当前结果链表中的值大于 10，则需要进一位
      carry = 1;
    }
  }

  if (carry === 1) {
    let extraNode = new ListNode(1);
    extra.next = extraNode;
    extra = extraNode;
  }
  return head;
};
