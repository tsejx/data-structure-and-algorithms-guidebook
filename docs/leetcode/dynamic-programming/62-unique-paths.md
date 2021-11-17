---
nav:
  title: LeetCode
  order: 3
group:
  title: 动态规划
  order: 23
title: 62 - 不同路径
order: 62
---

# 不同路径

一个机器人位于一个 `m x n`  网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

示例 1：

```
输入：m = 3, n = 7
输出：28
```

示例 2：

```
输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
```

示例 3：

```
输入：m = 7, n = 3
输出：28
```

示例 4：

```
输入：m = 3, n = 3
输出：6
```

提示：

- $1 <= m, n <= 100$
- 题目数据保证答案小于等于 $2 * 109$

## 解题思路

```js
// dp[i][j] -> 表示从 (0,0) 出发，到 (i, j) 有 dp[i][j] 条不同的路径
// dp[i][j] = dp[i-1][j] + dp[i][j-1]，因为 dp[i][j] 只有这两个方向过来
var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
```
