---
nav:
  title: LeetCode
  order: 3
group:
  title: 动态规划
  order: 23
title: 509 - 斐波那契数
order: 509
---

# 斐波那契数

[原题链接](https://leetcode-cn.com/problems/fibonacci-number/)

斐波那契数，通常用 $F(n)$ 表示，形成的序列称为 **斐波那契数列** 。该数列由 `0` 和 `1` 开始，后面的每一项数字都是前面两项数字的和。也就是：

```
F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
```

给你 `n`，请计算 `F(n)`。

示例 1:

```
输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1
```

示例 2:

```
输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2
```

示例 3:

```
输入：4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3
```

## 解题思路

### 循环

```js
var fib = function (N) {
  if (N <= 1) return N;
  let prev1 = 1,
    prev2 = 0,
    ans = 0;
  for (let i = 2; i <= N; i++) {
    ans = prev1 + prev2;
    prev2 = prev1;
    prev1 = ans;
  }
  return ans;
};
```

### DP

```js
var fib = function (n) {
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
```

### 需要取模的版本

```js
var fib = function (n) {
  let n1 = 0,
    n2 = 1,
    sum;
  for (let i = 0; i < n; i++) {
    sum = (n1 + n2) % 1000000007;
    n1 = n2;
    n2 = sum;
  }
  return n1;
};
```
