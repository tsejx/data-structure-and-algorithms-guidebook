---
nav:
  title: LeetCode
  order: 3
group:
  title: 数组
  order: 1
title: 1 - 两数之和
order: 1
---

# 两数之和

`数组` `哈希表`

给定一个整数数组 `nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那 **两个** 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

**示例:**

```plain
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

## 解题思路

### 暴力法

暴力法很简单，遍历每个元素 `x`，并查找是否存在一个值与 `target - x` 相等的目标元素。

```js
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
```

#### 复杂度分析

- 时间复杂度：`O(n^2)`，对于每个元素，我们试图通过遍历数组的其余部分来寻找它所对应的目标元素，这将耗费 `O(n)` 的时间。因此时间复杂度为 `O(n^2)`。
- 空间复杂度：`O(1)`

### 哈希表

事实证明，我们可以一次完成。在进行迭代并将元素插入到表中的同时，我们还会回过头来检查表中是否已经存在当前元素所对应的目标元素。如果它存在，那我们已经找到了对应解，并立即将其返回。

```js
const twoSum = function(nums, target) {
  let hashMap = new Map();
  let index = 0;

  while (index < nums.length) {
    const current = nums[index];
    const complement = target - current;

    if (hashMap.has(complement)) {
      return [hashMap.get(complement), index];
    }

    hashMap.set(current, index);
    index++;
  }
};
```

#### 心得体会

1. 在 JavaScript 中使用 `Map` 数据结构充当哈希表缓存值（`map.has()`、`map.get()` 和 `map.set()`）
2. 循环要有两个条件，能够终止循环执行的条件（`包括执行循环的条件判断`、`循环内部跳出循环的条件判断` 和 `直接跳出函数执行条件判断`）

#### 复杂度分析

- 时间复杂度：`O(n)`，我们只遍历了包含有 `n` 个元素的列表一次。在表中进行的每次查找只花费 `O(1)` 的时间。
- 空间复杂度：`O(n)`，所需的额外空间取决于哈希表中存储的元素数量，该表最多需要存储 `n` 个元素。
