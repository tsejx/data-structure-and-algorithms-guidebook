---
nav:
  title: LeetCode
  order: 3
group:
  title: 数组
  order: 1
title: 81 - 搜索旋转排序数组 II
order: 81
---

# 搜索旋转排序数组 II

`数组` `二分查找`

假设按照升序排序的数组在预先未知的某个点上进行了旋转。

例如，数组 `[0,0,1,2,2,5,6]` 可能变为 `[2,5,6,0,0,1,2]`。

编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。

**示例 1**:

```js
输入: nums = [2,5,6,0,0,1,2], target = 0
输出: true
```

**示例 2**:

```js
输入: nums = [2,5,6,0,0,1,2], target = 3
输出: false
```

**进阶**:

- 这是 搜索旋转排序数组 的延伸题目，本题中的 `nums` 可能包含重复元素。
- 这会影响到程序的时间复杂度吗？会有怎样的影响，为什么？

## 解题思路

### 二分查找

难点在于处理重复元素。

```js
const search = function(nums, target) {
  if (nums === null || nums.length === 0) return false

  let mid, start = 0, end = nums.length - 1;

  while(start <= end) {
    mid = start + ((end - start) >> 1)

    if (nums[mid] === target) return true;

    if (nums[start] === nums[mid]) {
      start++
    } else if (nums[start] < nums[mid]) {
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    } else {
      if (target > nums[mid] && target <= nums[end] ) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }

  return false
}
```