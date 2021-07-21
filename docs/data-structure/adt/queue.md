---
nav:
  title: 数据结构
  order: 1
group:
  title: 抽象类型
  order: 2
title: 队列
order: 2
---

# 队列

队列（Queue）是只允许在一端进行插入操作，而在另一端进行删除操作的线性表。

队列是一种先进先出（First In First Out）的线性表，简称 FIFO。允许插入的一端称为队尾，允许删除的一端称为队头。假设队列是 `q = (a1, a2, ..., an)`，那么 `a1` 就是队头元素，二 `an` 是队尾元素。这样我们就可以删除时，总是 从 `a1` 开始，而插入时，列在最后。这也比较符合我们通常生活中的习惯，排在第一个的优先出列，最后来的当然排在队伍最后。

```jsx | inline
import React from 'react';
import img from '../../assets/stack-and-queue/fifo.png';

export default () => <img alt="先进先出的数据结构" src={img} width={360} />;
```

在 FIFO 数据结构中，将首先处理添加到队列中的第一个元素。

如上图所示，队列是典型的 FIFO 数据结构。插入（insert）操作也称作入队（enqueue），新元素始终被添加在 `队列的末尾`。 删除（delete）操作也被称为出队（dequeue)。 你只能移除 `第一个元素`。

## 实现

为了实现队列，我们可以使用动态数组和指向队列头部的索引。

如上所述，队列应支持两种操作：入队和出队。入队会向队列追加一个新元素，而出队会删除第一个元素。 所以我们需要一个 `索引` 来指出起点。

### 缺点

上面的实现很简单，但在某些情况下效率很低。 随着起始指针的移动，浪费了越来越多的空间。 当我们有空间限制时，这将是难以接受的。

```jsx | inline
import React from 'react';
import img from '../../assets/stack-and-queue/queue-shortcoming-1.png';

export default () => <img alt="队列实现缺点1" src={img} width={360} />;
```

让我们考虑一种情况，即我们只能分配一个最大长度为 5 的数组。当我们只添加少于 5 个元素时，我们的解决方案很有效。 例如，如果我们只调用入队函数四次后还想要将元素 10 入队，那么我们可以成功。

但是我们不能接受更多的入队请求，这是合理的，因为现在队列已经满了。但是如果我们将一个元素出队呢？

```jsx | inline
import React from 'react';
import img from '../../assets/stack-and-queue/queue-shortcoming-2.png';

export default () => <img alt="队列实现缺点2" src={img} width={360} />;
```

实际上，在这种情况下，我们应该能够再接受一个元素。
