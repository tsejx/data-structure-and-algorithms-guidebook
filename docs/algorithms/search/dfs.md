---
nav:
  title: 算法
  order: 2
group:
  title: 搜索
  order: 3
title: 树图 - 深度优先搜索
order: 11
---

# 深度优先搜索

深度优先搜索属于图算法的一种（Depth First Search，DFS），相对于 **层（水平）** 的概念，更偏向于 **垂直** 的概念，其过程简要来说是对每一个可能的分支路径深入到不能再深入为止，而且每个节点只能访问一次。

## 代码实现

DFS 时间复杂度 $O(N*K), k = max(time(b), time(d))$

### 利用递归实现

实现思路：

1. 创建数组存放返回结果
2. 当节点不为空时将节点 `push` 到数组里面
3. 获取当前节点的子节点，递归遍历子节点
4. 递归

```js
let dfs = (node) => {
  // 定义空数组，用于存储节点
  let nodes = [];
  // 当节点不为空时
  if (node !== null) {
    // 将当前节点push进数组中
    nodes.push(node);
    // 取出当前节点的孩子节点
    let children = node.children;
    // 循环所有的孩子节点
    if (children) {
      for (let i = 0; i < children.length; i++) {
        // 递归调用并将结果进行拼接
        nodes = nodes.concat(dfs(children[i]));
      }
    }
  }
  // 返回结果
  return nodes;
};
```

模版

```js
const func = function (originData) {
  // 存储最终结果
  let result = [];
  // 深度优先搜索，搜索节点
  dfs([]);

  // 必须入参为前一个节点数值，初始化值是根节点，以空字符串或者空数组为主
  // 视情况而定入参：如增加筛选条件的下标
  function dfs(current) {
    // 如果结果是所有节点，则直接将 target 加入到结果中
    // 注意 1：如果是对象，最好重新构造一个，避免对存储结果中的数据造成影响，可以在加入时重建，也可以在传参时进行
    // 注意 2：如果结果是叶子节点或者其他条件，结果增加筛选项目，也可以在回调前增加筛选项目
    // 注意 3：可能存在结果需要转化的，特别是整体记过转化的放在这里，单个转化的建议放在传参部分
    result.push(new Array(current));

    for (let i = 0; i < originData.length; i++) {
      // 注意 3：这里可能需要进行数据转化，单个转化建议放在此处，如果是全部转化
      // 注意 4：这里传给 DFS 的所有结果都要回溯，因为 originData[i + 1] 也是在 current 基础上进行的，包括与 current 相关的结果已经把当前节点加进去的也要回溯
      current.push(originData[i]);
      dfs(current);
      current.pop();

      // 避免回溯的简单写法如下
      dfs([...current, originData[i]]);
    }

    return result;
  }
};
```

### 利用栈实现

```js
let deepTraversal = function (node) {
  // 定义保存结果数组nodes，以及辅助数组stack（栈）
  let stack = [];
  let nodes = [];
  if (node) {
    // 推入当前处理的node
    stack.push(node);
    while (stack.length) {
      // 将最后一个弹出
      let item = stack.pop();
      // 取出他的孩子节点
      let children = item.children;
      // 将这个节点push进结果数组
      nodes.push(item);
      // 将孩子节点倒过来push进辅助栈中。例如当前节点有两个孩子，children1和children2
      // 那么stack里面为[children2,children1],这样pop()的时候children1会先弹出，
      // 进而children1会先被push进nodes，先遍历children1的孩子节点（以此类推）
      if (children) {
        for (let i = children.length - 1; i >= 0; i--) {
          stack.push(children[i]);
        }
      }
    }
  }
  // 返回结果数组
  return nodes;
};
```

## 分析步骤

1. 解决方案：确定是否用 DFS，常见子序列、子集合、求所有解决方案用 DFS
2. 节点：确定节点，先看看输出结果最小单位内容能不能作为节点，如果不能，找一个转换方式
3. 扩展筛选条件：哪些节点是可以继续搜索的
4. 节点扩展：如何从上一层节点扩展到下一层
5. 结果分析：什么时候产出结果，停止继续搜索。分析结果是每个节点，还是每个节点路径，还是叶子节点，还有可能是部分节点、部分节点路径，如果是部分，则需要增加筛选条件
6. 结果转化：节点可能需要转化成其他形式，成为题目所需要的结果，可以在结果阶段统一转换，也可以在加入结果时一步步进行转化
7. 套代码模版
