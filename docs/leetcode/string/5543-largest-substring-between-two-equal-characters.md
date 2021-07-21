---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 5543 -  两个相同字符之间的最长子字符串
order: 5543
---

# 两个相同字符之间的最长子字符串

`字符串`

给你一个字符串 `s`，请你返回 两个相同字符之间的最长子字符串的长度 ，计算长度时不含这两个字符。如果不存在这样的子字符串，返回 -1 。

子字符串 是字符串中的一个连续字符序列。

示例 1：

```plain
输入：s = "aa"
输出：0
解释：最优的子字符串是两个 'a' 之间的空子字符串。
```

示例 2：

```plain
输入：s = "abca"
输出：2
解释：最优的子字符串是 "bc" 。
```

示例 3：

```plain
输入：s = "cbzxy"
输出：-1
解释：s 中不存在出现出现两次的字符，所以返回 -1 。
```

示例 4：

```plain
输入：s = "cabbac"
输出：4
解释：最优的子字符串是 "abba" ，其他的非最优解包括 "bb" 和 "" 。
```

## 解题思路

1. 两层遍历，第一层逐个遍历字符串，第二层遍历当前字符后面的字符串
2. 当当前遍历的字符（第一层循环索引下标对应的字符）与第二层遍历字符相等，则两字符间形成闭区间，与存储的最大值保存

```js
function maxLengthBetweenEqualCharaters(s) {
  const len = s.length;
  let ans = -1;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) ans = Math.max(ans, j - i - 1);
    }
  }

  return ans;
}
```
