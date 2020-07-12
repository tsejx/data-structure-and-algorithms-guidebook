var isPalindrome = function(head) {
  if (!head || !head.next) return true;

  if (head.next.next === null) {
    return head.val === head.next.val;
  }

  // 快慢指针，为了找到需要翻转的半条链表的起点
  let fast = head;
  let slow = head;

  // 用户辅助翻转前半条链表
  let prev = null;

  while (fast && fast.next) {
    const cur = slow;

    slow = slow.next;
    fast = fast.next.next;

    cur.next = prev;
    prev = cur;
  }

  // 因为 fast 上一步遍历时步长为 2
  // 当 fast 为非 null 时，说明链表上结点数为单数
  // 亦即说明 slow 的下个结点才是中间结点
  if (fast) {
    slow = slow.next;
  }

  // 两个半长链表的遍历比较
  while (slow && prev) {
    // 当不一致时表示非回文链表
    if (slow.val !== prev.val) {
      return false;
    }
    slow = slow.next;
    prev = prev.next;
  }

  return true;
};
