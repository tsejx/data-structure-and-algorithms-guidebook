---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 859 - 亲密字符串
order: 859
---

# 亲密字符串

`字符串`

给定两个由小写字母构成的字符串  A  和 B，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回  `true`；否则返回 `false`。

示例 1：

```plain
输入： A = "ab", B = "ba"
输出： true
```

示例 2：

```plain
输入： A = "ab", B = "ab"
输出： false
```

示例 3:

```plain
输入： A = "aa", B = "aa"
输出： true
```

示例 4：

```plain
输入： A = "aaaaaaabc", B = "aaaaaaacb"
输出： true
```

示例 5：

```plain
输入： A = "", B = "aa"
输出： false
```

提示：

- `0 <= A.length <= 20000`
- `0 <= B.length <= 20000`
- `A 和 B 仅由小写字母构成`

## 解答思路

思路启发：

1. 字符串长度不相等，直接返回 `false`
2. 字符串长度相等，只要有重复元素就返回 `true`
3. A 和 B 字符有不相等的两个地方，需要查看它们交换后是否相等即可

```js
const buddyStrings = function(A, B) {
  // 1. 两字符串长度不等或者任意一个为空
  if (A.length !== B.length || A === '' || B === '') return false;

  // 2. 两字符相等，有重复字符的返回 true，因为他们可以重复交换
  if (A === B) return A.length > new Set(A).size;

  // 3. 字符串不相等，记录相同位置不相等的字符，看最后长度是否为 2 以及是否相等
  let a = '',
    b = '';

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      a = A[i] + a;
      b += B[i];
    }
  }

  return a.length === 2 && a === b;
};
```
