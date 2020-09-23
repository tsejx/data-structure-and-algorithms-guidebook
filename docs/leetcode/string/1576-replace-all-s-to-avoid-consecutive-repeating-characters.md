---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 1576 -  替换所有的问号
order: 1576
---

# 替换所有的问号

`字符串`

给你一个仅包含小写英文字母和 `?` 字符的字符串 `s`，请你将所有的 `?` 转换为若干小写字母，使最终的字符串不包含任何 **连续重复** 的字符。

注意：你 **不能** 修改非 `?` 字符。

题目测试用例保证 除 `?` 字符 之外，不存在连续重复的字符。

在完成所有转换（可能无需转换）后返回最终的字符串。如果有多个解决方案，请返回其中任何一个。可以证明，在给定的约束条件下，答案总是存在的。

示例 1：

```plain
输入：s = "?zs"
输出："azs"
解释：该示例共有 25 种解决方案，从 "azs" 到 "yzs" 都是符合题目要求的。只有 "z" 是无效的修改，因为字符串 "zzs" 中有连续重复的两个 'z' 。
```

示例 2：

```plain
输入：s = "ubv?w"
输出："ubvaw"
解释：该示例共有 24 种解决方案，只有替换成 "v" 和 "w" 不符合题目要求。因为 "ubvvw" 和 "ubvww" 都包含连续重复的字符。
```

示例 3：

```plain
输入：s = "j?qg??b"
输出："jaqgacb"
```

示例 4：

```plain
输入：s = "??yw?ipkj?"
输出："acywaipkja"
```

提示：

- `1 <= s.length <= 100`
- `s` 仅包含小写英文字母和 `?` 字符

## 解题思路

### 暴力法

```js
const modifyString = function(s) {
  if (s.length === 1 && s[0] === '?') return 'a';

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '?') {
      // 当前字符为需要替换的字符
      if (i === 0) {
        // 当前字符是第一个字符

        let code = 97;
        // 如果下个字符 Unicode 为 97（字母 a）则自增直到不相等
        while (code === s[i + 1].charCodeAt()) {
          code++;
        }
        s.splice(i, 1, String.fromCharCode(code));
      } else if (i === s.length - 1) {
        // 当前字符为最后一个字符

        let code = 97;
        // 与第一种情况类似，判断值为当前值的前一个值
        while (code === s[i - 1].charCodeAt()) {
          code++;
        }
        s.splice(i, 1, String.fromCharCode(code));
      } else {
        let code = 97;
        // 与当前字符前一个字符和后一个字符均不相等
        while (code === s[i + 1].charCodeAt() || code === s[i - 1].charCodeAt()) {
          code++;
        }
        s.splice(i, 1, String.fromCharCode(code));
      }
    }
  }
};
```

优化写法：

```js
const modifyString = function(s) {
  const len = s.length;
  if (len === 1 && s[0] === '?') return 'a';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '?') {
      let code = 97;
      while (
        code === (i === 0 ? 123 : s[i - 1].charCodeAt()) ||
        code === (i === len - 1 ? 96 : s[i + 1].charCodeAt())
      ) {
        code++;
      }

      s.splice(i, 1, String.fromCharCode(code));
    }
  }
};
```
