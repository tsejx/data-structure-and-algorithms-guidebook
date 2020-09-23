---
nav:
  title: 算法
  order: 2
group:
  title: 搜索
  order: 3
title: 深度优先搜索
order: 2
---

# 深度优先搜索

## 代码实现

### 利用递归实现

实现思路：

1. 创建数组存放返回结果
2. 当节点不为空时将节点 `push` 到数组里面
3. 获取当前节点的子节点，递归遍历子节点
4. 递归

```js
let nodeList = [];

function dfs(node, nodeList) {
  if (node) {
    nodeList.push(node);

    const children = node.children;

    for (let i = 0; i < children.length; i++) {
      bfs(children[i], nodeList);
    }
  }

  return nodeList;
}

const res = dfs(root, (nodeList = []));
```

