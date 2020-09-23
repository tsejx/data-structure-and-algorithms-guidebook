---
nav:
  title: LeetCode
  order: 3
group:
  title: 数学
  order: 30
title: 233 - 数字 1 的个数
order: 233
---

# 数字 1 的个数

`数学`

## 解题思路

### 暴力法

```js
var countDigitOne = function(n) {
  let count = 0;
  for (let i = n; i > 0; i--) {
    const match = i.toString().match(/1/g);
    if (match && match.length > 0) {
      count += match.length;
    }
  }

  return count;
};
```

### 归纳法

归纳法，对于个位出现的 1：

```js
const a = (n / 10) * 1 + (n % 10) >= 1 ? 1 : 0;
```

对于十位出现的 1：

```js
const b = (n / 100) * 10 + if (k > 19) 10 else if (k < 10) 0 else k - 10 + 1;
```

对于百位出现的 1：

```js
const c = (n / 1000) * 100 + if (k > 199) 10 else if (k < 100) 0 else k - 100 + 1;
```

最终归纳出：

```js
const k = n % (i * 10)

const d = (n / (i * 10)) * i + if (k > 2 * i - 1) i else if (k < i) 0 else k - i + 1;
```

解法：

```js
const countDigitOne = function(n) {
  let count = 0;

  for (let i = 1; i <= n; i *= 10) {
    // 除数
    let divisor = i * 10;
    // 整除部分
    let divided = Math.floor(n / divisor),
      // 余数
      remainder = n % divisor,
      rest = 0;

    count += divided * i;

    rest = remainder > 2 * i - 1 ? i : remainder < i ? 0 : remainder - i + 1;

    count += rest;
  }

  return count;
};
```
