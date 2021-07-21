---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 415 - 字符串中的单词数
order: 415
---

# 字符串中的单词数

`字符串`

统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

请注意，你可以假定字符串里不包括任何不可打印的字符。

示例:

```plain
输入: "Hello, my name is John"
输出: 5
解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。
```

## 解题思路

### 正则表达式

```js
const countSegments = function(s) {
  let res = s.match(/\S+/g);
  return res ? res.length : 0;
};
```

### 字符串匹配

```js
const countSegments = function(s) {
  if (s === '') {
    return 0;
  }
  let count = s[0] === ' ' ? 0 : 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === ' ' && s[i] !== ' ') {
      count++;
    }
  }
  return count;
};
```
