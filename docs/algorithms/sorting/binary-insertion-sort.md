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

**折半插入排序**（Binary Insertion Sort）是对插入排序算法的一种改进。所谓插入排序，就是不断的依次将元素插入前面已排好序的序列中。

## 算法原理

折半插入排序与直接插入排序算法原理相同。只是，在向已排序的数据中插入数据时，采用来折半查找（二分查找）。先取已经排序的序列的中间元素，与待插入的数据进行比较，如果中间元素的值大于待插入的数据，那么待插入的数据属于数组的前半部分，否则属于后半部分。依此类推，不断缩小范围，确定要插入的位置。

## 算法实现

```js
const binaryInsertionSort = function(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i],
      left = 0,
      right = i - 1;

    // 折半查找
    while (left <= right) {
      // 数组索引中间值
      let mid = Math.floor((left + right) / 2);

      if (cur < arr[mid]) {
        // 查找右半子表
        right = mid - 1;
      } else {
        // 查找左半子表
        left = mid + 1;
      }
    }

    for (let j = i - 1; j >= left; j--) {
      // 统一后移元素，空出插入位置
      arr[j + 1] = arr[j];
    }

    // 插入操作
    arr[left] = cur;
  }

  return arr;
};
```

折半插入排序仅仅减少了比较元素的次数，约为 `O(nLog2 n)`，该比较次数与待排序表的初始状态无关，仅取决于表中的元素的个数 `n`。

而元素的移动次数没有改变，它依赖于待排序表的初始状态，因此折半插入排序的时间复杂度为 `O(n^2)`。
