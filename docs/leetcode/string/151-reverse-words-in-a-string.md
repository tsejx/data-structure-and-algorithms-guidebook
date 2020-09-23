---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 151 - 翻转字符串里的单词
order: 151
---

# 翻转字符串里的单词

给定一个字符串，逐个翻转字符串中的每个单词。

示例 1：

```plain
输入: "the sky is blue"
输出: "blue is sky the"
```

示例 2：

```plain
输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
```

示例 3：

```plain
输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
```

说明：

- 无空格字符构成一个单词。
- 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
- 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

进阶：

- 请选用 C 语言的用户尝试使用  O(1) 额外空间复杂度的原地解法。

## 解题思路

### API

```js
const reverseString = function(s) {
  return s
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .reverse()
    .join(' ');
};
```

### 双端队列

```js
const reverseString = function(s) {
  let start = 0,
    end = s.length - 1;

  // 找到不是空格的起始位置
  while (s.charAt(start) === ' ') start++;
  while (s.charAt(end) === ' ') end--;

  let word = '';
  let deque = [];

  while (start < end) {
    let char = s.charAt(start);

    // 如果该位置是空格且 word 不为空字符串，说明前面是一个单词，就将 word 放入队列头部
    if (char === ' ' && word) {
      deque.unshift(word);
      word = '';
    } else if (char !== ' ') {
      word += char;
    }

    start++;
  }

  // 最后一个单词不能再拆分了
  deque.unshift(word);

  return deque.join(' ');
};
```
