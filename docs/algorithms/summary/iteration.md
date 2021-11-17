---
nav:
  title: 算法
  order: 2
group:
  title: 算法技巧总结
  order: 30
title: 循环解题技巧
order: 30
---

# 循环解题技巧

## 正向循环

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < nums.length; i++) {
  console.log(i, nums[i]);
  // 0 1
  // 1 2
  // 2 3
  // 3 4
  // 4 5
  // 5 6
  // 6 7
  // 7 8
  // 8 9
  // 9 10
}
```

## 反向循环

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = nums.length - 1; i >= 0; i--) {
  console.log(i, nums[i]);
  // 9 10
  // 8 9
  // 7 8
  // 6 7
  // 5 6
  // 4 5
  // 3 4
  // 2 3
  // 1 2
  // 0 1
}
```

反向循环累加：

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = nums.length - 1, j = 0; i >= 0; i--, j++) {
  console.log(i, j, nums[i]);
  // 9 0 10
  // 8 1 9
  // 7 2 8
  // 6 3 7
  // 5 4 6
  // 4 5 5
  // 3 6 4
  // 2 7 3
  // 1 8 2
  // 0 9 1
}
```

## 循环的边界确定

## 跳出当前循环 break

## 跳出双层循环的上层循环

## 搜索问题

### 找到从后往前第一位比右邻居小的数

```js
const nums = [2, 6, 3, 5, 4, 1];
let i = nums.length - 2;

while (i >= 0 && nums[i] >= nums[i + 1]) {
  i--;
}

// i >= 0
// i = -1 没有找到，说明数组是递减序列
```

## 边界问题

### 跳过连续相同的项

```js
const nums = [0, 0, 1, 1, 2, 2, 3, 3, 4];
for (let i = 0; i < nums.length; i++) {
  if (i && nums[i] === nums[i - 1]) continue;

  console.log(nums[i]);
  // 0
  // 1
  // 2
  // 3
  // 4
}
```
