---
nav:
  title: 数据结构
  order: 1
group:
  title: 抽象类型
  order: 2
title: 栈
order: 1
---

# 栈

**栈（Stack）** 是限定仅在表尾进行插入和删除操作的线性表。

我们把允许插入和删除的一端称为栈顶（top），另一端称为栈底（bottom），不含任何数据元素的栈称为**空栈**。栈又称为后进先出（Last In First Out）的线性表，简称 LIFO 结构。

栈的特殊之处就在于限制了线性表的插入和删除位置，它始终只在栈顶进行。这也就使得：栈底是固定的，最先进栈的智能在栈底。

- 栈的插入操作 `push`，叫做**进栈**，也称**压栈**、**入栈**
- 栈的删除操作 `pop`，叫做**出栈**，也有称**弹栈**

```jsx | inline
import React from 'react';
import img from '../../assets/stack-and-queue/lifo.png';

export default () => <img alt="后进先出的数据结构" src={img} width={360} />;
```
