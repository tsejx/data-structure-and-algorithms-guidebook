---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 5 - 最长回文子串
order: 5
---

# 最长回文子串

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

**示例一：**

```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

**示例二：**

```
输入: "cbbd"
输出: "bb"
```

## 解题思路

### 暴力法

```js
var isPalindrome = function(str) {
  const len = str.length;
  const middle = parseInt(len / 2);
  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
};

var longestPalindrome = function(s) {
  let ans = '';
  let max = 0;
  let len = s.length;

  for (let i = 0; i < len; i++) {
    for (let r = i + 1; r <= len; r++) {
      let tmpStr = s.substring(i, r);
      if (isPalindrome(tmpStr) && tmpStr.length > max) {
        ans = s.substring(i, r);
        max = tmpStr.length;
      }
    }
  }
};
```

### 动态规划 A

### 动态规划 B

### Manacher 算法

### 中心扩展法
