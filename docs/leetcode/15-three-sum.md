---
nav:
  title: LeetCode
  order: 3
title: 15 - 三数之和
order: 15
---

# 三数之和

给你一个包含 n 个整数的数组  `nums`，判断 `nums` 中是否存在三个元素 a，b，c ，使得  `a + b + c = 0`？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例：

```plain
给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

## 解题思路

### 暴力法

```js
var threeSum = function(nums) {
  let res = [];

  if (nums === null || nums.length < 3) return res;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = i + 2; k < nums.length - 1; k++) {
        if (nums[i] + nums[j] + num[k] === 0) {
          res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  return res;
};
```

### 双指针

方法：排序 + 双指针

本题的难点在于如何去除重复解。

```js
var threeSum = function(nums) {
  const res = [];

  if (nums === null || nums.length < 3) return res;

  // 对数组进行排序
  nums.sort((a, b) => a - b);

  // 遍历排序后的数组
  for (let i = 0; i < nums.length; i++) {
    // 因为已经排序好，所以后面不可能有三个数之和等于 0，直接返回结果
    if (nums[i] > 0) break;

    // 对于重复元素，跳过，避免出现重复解（当前值与上个循环值相等）
    if (i && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // 符合三数之和为零的条件
        res.push([nums[i], nums[left++], nums[right--]]);

        // 判断左界和右界是否和下一位置重复，去除重复解
        // 并同时将左指针和右指针移到下一位置，寻找新的解

        // 向数组中间靠拢，跳过重复数字
        while (nums[left] === nums[left - 1]) {
          left++;
        }

        // 向数组中间靠拢，跳过重复数字
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        // 三数之和小于 0，说明 nums[left] 太小，左指针右移
        left++;
      } else if (sum > 0) {
        // 三数之和大于 0，说明 nums[right] 太大，右指针左移
        right--;
      }
    }
  }

  return res;
};
```

#### 复杂度分析

- 时间复杂度：`O(n^2)`，数组排序 `O(nLogn)`，遍历数组 `O(n)`，双指针遍历 `O(n)`，总体 `O(nLogn) + O(n) * O(n)`
- 空间复杂度：`O(1)`
