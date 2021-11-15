---
nav:
  title: LeetCode
  order: 3
group:
  title: 链表
  order: 3
title: 234 - 回文链表
order: 234
---

# 回文链表

请判断一个链表是否为回文链表。

示例 1:

```plain
输入: 1->2
输出: false
```

示例 2:

```plain
输入: 1->2->2->1
输出: true
```

## 解题思路

### 双指针

回文链表的性质：它关于中垂线是轴对称的，也就是说只要翻转其中一半，则两条 `半链表` 值出现的顺序是一致的。方法二中将后半链表进行了翻转，额外维持一条新的半链表。官方标答的思路就是，在找中间结点的过程中直接将前半个链表进行翻转。

需要注意在链表节点数为奇数时，也就是当遍历结束后 `fast != null` 的情况，要将 `slow` 结点跳过中间结点，否则两条半链表不一样长。

```js
var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  if (head.next.next === null) {
    return head.val === head.next.val;
  }

  // 快慢指针，为了找到需要翻转的半条链表的起点
  let fast = head;
  let slow = head;

  // 用于辅助翻转前半条链表
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
```
