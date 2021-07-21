---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 709 - 转换成小写字母
order: 709
---

# 转换成小写字母

`字符串`

实现函数 `ToLowerCase()`，该函数接收一个字符串参数 `str`，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。

示例 1：

```plain
输入: "Hello"
输出: "hello"
```

示例 2：

```plain
输入: "here"
输出: "here"
```

示例  3：

```plain
输入: "LOVELY"
输出: "lovely"
```

## 解题思路

### 遍历判断转换

思路启发：

- 题目提及到大小写字母，可以很自然地想到 Unicode 编码
- 大写字母 A 到 Z 的 ASCII 编码为 `65` 到 `90`
- 小写字母 a 到 z 的 ASCII 编码为 `96` 到 `123`
- 大写字母 ASCII 编码和小写字母 ASCII 编码之间相差 `32`
- 除此之外还需要用到转换字符和 ASCII 编码的方法
  1. `string.charCodeAt()`
  2. `String.fromCharCode(code + 32)`

```js
const toLowerCase = function(str) {
  return str.split('').reduce((acc, item) => {
    const code = item.charCodeAt();
    if (code >= 65 && code <= 90) {
      acc += String.fromCharCode(code + 32);
    } else {
      acc += item;
    }

    return acc;
  }, '');
};
```

### 正则表达式匹配

```js
const toLowerCase = function(str) {
  return str.replace(/[A-Z]/g, item => String.fromCharCode(item.charCodeAt() + 32));
};
```

### 位运算

思路启发：

- 大写边小写、小写变大写：ASCII 码 `^= 32`
- 大写变小写、小写变小写：ASCII 码 `|= 32`
- 小写变大写、大写变大写：ASCII 码 `&= -33`

```js
const toLowerCase = function(str) {
  let result = '';
  let len = str.length;

  while (len > 0) {
    result += String.fromCharCode(str.charCodeAt(i) | 32);
    len--;
  }

  return result;
};
```
