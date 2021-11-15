---
nav:
  title: 算法
  order: 2
group:
  title: 搜索
  order: 3
title: 树图 - 广度优先搜索
order: 10
---

# 广度优先搜索

**广度优先搜索算法**（Breadth First Search，缩写为 BFS），又译作**宽度优先搜索**，或**横向优先搜索**，是一种图形搜索算法。简单的说，BFS 是从根节点开始，沿着树的宽度遍历树的节点。如果所有节点均被访问，则算法中止。

## 代码实现

广度优先遍历二叉树，也就是按层次去遍历。依次遍历根节点，然后是左子节点和右子节点。所以要遍历完当前节点的所有子节点。根据左右子节点的顺序来输出，所以就是先进先出的原则，那么我们当然就想到了队列这个数据结构。

### 利用队列实现

实现思路：

1. 创建 `nodeList` 存储最终返回结果
2. 创建一个队列存放
3. 当队列不为空时，获取队列第一元素，存进 `nodeList`
4. 遍历所有的子节点，存进队列尾部
5. 队列为空时推出循环并结束

<br />

```js
function bfs(node) {
  // 定义保存结果数组nodes，以及辅助数组queue（队列）
  const nodes = [],
    queue = [];
  if (node) {
    // 将节点push进队列中
    queue.push(node);
    // 当队列长度不为0时循环
    while (queue.length) {
      // 将值从头部弹出
      const item = queue.shift();
      // 取出当前节点的孩子节点
      const children = item.children;
      // 将当前节点push进结果数组
      nodes.push(item);
      // 将孩子节点顺次push进辅助队列中。例如当前节点有两个孩子，children1和children2
      // 那么queue里面为[children1,children2],这样shift()的时候children1会先弹出，
      // 进而children1会先被push进nodes，children1的孩子节点会顺次push进queue中 [child2,child1-1]（以此类推）
      if (children) {
        for (let i = 0; i < children.length; i++) {
          queue.push(children[i]);
        }
      }
    }
  }
  return nodes;
}
```
