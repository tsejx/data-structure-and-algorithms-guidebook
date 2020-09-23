---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 459 - 重复的子字符串
order: 459
---

# 重复的子字符串

给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过 10000。

示例 1:

```plain
输入: "abab"

输出: True

解释: 可由子字符串 "ab" 重复两次构成。
```

示例 2:

```plain
输入: "aba"

输出: False
```

示例 3:

```plain
输入: "abcabcabcabc"

输出: True

解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
```

## 解题思路

```js
const repeatedSubstringPattern = function(s) {
  const mid = Math.ceil(s.length - 2);

  for (let i = 0; i < mid; i++) {
    if (s.length % (i + 1) !== 0) continue;
    if (s.length > 1 && s.substr(0, i + 1).repeat(s.length / (i + 1)) === s) return true;
  }

  return false;
};
```

### 字符串匹配

如果一个完整的字符 `s` 满足由多个子字符 `s'` 组成，即表示 `s` 由大于等于 2 个 `s'` 组成。

换句话来说，当 `s + s` 表示 2 个完整字符中，至少由大于等于 4 个 `s'` 子字符组成。

当去除头首 `s'` 两个子字符的某个组成时，中间部分因为至少有大于等于 2 个 `s'` 仍然存在。

```js
const repeatedSubstringPattern = function(s) {
  // 1. 匹配字符串非合并后字符串长度所在索引，表示匹配了合并后第二个原字符串
  // 2. 匹配字符所在索引非合并后字符串长度所在索引，表示存在子字符为原字符串
  return (s + s).indexOf(s, 1) !== s.length;
};
```

### 正则捕获

```js
const repeatedSubstringPattern = function(s) {
  return /^(\W+)\l+$/.test(s);
};
```
