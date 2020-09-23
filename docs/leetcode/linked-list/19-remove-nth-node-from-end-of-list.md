---
nav:
  title: LeetCode
  order: 3
group:
  title: 链表
  order: 3
title: 19 - 删除链表的倒数第 N 个节点
order: 19
---

# 删除链表的倒数第 N 个节点

给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

**示例：**

```
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

**说明：**

给定的 n 保证是有效的。

**进阶：**

你能尝试使用一趟扫描实现吗？

## 解题思路

### 两次遍历算法

我们注意到这个问题可以容易地简化成另一个问题：删除从列表开头数起的第 `(L − n + 1)` 个结点，其中 `L` 是列表的长度。只要我们找到列表的长度 `L`，这个问题就很容易解决。

首先我们将添加一个 `哑结点` 作为辅助，该结点位于列表头部。

哑结点用来简化某些极端情况，例如列表中只含有一个结点，或需要删除列表的头部。在第一次遍历中，我们找出列表的长度 `L`。然后设置一个指向哑结点的指针，并移动它遍历列表，直至它到达第 `(L - n)` 个结点那里。我们把第 `(L - n)` 个结点的 `next` 指针重新链接至第 `(L - n + 2)` 个结点，完成这个算法。

```js
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let length = 0;
  let first = head;

  while (first !== null) {
    length++;
    first = first.next;
  }

  length -= n;
  first = dummy;

  while (length > 0) {
    length--;
    first = first.next;
  }
  first.next = first.next.next;
  return dummy.next;
};
```

#### 复杂度分析

- 时间复杂度：`O(L)`，该算法对列表进行了两次遍历，首次计算了列表的长度 `L` 其次找到第 `(L - n)` 个结点，操作执行了 `2L - n` 步，时间复杂度为 `O(L)`
- 空间复杂度：`O(1)`，我们只用了常量级的额外空间

### 一次遍历算法

**算法**

上述算法可以优化为只使用一次遍历。我们可以使用 `两个指针` 而不是一个指针。第一个指针从列表的开头向前移动 `n + 1` 步，而第二个指针将从列表的开头出发。现在，这两个指针被 `n` 个结点分开。我们通过同时移动两个指针向前来保持这个恒定的间隔，直到第一个指针到达最后一个结点。此时第二个指针将指向从最后一个结点数起的第 `n` 个结点。我们重新链接第二个指针所引用的结点的 `next` 指针指向该结点的下下个结点。

```jsx | inline
import React from 'react';
import img from '../../assets/leetcode/19-remove-nth-node-from-end-of-list.gif';

export default () => (
  <img alt="删除链表倒数第N个结点-一次遍历算法" src={img} width="50%" height="50%" />
);
```

```js
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // 先快走 n+1 步
  while (n--) {
    fast = fast.next;
  }

  // fast 和 slow 一起走
  // 当 fast 走到链表末尾时，slow 的 next 就是要删除的元素
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
};
```

#### 复杂度分析

- 时间复杂度：`O(L)`，该算法对含有 L 个结点的列表进行了一次遍历，因此时间复杂度为 `O(L)`
- 空间复杂度：`O(1)`，我们只用了常量级的额外空间

## 扩展

哑结点：哑结点就是放在第一个存放数据结点之前、头指针之后的结点。没有实际意义。好处是由于每个非空结点都有一个前驱，这是一种减少列表处理所需特殊情况的方法。
