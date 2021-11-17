---
nav:
  title: LeetCode
  order: 3
group:
  title: 动态规划
  order: 23
title: 300 - 最长递增子序列
order: 300
---

# 最长递增子序列

## 解题思路

```js
var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 找到比 i 小的元素，找到一个，就让当前序列的最长子序列长度加 1
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};
```
