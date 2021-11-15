---
nav:
  title: LeetCode
  order: 3
group:
  title: 链表
  order: 3
title: 206 - 反转链表
order: 206
---

# 反转链表

反转单链表

示例：

```plain
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

进阶：

你可以迭代或递归地反转链表

## 解题思路

### 迭代

在遍历列表时，将当前节点的 `next` 指针改为指向前一个元素。由于节点没有引用其上一个节点，因此必须事先存储其前一个元素。在更改引用之前，还需要另一个指针来存储下一个节点。不要忘记在最后返回新的头引用！

```js
var reverseLinkedList = function (head) {
  if (!head || !head.next) return head;

  let prev = null,
    cur = head;

  while (cur.next !== null) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};
```

### 哑节点

```js
let dummy = new ListNode(0);
dummy.next = head;

while (head && head.next) {
  let reverseNode = head.next;
  let nextNode = reverseNode.next ? reverseNode.next : null;

  reverseNode.next = dummy.next;
  dummy.next = reverseNode;
  head.next = nextNode;
}

return dummy.next;
```

#### 复杂度分析

- 时间复杂度：`O(n)`，假设 `n` 是列表的长度，时间复杂度是 `O(n)`
- 空间复杂度：`O(1)`
