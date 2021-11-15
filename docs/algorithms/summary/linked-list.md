---
nav:
  title: 算法
  order: 2
group:
  title: 算法技巧总结
  order: 30
title: 链表解题技巧
order: 5
---

# 链表解题技巧

当使用 `while` 循环的时候，需要有判断结束的条件 `while(condition)`，而 coditon 所包含的变量，通常都是需要在循环内变更的。

- 对于涉及链表长度的问题，往往会通过两个指针进行几何变换来得到想要的差额==要好好画图理解思考
- 使用一些临时变量来存储 `next` 指针，以完成插入删除等操作
- 对于插入和删除等操作，往往需要一个额外的指针来记录其前面的结点，再编程之前好好思考其间关系效果会比较好
- 对一些依赖于后面结点才可以完成的操作，使用递归的方式来解决
- 对于有些题目提前使用循环获得其链表的长度也是一种有效的方法
- 对于要考虑最后几个结点的操作，有事可以再遍历之前先将头指针向后移动 k 个结点（双指针？）
- 插入、删除操作往往需要使用目标结点前面的结点，所以往往会定义一个新的链表结点其 next 指针指向 head 结点

## 哨兵结点(哑结点)

哨兵（Sentinel）是个哑元结点（Dummy Node）。哑结点指数据域为空，指针域指向链表头结点的结点，它是为了简化边界条件而引入的。如果一个链表有哨兵结点的话，那么线性表的第一个元素应该是链表的第二个结点。

要对头结点进行操作时，考虑创建哨兵结点 `dummy`，使用 `dummy.next` 表示真正的头结点。这样可以避免处理头结点为空的边界问题（例如：`null` 或单结点问题）。

缓存头结点：

```js
var reorderList = function (head) {
  let dummy = new ListNode(-1);
  dummy.next = head;

  // ...

  // 指向头结点
  console.log(dummy.next);
};
```

## 双指针

链表相关的题目一般都需要用到两个指针：`prev` 指针和 `curr` 指针

```js
// Initialize slow & fast pointers
let slow = head,
  fast = head;

/**
 * Change this condition to fit specific problem
 * Attention: remember to avoid null-pointer error
 */
while (slow != null && fast != null && fast.next != null) {
  slow = slow.next; // Move slow pointer one step each time
  fast = fast.next.next; // Move fast pointer two step each time

  if (slow == fast) {
    // Change this condition to fit specific problem
    return true;
  }
}

return false; // Change return value to fit specific problem
```

**提示**

它与我们在数组中学到的内容类似。但它可能更棘手而且更容易出错。你应该注意以下几点：

1. 在调用 next 字段之前，始终检查结点是否为空

获取空结点的下一个结点将导致空指针错误。例如，在我们运行 `fast = fast.next.next` 之前，需要检查 `fast` 和 `fast.next` 不为空

2. 仔细定义循环的结束条件

**复杂度分析**

空间复杂度分析容易。如果只使用指针，而不是用任何其他额外的空间，那么空间复杂度将是 `O(1)`。但是，时间复杂度的分析比较困难。为了得到答案，我们需要分析 `运行循环的次数`。

在前面的查找循环示例中，假设我们每次异动较快的指针 2 步，每次移动较慢的指针 1 步。

1. 如果沒有循环，快指针需要 `N/2` 次才能到达链表的末尾，其中 N 是链表的长度
2. 如果存在循环，则快指针需要 `M` 次才能赶上慢指针，其中 M 是列表中循环的长度

显然，`M <= N`。所以我们将循环运行 `N` 次。对于每次循环，我们只需要常量级的时间。因此，该算法的时间复杂度总共为 `O(N)`。

自己分析其他问题以提高分析能力。别忘了考虑不同的条件。如果很难对所有情况进行分析，请考虑最糟糕的情况。

### 快慢指针

快慢指针，就是定义两个指针，一个指针（慢指针）的移动速度为 v，另一个指针（快指针）速度为 2v，如此一来，经过相同的时间，快指针走过的路程是慢指针的两倍。因为链表无法得知长度，所以尝试用这种方法来达到某种效果（长度、检测环等）。

- 如果链表结点个数是奇数，slow 最后位置就是中点
- 如果链表结点个数是偶数，slow 最后位置就是中间两个结点中较小的那个

所以如果拆分链表，记得 `slow.next = null`

用于检测链表是否存在环

```js
let slow = head,
  fast = head;

while (fast.next != null && fast.next.next != null) {
  slow = slow.next;
  fast = fast.next.next;
}
```

## 链表搜索

### 寻找链表中间结点

快指针每次移动两步，而慢指针每次移动一步。

```js
var findMidNode = function (head) {
  let fast = head,
    slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 偶数 <-> 奇数
  const slow;
};
```

### 寻找链表倒数第 K 个结点

快指针首先移动 K 步，随后与慢指针一起到达末尾。

```js
var getKthFromEnd = function (head, k) {
  let slow = head,
    fast = head;

  for (let i = 1; i < k; i++) {
    if (fast.next) {
      fast = fast.next;
      continue;
    }

    return null;
  }

  while (fast != null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};
```

### 循环遍历

```java
// 链表的遍历通常设定一个指针指向头部，然后遍历直至指针指的结点部位 NULL
ListNode cur = head;

while (cur != null) {
    // ...
    cur = cur.next;
}
```

## 链表操作

- 反转链表
- 重排链表
- 拷贝链表
- 合并链表
- 拆分链表
- 旋转

### 反转链表

构建两个指针，一个指向翻转后结点要指向的结点，另一个遍历原链表

```js
var reverseList = function (head) {
  // 上一个结点和下一个结点
  let prev = null,
    cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return prev;
};
```

复杂度分析：

- 时间复杂度：$O(n)$，其中 $n$ 是链表的长度。需要遍历链表一次。
- 空间复杂度：$O(1)$

扩展：

#### 遍历头插法

如果只知道待翻转结点的前驱结点

一个指针用来指向待翻转结点的前一个结点（`pre`），固定，一个指针用来指示待翻转结点（`cur`），一个指针用来保持结点转移后原链表的次序（`start`）。

```js
// i 用来指示翻转的次数
while (cur != null && i < n) {
  const next = cur.next;
  cur.next = pre.next;
  start.next = next;
  pre.next = cur;
  cur = next;
  i++;
}
```

#### 删除尾插法

如果直到待翻转的第一个结点的前驱结点和尾结点

`pre` 之后的一个结点为删除结点，`pre` 直接指向待删除结点之后，将待删除结点插入 tail 之后，直到 `pre.next != tail`

```js
cur = pre.next;

if (i == k) {
  while (pre.next != tail) {
    temp = pre.next;
    pre.next = temp.next; // delete
    temp.next = tail.next; // insert
    tail.next = temp;
  }
  pre = cur;
}
```

采用递归一把梭穿到最后找到逆转后的头结点，然后从后往前挨个儿逆转，即后继结点指向前驱结点，前驱结点接着 NULL，顺序往前，直到完成整个逆转过程。

```js
function reverseList(head) {
  if (head == null || head.next == null) return head;
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}
```

### 重排链表

### 拷贝链表

先合并再拆分

```js
var copyList = function (head) {
  let cur = head;
  while (cur) {
    cur.next = new Node(cur.val, cur.next);
    cur = cur.next;
  }
  cur = head.next;
  let pre = head,
    res = head.next;
  while (cur.next && pre.next) {
    pre.next = pre.next.next;
    cur.next = next.next.next;
    pre = pre.next;
    cur = cur.next;
  }
  pre.next = null;
  return res;
};
```

### 合并链表

### 分割链表

#### 分割奇数节点链表

```js
var divideOdd = function (head) {};
```

#### 分割偶数节点链表

```js
var divideEven = function (head) {};
```

### 删除链表结点

构建两个指针，一个指针遍历链表，另一个指针紧跟后面进行删除操作

```js
let dummyHead = new ListNode(0);
dummyHead.next = head;

let pre = dummyHead,
  cur = head;

while (cur != null && cur.next != null) {
  if (cur.val == val) {
    pre.next = cur.next;
  } else {
    pre = pre.next;
  }

  cur = cur.next;
}

return dummyHead.next;
```

### 删除当前结点

记录上一个结点

```js
let pre = slow;

while (fast != null) {
  fast = fast.next;
  pre = slow;
  slow = slow.next;
}

pre.next = slow.next;
```

### 删除下个结点

```js
let cur = head;

while (cur.next != null) {
  if (cur.val == cur.next.val) {
    // 前后值相同只需要更换下一个结点位置即可
    cur.next = cur.next.next;
  } else {
    cur = cur.next;
  }
}
```

## 参考资料

- [链表的基本操作与拓展操作（Java 语言实现）](https://blog.csdn.net/why_still_confused/article/details/51333257)
- [高效面试之 LeetCode 链表题汇总](https://blog.csdn.net/cqkxboy168/article/details/40464351)
- [单链表类题目总结（应用双指针）](https://blog.csdn.net/KusanoNEU/article/details/72758159)
- [LeetCode 链表习题总结](https://blog.csdn.net/zhou373986278/article/details/78223278)
- [LeetCode 题目总结 - 链表](https://tding.top/archives/551df4d4.html)
