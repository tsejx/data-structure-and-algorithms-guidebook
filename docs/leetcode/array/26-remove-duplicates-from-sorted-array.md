---
nav:
  title: LeetCode
  order: 3
group:
  title: 数组
  order: 1
title: 26 - 删除排序数组中的重复项
order: 26
---

# 删除排序数组中的重复项

`数组` `双指针`

给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

 
**示例 1:**

```plaint
给定数组 nums = [1,1,2],

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。

你不需要考虑数组中超出新长度后面的元素。
```

**示例 2:**

```plaint
给定 nums = [0,0,1,1,1,2,2,3,3,4],

函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

你不需要考虑数组中超出新长度后面的元素。
```

## 解题思路

### 双指针

`for` 循环：

```js
const removeDeplicates = function(nums){
  if (nums === null || nums.length === 0) return 0

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] != nums[j]) {
      nums[i++] = nums[j]
    }
  }

  return
}
```

`while` 循环：

```js
const removeDeplicates = function(nums) {
  if (nums === null || nums.length === 0) return 0;

  let left = 0, right = 1;
  while(right < nums.length) {
    if (nums[left] !== nums[right]) {
      nums[++left] = nums[right]
    }

    right++;
  }

  return left + 1;
}
```

### 滑动窗口

```js
const removeDepicates = function (nums) {
  let index = 0, currentIndex, pass = 0;

  while(index + pass + 1 < nums.length) {
    currentIndex = index + pass + 1;
    if (nums[index] === nums[currentIndex]) {
      pass++;
    } else {
      index++;
      [nums[index], nums[currentIndex]] = [nums[currentIndex], nums[index]]
    }
  }

  return index + 1;
}
```