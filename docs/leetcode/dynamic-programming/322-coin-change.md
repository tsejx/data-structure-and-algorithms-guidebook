---
nav:
  title: LeetCode
  order: 3
group:
  title: 动态规划
  order: 23
title: 322 - 零钱兑换
order: 322
---

# 零钱兑换

[原题链接](https://leetcode-cn.com/problems/coin-change/)

给你一个整数数组 `coins` ，表示不同面额的硬币；以及一个整数 `amount` ，表示总金额。

计算并返回可以凑成总金额所需的 **最少的硬币个数** 。如果没有任何一种硬币组合能组成总金额，返回 `-1` 。

你可以认为每种硬币的数量是无限的。

示例  1：

```
输入：coins = [1, 2, 5], amount = 11
输出：3
解释：11 = 5 + 5 + 1
```

示例 2：

```
输入：coins = [2], amount = 3
输出：-1
```

示例 3：

```
输入：coins = [1], amount = 0
输出：0
```

示例 4：

```
输入：coins = [1], amount = 1
输出：1
```

示例 5：

```
输入：coins = [1], amount = 2
输出：2
```

## 解题思路

1. 最后一步：
   1. 已经用硬币兑换好了 10 元，再添加 1 个 1 元的硬币，凑成 11 元
   2. 已经用硬币兑换好了 9 元，再添加 1 个 2 元的硬币，凑成 11 元
   3. 已经用硬币兑换好了 6 元，再添加 1 个 5 元的硬币，凑成 11 元
2. 子问题：用 `f(x)` 表示如何利用最少的硬币组成 `x` 元
   1. 原问题表达为 `f(11)`
   2. 如何利用最少的硬币组成 10 元 -> `f(10)`
   3. 如何利用最少的硬币组成 9 元 -> `f(9)`
   4. 如何利用最少的硬币组成 6 元 -> `f(6)`

利用 `f(x)` 表示最后一步的三个选项：

- `f(10)` + 1 个 1 元得到 `f(11)`
- `f(9)` + 1 个 2 元得到 `f(11)`
- `f(6)` + 1 个 5 元得到 `f(11)`

3. 递推关系

```js
f(11) = min(f(11 - 1), f(11 - 2), f(11 - 5)) + 1;
// 第一次替换
f(x) = min(f(x - 1), f(x - 2), f(x - 5)) + 1;
// 第二次替换
f(x) = min(f(x - y), y in conins) + 1;

// 伪代码
for (let i = 0; i < conins.length; i++) {
  f(x) = min(f(x), f(x - i) + 1);
}
```

4. `f(x)` 的表达

直接把 `f(x)` 当成一个哈希函数。

- 如果要表达的是一维的信息，就用一维数组 `dp[]` 表示 `f(x)`
- 如果要表达的是二维的信息，就用二维数组 `dp[][]` 表示 `f(x, y)`

在此题中 `f(x)` 中的 `x` 是一个整数，`f(x)` 要表达的信息是一维信息。

5. 初始条件与边界

从问题的起始输入开始调用这个递归函数，如果递归函数出现 **不正确/无法计算/越界** 的情况，那么这就是你需要处理的初始条件和边界。

情况：

- `coinChange(0)`：可以发现给定 0 元时，`dp[amount-x]` 会导致数组越界，需要特别处理 `dp[0]`
- `coinChange(-1)` 或者 `coinChange(-2)` 的调用也会遇到数组越界，说明这些情况都需要做特别处理

处理技巧：

- 如果结果本身的存放不越界，只是计算过程中出现越界，应该作为 <strong style="color:red">初始条件</strong>，比如 `dp[0]`、`dp[1]`
- 如果结果本身的存放时越界的，那么需要作为 <strong style="color:red">边界</strong> 来处理，比如 `dp[-1]`

6. 计算顺序

初始条件： `dp[0] = 0`

- `dp[1] = dp[0] + 1 元硬币 = 1`
- `dp[2] = dp[0] + 2 元硬币 = 1`
- `dp[5] = dp[0] + 5 元硬币 = 1`

```js
var coinChange = function (coins, amount) {
  // dp 数组的定义：当目标金额为 i 时，至少需要 dp[i] 枚硬币凑出
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  // 外层循环遍历所有状态的所有取值
  for (let i = 0; i < dp.length; i++) {
    // 内层循环求出所有选择的最小值
    for (let coin of conins) {
      // 子问题无解，跳过
      if (i - coin < 0) continue;
      // dp[i - coin] 获取上个子问题的解
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
```

复杂度分析：

- 时间复杂度：$O(amount * N)$
- 空间复杂度：$O(amount)$

> 当求最小值的时，往往将不可能的情况设置为 `Number.MAX_VALUE`

### 填表法

```js
var coinChange = function (coins, amount) {
  let dp = new Array(coins.length + 1).fill().map((v) => new Array(amount + 1).fill());

  // 初始化行
  for (let i = 1; i < amount + 1; i++) {
    dp[0][i] = Infinity;
  }
  // 初始化列
  for (let j = 1; j < coins.length + 1; j++) {
    dp[j][0] = 0;
  }
  // 开始填表
  for (let i = 1; i < coins.length + 1; i++) {
    for (var j = 1; j < amount + 1; j++) {
      if (coins[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i - 1]] + 1);
      }
    }
  }
  return dp[coins.length][amount] === Infinity ? -1 : dp[coins.length][amount];
};
```
