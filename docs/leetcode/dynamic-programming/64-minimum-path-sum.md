---
nav:
  title: LeetCode
  order: 3
group:
  title: 动态规划
  order: 23
title: 64 - 最小路径和
order: 64
---

# 最小路径和

[原题链接](https://leetcode-cn.com/problems/minimum-path-sum/)

给定一个包含非负整数的 `m x n` 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例 1:

```
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
```

示例 2:

```
输入：grid = [[1,2,3],[4,5,6]]
输出：12
```

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 200`
- `0 <= grid[i][j] <= 100`

## 解题思路

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  const dp = new Array(m).fill().map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    dp[i][0] = (i > 0 ? dp[i - 1][0] : 0) + grid[i][0];
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = (j > 0 ? dp[0][j - 1] : 0) + grid[0][j];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[m - 1][n - 1];
};
```
