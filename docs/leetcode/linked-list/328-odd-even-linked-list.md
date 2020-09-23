---
nav:
  title: LeetCode
  order: 3
group:
  title: 链表
  order: 3
title: 328 - 奇偶链表
order: 328
---

# 奇偶链表

给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

示例 1：

```plain
输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL
```

示例 2：

```plain
输入: 2->1->3->5->6->4->7->NULL
输出: 2->3->6->7->1->5->4->NULL
```

说明：

- 应当保持奇数结点和偶数结点的相对顺序
- 链表的第一个结点视为奇数结点，第二个结点视为偶数结点，以此类推

## 解题思路

将奇节点放在一个链表里，偶链表放在另一个链表里。然后把偶链表接在奇链表的尾部。

一个 LinkedList 需要一个头指针和一个尾指针来支持双端操作。我们用变量 `head` 和 `odd` 保存奇链表的头和尾指针。 `evenHead` 和 `even` 保存偶链表的头和尾指针。算法会遍历原链表一次并把奇节点放到奇链表里去、偶节点放到偶链表里去。遍历整个链表我们至少需要一个指针作为迭代器。这里 `odd` 指针和 `even` 指针不仅仅是尾指针，也可以扮演原链表迭代器的角色。

```jsx | inline
import React from 'react';
import img from '../../assets/leetcode/328-odd-even-linked-list.png';

export default () => <img alt="奇偶链表-解题思路" src={img} width="50%" height="50%" />;
```

```js
var oddEvenList = function(head) {
  if (!head || !head.next || !head.next.next) return head;
  // odd 是奇链表的当前节点
  let odd = head,
    // even 是偶链表的当前节点
    even = head.next,
    // evenHead 是偶链表的头节点，初始化为第二个节点，保存是为了后面拼接使用
    evenHead = even;

  while (even && even.next) {
    // 相当于 odd.next = odd.next.next 跳过第一个偶节点
    odd.next = even.next;
    // 偶节点向前进一位
    odd = odd.next;
    // 奇链表的下一个节点就是偶链表的节点
    even.next = odd.next;
    // 偶节点向前进一位
    even = even.next;
  }

  // 把偶链表头指针拼接到奇链表的最后
  odd.next = evenHead;

  // 返回奇链表层就是返回奇偶排序后的链表
  return head;
};
```

#### 复杂度分析

- 时间复杂度：`O(n)` 总共有 n 个节点，我们每个遍历一次
- 空间复杂度：`O(1)` 只需要四个指针
