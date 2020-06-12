---
nav:
  title: 算法
  order: 2
group:
  title: 排序
  order: 2
title: 堆排序
order: 7
---

# 堆排序

**堆排序**（Heap Sort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。堆排序可以说是一种利用堆的概念来排序的选择排序。分为两种方法：

- 大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列；
- 小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列；

## 算法原理

1. 先将初始的 `R[0...n-1]` 建立成最大堆，此时是无序堆，而堆顶是最大元素
2. 再将堆顶 `R[0]` 和无序区的最后一个记录 `R[n-1]` 交换，由此得到新的无序区 `R[0...n-2]` 和有序区 `R[n-1]`，且满足 `R[0...n-2].keys <= R[n-1].key`
3. 由于交换后新的根 `R[1]` 可能违反堆性质，故应将当前无序区 `R[1..n-1]` 调整为堆。然后再次将 `R[1..n-1]` 中关键字最大的记录 `R[1]` 和该区间的最后一个记录 `R[n-1]` 交换，由此得到新的无序区 `R[1..n-2]` 和有序区 `R[n-1..n]`，且仍满足关系 `R[1..n-2].keys≤R[n-1..n].keys`，同样要将 `R[1..n-2]` 调整为堆。
4. 直到无序区只有一个元素为止。

## 算法实现

```js
const heapify = function(arr, x, len) {
  let l = 2 * x + 1,
    r = 2 * x + 2,
    largest = x;
  if (l < len && arr[l] > arr[largest]) {
    largest = l;
  }
  if (r < len && arr[r] > arr[largest]) {
    largest = r;
  }
  if (largest != x) {
    [arr[x], arr[largest]] = [arr[largest], arr[x]];
    heapify(arr, largest, len);
  }
};

const headSort = function(arr) {
  // 建堆
  const size = arr.length;
  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    heapify(arr, i, size);
  }

  // 堆排序
  for (var j = size - 1; j >= 1; j--) {
    [arr[0], arr[j]] = [arr[j], arr[0]];
    heapify(arr, 0, --size);
  }

  return arr;
};
```
