---
nav:
  title: LeetCode
  order: 3
group:
  title: 动态规划
  order: 23
title: 53 - 最大子序和
order: 53
---

# 最大子序和

> 同《剑指 Offer》第 42 题

## 解题思路

```js
var maxSubArray = function (nums) {
  let pre = 0,
    max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[x]);
    max = Math.max(max, pre);
  }
  return max;
};
```
