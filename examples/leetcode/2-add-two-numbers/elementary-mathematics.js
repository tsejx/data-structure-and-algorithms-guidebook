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
  let dummyHead = new ListNode(0);

  let p = l1,
    q = l2,
    // 进位
    carry = 0,
    // 将当前结点初始化为返回列表的哑结点
    cur = dummyHead;

  // 遍历 l1 和 l2 直至到达它们的尾端
  while (p != null || q !== null) {
    // 将 x 设为结点 p 的值。如果 p 已经到达 l1 的末尾，则将其值设置为 0。
    let x = p != null ? p.val : 0;
    // 同理，将 y 设为结点 q 的值。如果 q 已经到达 l2 的末尾，则将其值设置为 0。
    let y = q != null ? q.val : 0;

    // 当前位数 l1 和 l2 对应值，及进位求和
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);

    // 创建数值为（sum mod 10）的新结点
    // 并将其设置为当前结点的下个结点，然后将当前结点前进到下一个结点
    cur.next = new ListNode(sum % 10);
    cur = cur.next;

    // 同时，将 p 和 q 前进到下一个结点
    if (p != null) p = p.next;
    if (q != null) q = q.next;
  }
  // 结束循环后，检查 carry = 1 是否成立，如果成立，则向返回列表追加一个含有数字 1 的新结点
  if (carry > 0) {
    cur.next = new ListNode(carry);
  }

  return dummyHead.next;
};
