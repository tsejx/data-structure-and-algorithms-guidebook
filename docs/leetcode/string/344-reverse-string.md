---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 344 - 反转字符串
order: 344
---

# 反转字符串

`双指针` `字符串`

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 `char[]` 的形式给出。

不要给另外的数组分配额外的空间，你必须原地 **修改输入数组**、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

示例 1：

```plain
输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]
```

示例 2：

```plain
输入：["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
```

## 解题思路

### for 循环

```js
const reverseString = function(s) {
  const len = s.length;

  for (let i = 0; i < len; i++) {
    if (i >= len - 1 - i) {
      break;
    }

    [s[i], s[len - 1 - i]] = [s[len - 1 - i], s[i]];
  }

  return s;
};
```

### while 循环

```js
const reverseString = function(s) {
  let start = 0,
    end = s.length - 1;

  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }

  return s;
};
```

## 相似题目

- [反转字符串中的元音字母]()
- [反转字符串 II]()
