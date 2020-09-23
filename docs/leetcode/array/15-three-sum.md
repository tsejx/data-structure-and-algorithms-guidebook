---
nav:
  title: LeetCode
  order: 3
group:
  title: 数组
  order: 1
title: 15 - 三数之和
order: 15
---

# 三数之和

`数组` `双指针`

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

### 双指针

方法：排序 + 双指针

本题的难点在于如何去除重复解。

实现原理：

1. 先将数组进行排序
2. 从左侧开始，选定一个值为 `定值`，右侧进行求解，获取与其相加为 0 的两个值
3. 类似于快拍，定义首尾
4. 首尾与 `定值` 相加
    - 等于 0，记录这三个只
    - 小于 0，首部右移
    - 大于 0，尾部右移
5. 定值右移，重复该步骤

```js
var threeSum = function(nums) {
  const result = [];

  if (nums === null || nums.length < 3) return result;

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
        result.push([nums[i], nums[left], nums[right]]);

        // 向中间靠拢
        left++;
        right--;

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

  return result;
};
```

#### 复杂度分析

- 时间复杂度：`O(n^2)`，数组排序 `O(nLogn)`，遍历数组 `O(n)`，双指针遍历 `O(n)`，总体 `O(nLogn) + O(n) * O(n)`
- 空间复杂度：`O(1)`

---

**参考资料：**

- [LeetCode 官方题解：三数之和](https://leetcode-cn.com/problems/3sum/solution/san-shu-zhi-he-by-leetcode-solution/)
- [Three Sum Gif 图解](https://leetcode-cn.com/problems/3sum/solution/three-sum-giftu-jie-by-githber/)