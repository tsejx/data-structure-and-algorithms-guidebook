---
nav:
  title: LeetCode
  order: 3
group:
  title: 数组
  order: 1
title: 509 - 斐波那契数列
order: 509
---

# 斐波那契数列

斐波那契数，通常用 `F(n)` 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

```plain
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
```

给定 `N`，计算 `F(N)`。

示例 1：

```plain
输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
```

示例 2：

```plain
输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
```

示例 3：

```plain
输入：4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
```

提示：

- `0 ≤ N ≤ 30`

## 解题思路

### 暴力递归

```js
const fib = function(N) {
  if (N <= 1) return N;
  return fib(N - 1) + fib(N - 2);
};
```

- 时间复杂度：O($2^n$)
- 空间复杂度：O(n)

### 备忘录递归

recursion + memoization

```js
const fib = function(N) {
  if (N <= 1) return N;

  const cache = [];
  cache[0] = 0;
  cache[1] = 1;

  function memoize(number) {
    if (cache[number] !== undefined) {
      return cache[number];
    }

    cache[number] = memoize(number - 1) + memoize(number - 2);

    return cache[number];
  }

  return memoize(N);
};
```

### 备忘录遍历

```js
const fib = function(N) {
  if (N <= 1) return N;

  const cache = [];
  cache[0] = 0;
  cache[1] = 1;

  for (let i = 2; i <= N; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache[N];
};
```

### 动态规划 1

数组存储所有值，返回最后一个即可。

```js
const fib = function(N) {
  let dp = [0, 1, 1];

  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[N];
};
```

### 动态规划 2

只需要存储两个值即可，减少空间消耗。

```js
const fib = function(N) {
  if (N <= 1) return N;

  let prev2 = 0;
  let prev1 = 1;
  let result = 0;

  for (let i = 2; i <= N; i++) {
    result = prev1 + prev2;
    prev2 = prev1;
    prev1 = result;
  }

  return result;
};
```

---

**参考资料：**

- [动态规划 + LeetCode 509. 斐波那契数列 Fibonacci Number](https://www.bilibili.com/video/BV1bJ411y728)
