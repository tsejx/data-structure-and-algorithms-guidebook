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

## 反向循环
