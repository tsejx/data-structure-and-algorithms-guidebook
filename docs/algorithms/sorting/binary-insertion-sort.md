---
nav:
  title: 算法
  order: 2
group:
  title: 排序
  order: 2
title: 折半插入排序
order: 11
---

# 折半插入排序

## 算法原理

## 算法分析

## 算法实现

```js
function binaryInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i],
      left = 0,
      right = i - 1;
    while (left <= right) {
      let middle = parseInt((left + right) / 2);
      if (key < arr[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    for (let j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j];
    }
    arr[left] = key;
  }

  return arr;
}
```
