---
nav:
  title: LeetCode
  order: 3
group:
  title: 数组
  order: 1
title: 27 - 移除元素
order: 27
---

# 移除元素

`数组` `双指针`

给你一个数组 `nums` 和一个值 `val`，你需要 原地 移除所有数值等于 `val` 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 `O(1)` 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

**示例 1:**

```plain
给定 nums = [3,2,2,3], val = 3,

函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

你不需要考虑数组中超出新长度后面的元素。
```

**示例 2:**

```plain
给定 nums = [0,1,2,2,3,0,4,2], val = 2,

函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

注意这五个元素可为任意顺序。

你不需要考虑数组中超出新长度后面的元素。
```

## 解题思路

### 暴力法

实现原理：

1. 遇到不同于 `val` 的项，就将它直接覆盖到 `nums` 数组中，从第一项开始覆盖
2. 遍历完数组，不同于 `val` 的项都安排到了 `nums` 数组的前头

```js
const removeElement = function (nums, val) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i]
      index++;
    }
  }

  return index;
}
```

### 双指针

实现原理：

1. 指向头尾的双指针
2. 遇到等于 `val` 的项，就拿数组的末尾项覆盖它
3. 末尾项搬到前面来了，将尾指针左移一位
4. 如果遇到不同于 `val` 的项，左指针就+1，考察下一项
5. 循环结束的条件是两个指针交叉相遇

```js
const removeElement = function (nums, val) {
  if (nums === null || nums.length === 0) return 0;

  let left = 0;
  let right = nums.length - 1;

  while(left <= right) {
    if (nums[left] === val) {
      nums[left] = nums[right]
      right--;
    } else {
      left++;
    }
  }

  return right;
}
```

---

**参考资料：**

- [画解算法：27 移除元素](https://leetcode-cn.com/problems/remove-element/solution/hua-jie-suan-fa-27-yi-chu-yuan-su-by-guanpengchn/)