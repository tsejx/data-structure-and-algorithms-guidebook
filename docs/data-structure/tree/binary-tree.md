---
nav:
  title: 数据结构
  order: 1
group:
  title: 树
  order: 7
title: 二叉树
order: 2
---

# 二叉树

二叉树（Binary tree）是每个节点最多只有两个分支（即不存在分支度大于 2 的节点）的树结构。通常分支被称作 `左子树` 或 `右子树`。二叉树的分支具有左右次序，不能随意颠倒。

树和二叉树的三个主要差别：

- 树的节点个数至少为 1，而二叉树的节点个数可以为 0
- 树中的最大度数（节点数量）没有限制，而二叉树的节点的最大度数为 2
- 树的节点没有左右之分，而二叉树的节点有左右之分

## 性质

- 若二叉树的层次从 0 开始，则在二叉树的第 `i` 层至多有 `2^i` 个结点（`i >= 0`）
  - `i = 1` 时，只有一个根节点 `2^(i - 1) = 2^ 0 = 1`
- 高度为 `k` 的二叉树最多有 `2^(k + 1) - 1` 个结点（`k>=-1`）（空树的高度为 `-1`）
  - `i = 2` 时，`2^k - 1 = 2^2 - 1 = 3` 个节点
- 对任何一棵二叉树，如果其叶子结点（度为 0）数为 `m`，度为 2 的结点数为 `n`, 则 `m = n + 1`

## 特殊类型

```jsx | inline
import React from 'react';
import img from '../../assets/tree/complete-binary-tree-and-full-binary-tree.jpg';

export default () => <img alt="满二叉树和完全二叉树" src={img} width="35%" />;
```

### 满二叉树

上图编号 2 的二叉树中，叶子节点全部都在最底层，除了叶子节点之外，每个节点都有左右两个子节点，这种二叉树就叫做 **满二叉树**（Full Binary Tree）。

满二叉树的性质：

1. 一棵树深度为 `h`，最大层数为 `k`，深度与最大层数相同 `k = h`
2. 叶子数为 `2^h`
3. 第 `k` 层的节点数是 `2^(k-1)`
4. 总节点数是 `2^(k - 1)`，且总节点数一定是奇数

### 完全二叉树

上图编号 3 的二叉树中，叶子节点都在最底下两层，最后一层的叶子节点都靠左排列，并且除了最后一层，其他层的节点个数都达到最大，这种二叉树叫做 **完全二叉树**（Complete Binary Tree）。

完全二叉树是效率很高的数据结构，堆是一种完全二叉树或者近似完全二叉树，所以效率极高，像十分常用的排序算法、Dijkstra 算法、Prim 算法等都要用堆才能优化，二叉排序树的效率也要借助平衡性来提高，而平衡性基于完全二叉树。

以上两种特殊类型的二叉树都能通过公式计算总节点和树高。

|          | 满二叉树                    | 完全二叉树        |
| :------- | :-------------------------- | :---------------- |
| 总节点 k | `2^(h - 1) <= k <= 2^h - 1` | `k = 2^h - 1`     |
| 树高 h   | `h = log2 k + 1`            | `h = log2(k + 1)` |

## 遍历

- **中序遍历**：即 `左-根-右` 遍历，对于给定的二叉树根，寻找其左子树；对于其左子树的根，再去寻找其左子树；递归遍历，直到寻找最左边的节点 `i`，其必然为叶子，然后遍历 `i` 的父节点，再遍历 `i` 的兄弟节点。随着递归的逐渐出栈，最终完成遍历：
- **先序遍历**：即 `根-左-右` 遍历
- **后序遍历**：即 `左-右-根` 遍历

实际上，二叉树的前、中、后序遍历就是一个递归的过程。

```jsx | inline
import React from 'react';
import img from '../../assets/tree/binary-tree-iteration.jpg';

export default () => <img alt="二叉树的遍历" src={img} width="50%" />;
```

### 前序遍历

前序遍历首先访问根节点，然后遍历左子树，最后遍历右子树。

### 中序遍历

中序遍历是先遍历左子树，然后访问根节点，然后遍历右子树。

通常来说，对于二叉搜索树，我们可以通过中序遍历得到一个递增的有序序列。

### 后序遍历

后序遍历是先遍历左子树，然后遍历右子树，最后访问树的根节点。

值得注意的是，当你删除树中的节点时，删除过程将按照后序遍历的顺序进行。 也就是说，当你删除一个节点时，你将首先删除它的左节点和它的右边的节点，然后再删除节点本身。

另外，后序在数学表达中被广泛使用。 编写程序来解析后缀表示法更为容易。 这里是一个例子：

您可以使用中序遍历轻松找出原始表达式。 但是程序处理这个表达式时并不容易，因为你必须检查操作的优先级。

如果你想对这棵树进行后序遍历，使用栈来处理表达式会变得更加容易。 每遇到一个操作符，就可以从栈中弹出栈顶的两个元素，计算并将结果返回到栈中。

---

**参考资料：**

- [数据结构中各种树](https://www.cnblogs.com/maybe2030/p/4732377.html)
- [二叉树遍历算法总结](https://charlesliuyx.github.io/2018/10/22/%E3%80%90%E7%9B%B4%E8%A7%82%E7%AE%97%E6%B3%95%E3%80%91%E6%A0%91%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C/)