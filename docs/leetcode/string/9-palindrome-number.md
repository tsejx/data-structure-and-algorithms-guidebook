---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 9 - 回文数
order: 9
---

# 回文数

`数学`

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

```plain
输入: 121
输出: true
```

示例  2:

```plain
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

示例 3:

```plain
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```

进阶:

- 你能不将整数转为字符串来解决这个问题吗？

## 解题思路

### 暴力法

```js
const isPalindrome = function(x) {
  return (
    x.toString() ===
    x
      .toString()
      .split('')
      .reverse()
      .join('')
  );
};
```

### 极简数学解法

使用 **除法** 和 **求余** 获得对应位置的数字，无字符串操作。

- 首先获取当前数量级 `n`，公式 $n = 10^{\log10^x}$，如：`x = 24, n = 10`；`x = 6234, n = 1000`
- 通过 `x / n` 获取首位
- 通过 `x % 10` 获取末位
- `(x % n) / 10` 去除首位和末位（`x % n` 去除首位，`x / 10` 去除末位），`x` 位数减 2
- `n /= 100` x 位数减 2，故 `n` 需要除 $10^2$

以 123421 为例，运算过程如下：

| x      | n      | x/n | x%10 |
| :----- | :----- | :-- | :--- |
| 123421 | 100000 | 1   | 1    |
| 2341   | 1000   | 2   | 2    |
| 34     | 10     | 3   | 4    |

<br />

```js
const isPalindrome = function(x) {
  // 负数肯定不是回文数
  if (x < 0) return false;
  // 小于 10 的自然数肯定是回文数
  if (x < 10) return true;

  // 数量级计算公式
  let n = 10 ** Math.floor(Math.log10(x));

  while (n > 1 && x > 0) {
    // 1. Math.floor(x / n) 取第一个数字
    // 2. x % 10 取最后一个数字
    if (Math.floor(x / n) !== x % 10) return false;
    // 去除头尾两个数值
    // 1. x % n 数值除以位数的余数即为去除头部数值
    // 2. (x % n) / 10 去除头部数值后数值除以 10，即小数点左移一位，通过 Math.floor 向下取最大整数，相当于去除小数
    x = Math.floor((x % n) / 10);
    n /= 100;
  }

  return true;
};
```

---

**参考资料：**

- [极简数学解法](https://leetcode-cn.com/problems/palindrome-number/solution/ji-jian-jie-fa-by-ijzqardmbd-2/)
