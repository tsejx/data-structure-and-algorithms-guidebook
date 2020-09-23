---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 415 - 字符串相加
order: 415
---

# 字符串相加

给定两个字符串形式的非负整数 `num1` 和 `num2`，计算它们的和。

提示：

- `num1` 和 `num2` 的长度都小于 5100
- `num1` 和 `num2` 都只包含数字 0-9
- `num1` 和 `num2` 都不包含任何前导零
- 你不能使用任何內建 BigInteger 库，也不能直接将输入的字符串转换为整数形式

## 解题思路

```js
const addString = function(num1, num2) {
  // 补零对齐
  while (num1.length > num2.length) num2 = '0' + num2;
  while (num1.length < num2.length) num1 = '0' + num1;

  let result = '';
  // 进位
  let carry = 0;
  // 加法，从个位开始计算
  for (let i = num1.length - 1; i >= 0; i--) {
    const sum = +num1[i] + +num2[i] + carry;
    result = (sum % 10) + result;
    carry = sum > 9 ? 1 : 0;
  }

  return carry == 1 ? '1' + result : result;
};
```
