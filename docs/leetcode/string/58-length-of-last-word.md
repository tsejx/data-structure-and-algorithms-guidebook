---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 58 - 最后一个单词的长度
order: 58
---

# 最后一个单词的长度

`字符串`

给定一个仅包含大小写字母和空格 `' '`  的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。

如果不存在最后一个单词，请返回 0 。

说明：一个单词是指仅由字母组成、不包含任何空格字符的 **最大子字符串**。

示例:

```plain
输入: "Hello World"
输出: 5
```

## 解题思路

```js
const lengthOfLastWord = function(s) {
  if (s === '') return 0;

  const arr = s.split(' ');
  let len = arr.length;

  while (len > 0) {
    if (arr[len - 1] === '') {
      len--;
    } else {
      return arr[len - 1].length;
    }
  }

  return 0;
};
```

### 字符串遍历

```js
const lengthOfLastWord = function(s) {
  let end = s.length - 1;

  while (end >= 0 && s[end] === ' ') end--;

  if (end < 0) return 0;

  let start = end;

  while (start >= 0 && s[start] !== ' ') start--;

  return end - start;
};
```
