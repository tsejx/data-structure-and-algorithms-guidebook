---
nav:
  title: LeetCode
  order: 3
group:
  title: 动态规划
  order: 23
title: 121 - 买卖股票的最佳时机
order: 121
---

# 买卖股票的最佳时机

`动态规划`

> 与《剑指 Offer（第二版）》第 68 题相同

假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

示例 1:

```plain
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
```

示例 2:

```plain
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

限制：

- `0 <= 数组长度 <= 10^5`

## 解题思路

### 遍历

这种题目通常有当前变量 `cur` 和全局变量 `profit`。

```js
const maxProfit = function (prices) {
  let cur = 0,
    profit = 0;
  for (let i = 0; i < prices.length; i++) {
    cur = Math.max(0, cur + prices[i] - prices[i - 1]);
    // 如果 local 比 global 更大就更新 global
    profit = Math.max(profit, cur);
  }
  return profit;
};
```

### 动态规划

使用动态规划算法之前，一般都需要先解决两个问题：

- 定义何种数组来表示各个阶段的状态
- 如何通过前阶段已有的状态，推出先阶段的状态

在这道题，我们定义一个二维数组 $dp[n][2]$ 来表示 $n$ 个阶段的状态。

**第一步：定义状态**

1. 设动态规划列表 $dp$
2. $dp[i]$ 表示 前 $i$ 日的最大利润（代表以 $prices[i]$ 为结尾的子数组的最大利润）
3. $dp[i][0]$ 表示前 $i$ 天，没有持有股票状态下的利润；$dp[i][1]$ 表示前 $i$ 天，持有股票状态下的利润

**第二步：状态转移方程**

$dp[i][0]$ 表示前 $i$ 天，**没有持有股票** 状态下的利润，转移方程：

```js
// 表示记录 i - 1 天记录
dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
```

$dp[i][1]$ 表示前 $i$ 天，**持有股票** 状态下的最大利润：

```js
dp[i][1] = max(dp[i - 1][1], 0 - prices[i]);
```

而我们需要的答案就是，前 $n$ 天没有持有股票状态下的最大利润：$dp[n][0]$

你可能会注意到，第二个状态转移方程，正常来讲应该写成 $dp[i][1] = max(dp[i - 1][1], dp[i][0] - prices[i])$，但上面 $max$ 的第二个参数却是 $0 - prices[i]$。

这是因为题目要求股票只能买卖一次，$0$ 表示未进行股票交易时的初始金额，而 $dp[i - 1][0]$ 表示前 $i - 1$ 天未持有股票状态下的最大利润，当前 $i - 1$ 天可能完成了多次股票交易，所以不满足条件。

- **第三步：确定起始**：`dp[0] = 0`，即首日利润为 0
- **第四步：确定终止**：`dp[i - 1]`（`i` 为 `dp` 列表长度）

```js
const maxProfit = function (prices) {
  let dp = [[0, -prices[0]]];
  // 初始值 即 i = 0 时
  // dp[i][0]
  // = max(dp[-1][0], dp[-1][1] + prices[i])
  // = max(0, -Infinity + prices[i]) = 0
  //
  // dp[i][1] 相当于把成本算在收益里，因为是成本所以是负的
  // = max(dp[-1][0], dp[-1][1] - prices[i])
  // = max(-Infinity, 0 - prices[i]) = -prices[i]

  for (let i = 1; i < prices.length; i++) {
    if (!dp[i]) dp[i] = [];
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
};
```

效率优化：

通过状态转移方程，我们可以看出，现阶段状态只和前一阶段的状态有关，因此我们并不需要定义数组来记录每一个阶段的状态。

相反，我们只需要定义两个变量，分别来表示前一天持有股票，或未持有股票状态下的最大利润，然后不断迭代更新这俩变量即可。

复杂度分析：

- 时间复杂度 $O(N)$：其中 $N$ 为 $prices$ 列表长度，动态规划需遍历 $prices$
- 空间复杂度 $O(1)$：变量 $cost$ 和 $profit$ 使用常数大小的额外空间

```js
const maxProfit = function(prices) {
  // 此问题的实质就是找到两个差值最大的数，前提是小的在前，大的在后
  // 要把此问题的时间复杂度控制在 O(n - 1) 并不难
  let cost = Infinity, profit = 0,;

  for (let i = 0; i < prices.length; i++) {
    cost = Math.min(cost, prices[i]);
    profit = Math.max(profit, prices[i] - min);
  }

  return profit;
};
```
