---
nav:
  title: LeetCode
  order: 3
group:
  title: 链表
  order: 3
title: 141 - 环形链表
order: 141
---

# 环形链表

给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

示例 1：

```plain
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

```jsx | inline
import React from 'react';
import img from '../../assets/leetcode/question-141-1.png';

export default () => <img alt="环形链表-1" src={img} width="20%" height="20%" />;
```

示例  2：

```plain
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

```jsx | inline
import React from 'react';
import img from '../../assets/leetcode/question-141-2.png';

export default () => <img alt="环形链表-2" src={img} width="10%" height="10%" />;
```

示例 3：

```plain
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

```jsx | inline
import React from 'react';
import img from '../../assets/leetcode/question-141-3.png';

export default () => <img alt="环形链表-2" src={img} width="5%" height="5%" />;
```

**进阶：**

你能用 `O(1)`（即，常量）内存解决此问题吗？

## 解题思路

### 哈希表

**思路**

我们可以通过检查一个结点此前是否被访问过来判断链表是否为环形链表。常用的方法是使用哈希表。

**算法**

我们遍历所有结点并在哈希表中存储每个结点的引用（或内存地址）。如果当前结点为空结点 null（即已检测到链表尾部的下一个结点），那么我们已经遍历完整个链表，并且该链表不是环形链表。如果当前结点的引用已经存在于哈希表中，那么返回 true（即该链表为环形链表）。

```js
var hasCycle = function(head) {
  if (!head) return false;

  const hashMap = new Map();
  let cur = head;
  hashMap.set(cur, true);

  while (cur.next) {
    if (hashMap.get(cur.next)) {
      return true;
    }
    hashMap.set(cur.next, true);
    cur = cur.next;
  }
  return false;
};
```

#### 复杂度分析

- 时间复杂度：`O(n)`，对于含有 n 个元素的链表，我们访问每个元素最多一次。添加一个结点到哈希表中只需要花费 `O(1)` 的时间。
- 空间复杂度：`O(n)`，空间取决于添加到哈希表中的元素数目，最多可以添加 n 个元素。

### 双指针

使用双指针（快慢指针）实现，其实这种判断方法也称为 Floyd 判圈算法。

Floyd 判圈算法类似龟兔赛跑，需要用到快指针 fast 和慢指针 slow。算法流程是：

- slow 每次移动 1 步，fast 移动两步
- 一直移动下去，若 slow、fast 相遇，那么必有环；若 slow 或 fast 抵达边界，那么不存在环

```js
var hasCycle = function(head) {
  if (head === null || head.next === null) return false;

  let slow = head,
    fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    // 指针相遇
    if (slow === fast) return true;
  }

  return false;
};
```

**复杂度分析**

- 时间复杂度：`O(n)`，让我们将 `n` 设为链表中结点的总数。为了分析时间复杂度，我们分别考虑下面两种情况。
  - **链表中不存在环**：快指针将会首先到达尾部，其时间取决于列表的长度，也就是 `O(n)`。
  - **链表中存在环**：我们将慢指针的移动过程划分为两个阶段：非环部分与环形部分：
    1. 慢指针在走完非环部分阶段后将进入环形部分：此时，快指针已经进入环中 `迭代次数 = 非环部分长度 = N`
    2. 两个指针都在环形区域中：考虑两个在环形赛道上的运动员 - 快跑者每次移动两步而慢跑者每次只移动一步。其速度的差值为 1，因此需要经过 `二者之间距离 / 速度差值` 次循环后，快跑者可以追上慢跑者。这个距离几乎就是 `环形部分长度 K` 且速度差值为 1，我们得出这样的结论 `迭代次数 = 近似于 环形部分长度 K`。

因此，在最糟糕的情形下，时间复杂度为 `O(N+K)`，也就是 `O(n)`。

- 空间复杂度：`O(1)`，我们只使用了慢指针和快指针两个结点，所以空间复杂度为 `O(1)`。
