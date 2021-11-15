---
nav:
  title: LeetCode
  order: 3
group:
  title: 链表
  order: 3
title: 148 - 排序链表
order: 148
---

# 排序链表

```js
const merge = function (left, right) {
  const dummyHead = new ListNode(0);

  let temp = dummyHead,
    temp1 = left,
    temp2 = right;

  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1;
      temp1 = temp1.next;
    } else {
      temp.next = temp2;
      temp2 = temp2.next;
    }
    temp = temp.next;
  }

  if (temp1 !== null) {
    temp.next = temp1;
  } else if (temp2 !== null) {
    temp.next = temp2;
  }

  return dummyHead.next;
};

const toSortList = function (head, tail) {
  if (head === null) return head;

  if (head.next === tail) {
    head.next = null;
    return head;
  }

  let slow = head,
    fast = head;

  while (fast !== tail) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tail) {
      fast = fast.next;
    }
  }

  const mid = slow;

  return merge(toSortList(head, mid), toSortList(mid, tail));
};

const sorting = function (head) {
  return toSortList(head, null);
};
```
