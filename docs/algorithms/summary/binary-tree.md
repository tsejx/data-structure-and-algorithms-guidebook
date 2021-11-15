---
nav:
  title: 算法
  order: 2
group:
  title: 算法技巧总结
  order: 30
title: 二叉树解题技巧
order: 10
---

# 二叉树解题技巧

## 结点定义

```js
function TreeNode(val, left, right) {
  // 值
  this.val = val === undefined ? 0 : val;
  // 左子节点
  this.left = left === undefined ? null : left;
  // 右子节点
  this.right = right === undefined ? null : right;
}
```

## 二叉树特征

根结点左子树所有值比根结点小，右子树所有值比根节点大。

## 影子二叉树

## 二叉树搜索

- 深度优先搜索 DFS
  - 前序遍历
  - 中序遍历
  - 后序遍历
- 广度优先搜索 BFS
  - 层序遍历

### 前序遍历

首先遍历根节点，然后遍历左子树的时候，就把左子树放到相应的位置。遍历右子树的时候，就把右子树放到相应的位置。接着再把左子树展开，放到相应位置。最后把右子树展开，放到相应位置，此时就得到了最终前序遍历的结果。

遍历顺序：

1. 遍历根节点
2. 左子树
3. 右子树

```js
// 使用栈完成前序遍历
var preorderTraversal = function (root) {
  if (root === null) return [];
  // stack 用于进行递归的栈
  // ans 用于存放遍历的结果，不算在空间复杂度中
  let stack = [],
    ans = [];
  // 开始利用栈进行遍历
  while (root || stack.length) {
    // 模拟递归的压栈过程
    while (root) {
      ans.push(root.val);
      stack.push(root);
      root = root.left;
    }
    // 当无法压栈的时候，将 root.right 进行压栈
    root = stack.pop();
    root = root.right;
  }
  return ans;
};
```

复杂度分析：

- 时间复杂度：$O(n)$
- 空间复杂度：$O(h)$，`h` 表示树的高度

### 中序遍历

左子树作为一个整体放到左边，然后把根结点放到中间，最后把右子树作为一个整体放右边。接着再把左子树展开。最后把右子树展开，此时我们得到了最终中序遍历的结果。

遍历顺序：

1. 左子树
2. 根节点
3. 右子树

```js
var inorderTraversal = function (root) {
  let stack = [],
    ans = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    ans.push(root.val);
    root = root.right;
  }
  return ans;
};
```

复杂度分析：

- 时间复杂度：$O(n)$
- 空间复杂度：$O(h)$

相关题目：

- 验证二叉搜索树
- 找出二叉搜索树里面出现次数最多的数
- 找出二叉搜索树任意两个结点之间绝对值的最小值
- 一棵二叉搜索树的两个结点被交换了，恢复这棵二叉搜索树
- 删除二叉搜索树的结点
- 二叉搜索树出入一个新结点
- 二叉搜索树查找结点

### 后序遍历

左子树作为一个整体放到左边，右子树作为一个整体放到右边，再把左子树展开，接着把右子树展开，最后放上根结点。

遍历顺序：

1. 左子树
2. 右子树
3. 根节点

```js
var postOrderTraversal = function (root) {
  let stack = [],
    ans = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      ans.unshfit(root.val);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }
  return ans;
};
```

复杂度分析：

- 时间复杂度：$O(n)$
- 空间复杂度：$O(h)$

迭代写法的考点：判断当前结点是否应该放到 `ans` 中。

1. 是否有右子树
2. `pre` 指针是否指向当前结点的右子树

相关题目：

- 验证二叉搜索树

技巧：

用 `[Number.MAX_VALUE, Number, MIN_VALUE]` 表示空区间，也就是下界是一个最大的数，上界是一个最小的数。

相关题目：

- 最低公共祖先

### 层序遍历

```js
var levelOrder = function (root) {
  if (!root) return [];

  let ans = [],
    queue = [root];

  while (queue.length) {
    let len = queue.length;

    while (len) {
      const node = queue.shift();
      ans.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      len--;
    }
  }
  return ans;
};
```

### 序列化与反序列化

```js
var serialize = function (root) {
  if (root === null) return JSON.stringify([]);

  let queue = [root],
    ans = [];

  while (queue.length) {
    let len = queue.length;

    while (len) {
      const node = queue.shift();
      if (node !== null) {
        ans.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        ans.push(null);
      }
      len--;
    }
  }
  return JSON.stringify(ans);
};

var deserialize = function (data) {
  if (data === '[]') return null;
  data = JSON.parse(data);

  const root = new TreeNode(data[0]);
  let queue = [root];

  let i = 1;
  while (queue.length) {
    const node = queue.shift();
    if (data[i] !== null) {
      node.left = new TreeNode(data[i]);
      queue.push(node.left);
    }
    i++;
    if (data[i] !== null) {
      node.right = new TreeNode(data[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
};
```

### 二叉树深度

```js
var depth = function (root) {
  if (!root) return 0;

  let m = depth(root.left);
  let n = depth(root.right);

  return Math.max(m, n) + 1;
};
```

### 判断是否相等

```js
var isEqual = function (l1, l2) {
  if (!l1 && !l2) return true;
  if (!l1 || !l2 || l1.val !== l2.val) return false;
  return isEuqal(l1.left, l2.left) && isEqual(l1.right, l2.right);
};
```

### 判断是否子结构

```js
function isSubstructure(A, B) {
  if (!A || !B) return false;

  if (A.val !== B.val) {
    return isSubstructure(A.left, B) || isSubstructure(A.right, B);
  }

  function isSame(A, B) {
    if (!B) return true;
    if (!A) return false;
    if (A.val !== B.val) return false;

    return isSame(A.left, B.left) && isSame(A.right, B.right);
  }

  return isSame(A, B) || isSubstructure(A.left, B) || isSubstructure(A.right, B);
}
```

### 判断遍历序列是否构成二叉树

前序遍历：

```js

```

中序遍历：

```js

```

后序遍历：

```js
var verifyPostorder = function(postorder) {
  const arr = [1,6,3,2,5];
  const root = arr[arr.length-1];
  let mid = 0;

  // 左子树-所有值比 root 小
  for (let i = 0; i < arr.length-1 && arr[i] < root; i++) {
    mid++;
  }
  // 右子树-所有值比 root 大
  for (let i = ; ; i++) {
    if (postorder[i] < root) {
      return false;
    }
  }

  return (
    verifyPostorder(postorder.slice(0, mide)) &&
    verifyPostorder(mid+1, postorder.length-1)
  )
}
```

## 二叉树操作

### 插入结点

### 移动结点

### 删除结点

## 参考资料

- [LeetCode 题目总结 - 二叉树](https://tding.top/archives/101cdf53.html)
- [LeetCode 题目总结 - 二叉树的遍历](https://tding.top/archives/e1014f63.html)
- [LeetCode 题目总结 - 二叉搜索树](https://tding.top/archives/5f8aadd1.html)
- [LeetCode 题解汇总](https://tding.top/archives/91220368.html)
