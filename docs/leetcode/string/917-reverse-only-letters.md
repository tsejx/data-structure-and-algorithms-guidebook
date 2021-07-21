---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 917 - 仅仅反转字母
order: 917
---

# 仅仅反转字母

`字符串`

给定一个字符串  `S`，返回 **反转后的** 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。

示例 1：

```plain
输入："ab-cd"
输出："dc-ba"
```

示例 2：

```plain
输入："a-bC-dEf-ghIj"
输出："j-Ih-gfE-dCba"
```

示例 3：

```plain
输入："Test1ng-Leet=code-Q!"
输出："Qedo1ct-eeLg=ntse-T!"
```

提示：

- `S.length <= 100`
- `33 <= S[i].ASCIIcode <= 122`
- `S` 中不包含  `\` or `"`
