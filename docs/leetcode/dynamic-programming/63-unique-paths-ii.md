---
nav:
  title: LeetCode
  order: 3
group:
  title: 动态规划
  order: 23
title: 63 - 不同路径 II
order: 63
---

# 不同路径 II

一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

## 解题思路

```js
var uniquePaths2 = function (obstacleGrid) {
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length;

  if (obstacleGrid[m - 1][n - 1] === 1) return 0;

  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    if (i > 0 && (obstacleGrid[i - 1][0] === 1 || dp[i - 1][0] === 0)) {
      dp[i][0] = 0;
      continue;
    }
    dp[i][0] = 1;
  }
  for (let i = 0; i < n; i++) {
    if (i > 0 && (obstacleGrid[0][i - 1] === 1 || dp[0][i - 1] === 0)) {
      dp[0][i] = 0;
      continue;
    }
    dp[0][i] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const top = obstacleGrid[i - 1][j] == 1 ? 0 : dp[i - 1][j];
      const left = obstacleGrid[i][j - 1] == 1 ? 0 : dp[i][j - 1];
      dp[i][j] = top + left;
    }
  }

  return dp[m - 1][n - 1];
};
```
