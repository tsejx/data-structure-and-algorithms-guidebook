---
nav:
  title: LeetCode
  order: 3
group:
  title: 数学
  order: 30
title: 剑指 II 4 - 只出现一次的数字
order: 233
---

# 只出现一次的数字

## 解题思路

### 哈希表

```js
var singleNumber = function (nums) {
  const freq = new Map();
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  let ans = 0;
  for (const [num, occ] of freq.entries()) {
    if (occ === 1) {
      ans = nums;
      break;
    }
  }
  return ans;
};
```

### 依次确定一个二进制位

```js
var singleNumber = funciton() {
  let ans = 0;
  for (let i = 0; i < 32; ++i) {
    let total = 0;
    for (const num of nums) {
      total += ((num >> i) & 1);
    }
    if (total % 3 != 0) {
      ans |= (1 << i);
    }
  }
  return ans;
};
```

复杂度分析：

- 时间复杂度：$O(nlogC)$
- 空间复杂度：$O(1)$
