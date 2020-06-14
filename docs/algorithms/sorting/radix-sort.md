---
nav:
  title: 算法
  order: 2
group:
  title: 排序
  order: 2
title: 基数排序
order: 11
---

# 基数排序

**基数排序**（Radix Sort）是一种 **非比较型** 整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不是只能使用于整数。

## 算法原理

原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。基数排序的方式可以采用 LSD（Least significant digital）或 MSD（Most significant digital），LSD 的排序方式由键值的最右边开始，而 MSD 则相反，由键值的最左边开始。

- **MSD**：先从高位开始进行排序，在每个关键字上，可采用计数排序
- **LSD**：先从低位开始进行排序，在每个关键字上，可采用桶排序

实现逻辑：

1. 将所有待比较数值（正整数）统一为同样的数位长度，数位较短的前面补零
2. 从最低位开始，依次进行一次排序
3. 这样从最低位排序一直到最高位排序完成以后，数列就编程一个有序序列

## 算法分析

- 时间复杂度：`O(k * n)`
- 空间复杂度：`O(k + n)`
- 稳定性：稳定

设待排序的数组 `R[1..n]`，数组中最大的数是 `d` 位数，基数为 `r`（如基数为 10，即 10 进制，最大有 10 种可能，即最多需要 10 个桶来映射数组元素）。

处理一位数，需要将数组元素映射到 `r` 个桶中，映射完成后还需要收集，相当于遍历数组一遍，最多元素数为 `n`，则时间复杂度为 `O(n+r)`。所以，总的时间复杂度为 `O(d\*(n+r))`。

基数排序过程中，用到一个计数器数组，长度为 `r`，还用到一个 `rn` 的二位数组来做为桶，所以空间复杂度为 `O(rn)`。

基数排序基于分别排序，分别收集，所以是稳定的。

## 算法实现

```js
const radixSort = function(arr, maxDigit) {
  // 基数
  var mod = 10;
  var dev = 1;
  var counter = [];

  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev);
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    var pos = 0;
    for (var j = 0; j < counter.length; j++) {
      var value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }

  return arr;
};
```

## 算法比较

基数排序、计数排序和桶排序都用了桶的概念，但对桶的使用方法上有明显差异：

- 基数排序：根据键值的每位数字来分配桶
- 计数排序：每个桶只存储单一键值
- 桶排序：每个桶存储一定范围的数值

基数排序不是直接根据元素整体的大小进行元素比较，而是将原始列表元素分成多个部分，对每一部分按一定的规则进行排序，进而形成最终的有序列表
