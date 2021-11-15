---
nav:
  title: 数据结构
  order: 1
group:
  title: 链表
  order: 4
title: 单链表
order: 2
---

# 单链表

单链表中的每个结点不仅包含值，还包含链接到下一个结点的 `引用字段`。通过这种方式，单链表将所有结点按顺序组织起来。

```jsx | inline
import React from 'react';
import img from '../../assets/singly-linked-list/simple-singly-linked-list.png';

export default () => <img alt="简单的单链表" src={img} width={360} />;
```

蓝色箭头显示单个链接列表中的结点是如何组合在一起的。

## 结构定义

以下是单链表中结点的典型定义：

```js
function ListNode(val) {
  this.val = val;
  this.next = null;
}
```

在大多数情况下，我们将使用头结点(第一个结点)来表示整个列表。

## 基本操作

与数组不同，我们无法在常量时间内访问单链表中的随机元素。 如果我们想要获得第 `i` 个元素，我们必须从头结点逐个遍历。 我们按索引来访问元素平均要花费 `O(N)` 时间，其中 `N` 是链表的长度。

例如，在上面的示例中，头结点是 23。访问第 3 个结点的唯一方法是使用头结点中的 `next` 字段到达第 2 个结点（结点 6）; 然后使用结点 6 的 `next` 字段，我们能够访问第 3 个结点。

你可能想知道为什么链表很有用，尽管它在通过索引访问数据时（与数组相比）具有如此糟糕的性能。 在接下来的两篇文章中，我们将介绍插入和删除操作，你将了解到链表的好处。

之后，我们将为你提供练习设计自己的单链表。

## 添加操作

如果我们想在给定的结点 `prev` 之后添加新值，我们应该：

1. 使用给定值初始化新结点 `cur`

```jsx | inline
import React from 'react';
import img from '../../assets/singly-linked-list/add-node-step1.png';

export default () => <img alt="新结点赋值" src={img} width={360} />;
```

2. 将 `cur` 的 `next` 字段链接到 `prev` 的下一个结点 `next`

```jsx | inline
import React from 'react';
import img from '../../assets/singly-linked-list/add-node-step2.png';

export default () => <img alt="新结点连接下个结点" src={img} width={360} />;
```

3. 将 `prev` 中的 `next` 字段链接到 `cur`

```jsx | inline
import React from 'react';
import img from '../../assets/singly-linked-list/add-node-step3.png';

export default () => <img alt="上个结点的下个结点连接到新结点" src={img} width={360} />;
```

与数组不同，我们不需要将所有元素移动到插入元素之后。因此，您可以在 O(1) 时间复杂度中将新结点插入到链表中，这非常高效。

### 示例

```jsx | inline
import React from 'react';
import img from '../../assets/singly-linked-list/add-node-sample-step1.png';

export default () => <img alt="添加操作示例1" src={img} width={360} />;
```

让我们在第二个结点 6 之后插入一个新的值 9。

我们将首先初始化一个值为 9 的新结点。然后将结点 9 链接到结点 15。最后，将结点 6 链接到结点 9。

插入之后，我们的链表将如下所示：

```jsx | inline
import React from 'react';
import img from '../../assets/singly-linked-list/add-node-sample-step2.png';

export default () => <img alt="添加操作示例2" src={img} width={360} />;
```

### 在开头添加结点

众所周知，我们使用头结点来代表整个列表。

因此，在列表开头添加新节点时更新头结点 `head` 至关重要。

1. 初始化一个新结点 `cur`；
2. 将新结点链接到我们的原始头结点 `head`。
3. 将 `cur` 指定为 `head`。

例如，让我们在列表的开头添加一个新结点 9。

1. 我们初始化一个新结点 9 并将其链接到当前头结点 23。

```jsx | inline
import React from 'react';
import img from '../../assets/singly-linked-list/add-node-at-head-step1.png';

export default () => <img alt="在开头添加结点1" src={img} width={360} />;
```

2. 指定结点 9 为新的头结点。

```jsx | inline
import React from 'react';
import img from '../../assets/singly-linked-list/add-node-at-head-step2.png';

export default () => <img alt="在开头添加结点2" src={img} width={360} />;
```

> 如何在列表的末尾添加新的结点？我们还能使用类似的策略吗？

## 删除操作

如果我们想从单链表中删除现有结点 `cur`，可以分两步完成：

1. 找到 `cur` 的上一个结点 `prev` 及其下一个结点 `next`；

```jsx | inline
import React from 'react';
import img from '../../assets/singly-linked-list/remove-linked-node-step1.png';

export default () => <img alt="删除链表结点1" src={img} width={360} />;
```

2. 接下来链接 `prev` 到 `cur` 的下一个节点 `next`。

```jsx | inline
import React from 'react';
import img from '../../assets/singly-linked-list/remove-linked-node-step2.png';

export default () => <img alt="删除链表结点2" src={img} width={360} />;
```

在我们的第一步中，我们需要找出 `prev` 和 `next`。使用 `cur` 的参考字段很容易找出 `next`，但是，我们必须从头结点遍历链表，以找出 `prev`，它的平均时间是 `O(N)`，其中 `N` 是链表的长度。因此，删除结点的时间复杂度将是 `O(N)`。

空间复杂度为 `O(1)`，因为我们只需要常量空间来存储指针。

### 示例

```jsx | inline
import React from 'react';
import img from '../../assets/singly-linked-list/remove-linked-node-sample-step1.png';

export default () => <img alt="删除链表结点示例1" src={img} width={360} />;
```

让我们尝试把结点 6 从上面的单链表中删除。

1. 从头遍历链表，直到我们找到前一个结点 `prev`，即结点 23

2. 将 `prev`（结点 23）与 next（结点 15）链接

```jsx | inline
import React from 'react';
import img from '../../assets/singly-linked-list/remove-linked-node-sample-step2.png';

export default () => <img alt="删除链表结点示例2" src={img} width={360} />;
```

结点 6 现在不在我们的单链表中。

### 删除第一个结点

如果我们想删除第一个结点，策略会有所不同。

正如之前所提到的，我们使用头结点 head 来表示链表。我们的头是下面示例中的黑色结点 23。

```jsx | inline
import React from 'react';
import img from '../../assets/singly-linked-list/remove-first-node-step1.png';

export default () => <img alt="删除第一个结点1" src={img} width={360} />;
```

如果想要删除第一个结点，我们可以简单地 `将下一个结点分配给 head`。也就是说，删除之后我们的头将会是结点 6。

```jsx | inline
import React from 'react';
import img from '../../assets/singly-linked-list/remove-first-node-step2.png';

export default () => <img alt="删除第一个结点2" src={img} width={360} />;
```

链表从头结点开始，因此结点 23 不再在我们的链表中。
