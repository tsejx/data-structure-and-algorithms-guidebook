---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 387 - 字符串中的第一个唯一字符
order: 387
---

# 字符串中的第一个唯一字符

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

示例：

```
s = "leetcode"
返回 0

s = "loveleetcode"
返回 2
```

提示：你可以假定该字符串只包含小写字母。

## 解题思路

### 哈希表 + Map

- 哈希表：唯一性，$O(1)$
- Map：按插入顺序存储数据
- 从左到右遍历
  - 第一次存在于哈希表，则存进去，并插入到 Map 中
  - 非首次，从 Map 中删除，说明当前字符不属于结果中
  - 最后返回 Map 中第一个值

```js
const firstUniqChar = function(s) {
  let hash = {};
  let result = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
      result.set(s[i], i);
    } else {
      result.delete(s[i]);
    }
  }

  if (result.size === 0) return -1;

  return result.values().next().value;
};
```

### 哈希表 + 遍历

与上面唯一不同的是，这里最后是通过遍历来查询第一个符合的结果。

```js
const firstUniqChar = function (s) {
  let hash = {}
  let result = []

  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]]++;
    }
  }

  if (let j = 0; j < s.length; j++) {
    if (hash[s[j]] === 1) return j
  }

  return -1;
}
```

### 库函数

从首字符开始寻找和从末尾开始寻找得到的相同字符的两个索引如果一样，说明只有一个字符，且一定是第一个出现的。

```js
const firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }

  return -1;
};
```

### 计数排序

当前所有解法中，执行用时最短的。

```js
const firstUniqChar = function(s) {
  let countingSort = (arr, maxValue) => {
    let bucket = new Array(maxValue).fill(0);
    let len = arr.length;

    for (let i = 0; i < len; i++) {
      bucket[arr[i].charCodeAt() - 97]++;
    }

    for (let j = 0; j < len; j++) {
      if (bucket[arr[j].charCodeAt() - 97] === 1) {
        return j;
      }
    }

    return -1;
  };

  return countingSort(s, 26);
};
```

### 遍历 + 比较

- 题意只有小写字母，因此最多只会出现 26 个字母中的一个
- 遍历 26 个字母，原字符串中首尾搜索是同一个字符且是同一索引值，且索引最小的最靠前，也就是第一个只出现一个的字符字母

```js
const firstUniqChar = function(s) {
  if (s.length === 1) return 0;

  let base = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let minIndex = Number.MAX_SAFE_INTEGER,
    firstIndex;

  for (let i = 0; i < s.length; i++) {
    firstIndex = s.indexOf(base[i]);

    if (firstIndex >= 0 && firstIndex === s.lastIndexOf(base[i])) {
      minIndex = Math.min(minIndex, firstIndex);
    }
  }

  return (minIndex ^ Number.MAX_SAFE_INTEGER) === 0 ? -1 : minIndex;
};
```
