---
nav:
  title: 数据结构
  order: 1
group:
  title: 树
  order: 7
title: 索引堆
order: 21
---

# 索引堆

在堆中，构建堆、插入、删除过程都需要大量的交换操作。在之前的实现中，进行交换操作是直接交换数组中两个元素。而索引堆交换的是这两个元素的索引，而不是直接交换元素。

主要有两个好处：

- 减小交换操作的消耗，尤其是对于元素交换需要很多资源的对象来说，比如大字符串。
- 可以根据原位置找到元素，即便这个元素已经换了位置。

## 索引堆实现

```js
function IndexMaxHeap(capacity) {
  // 最大索引堆中的数据
  this.data = new Array(capacity + 1);
  // 最大索引堆中的索引，indexes[x] = i 表示索引 i 在 x 的位置
  this.indexes = [];
  // 最大索引堆中的反向索引，reverse[i] = x 表示索引 i 在 x 的位置
  this.reverse = [];
  this.count = 0;
  this.capacity = capacity;

  // 将反向索引默认填充为 0
  for (let i = 0; i <= capacity; i++) {
    this.reverse[i] = 0;
  };
}

// 返回索引堆中的元素个数
IndexMaxHeap.prototype.size = function() {
  return this.count;
}

// 表示索引堆中是否为空
IndexMaxHeap.prototype.isEmpty = function() {
  return this.count === 0;
};

// 向最大索引堆中插入一个新的元素，新元素的索引为 index，元素为 value
IndexMaxHeap.prototype.insert = function(index, value) {
  index += 1;
  this.data[index] = value;
  this.indexes[this.count + 1] = index;
  this.revers[index] = this.count + 1;

  this.count++;
  this.heapifyUp(this.count);
};

// 从最大索引堆中取出堆顶元素，即索引堆中所存储的最大数据
IndexMaxHeap.prototype.extractMax = function() {
  const maxValue = this.data[this.indexs[1]];

  this.swap(1, this.count);
  this.reverse[this.indexes[1]] = 1;
  this.reverse[this.indexes[this.count]] = 0;
  this.count--;

  this.heapifyDown(1);

  return maxValue;
};

// 从最大索引堆中取出堆顶元素的索引
IndexMaxHeap.prototype.extractMaxIndex = function() {
  const maxIndex = this.indexes[1] - 1;

  this.swap(1, this.count);
  this.reverse[this.indexes[1]] = 1;
  this.reverse[this.indexes[this.count]] = 0;
  this.count--;

  this.heapifyDown(1);

  return maxIndex
};

IndexMaxHeap.prototype.contain = function (index) {
  return this.reverse[index + 1] !== 0;
}

IndexMaxHeap.prototype.heapifyUp = function(k) {};

IndexMaxHeap.prototype.heapifyDown = function(k) {};

// 交换索引堆中的索引 i 和 j
// 由于有了反向索引 reverse 数组
// indexes 数组发生改变以后，相应的就需要维护 reverse 数组
IndexMaxHeap.prototype.swap = function (i, j) {
  [this.data[i], this.data[j]] = [this.data[j], this.data.[i]];

  this.reverse[this.indexes[i]] = i;
  this.reverse[this.indexes[j]] = j;
};

IndexMaxHeap.prototype.getItem = function (index) {
  return this.data[index + 1];
}

// 将最大索引堆中索引为 i 的元素修改为 newValue
IndexMaxHeap.prototype.change = function(index, newValue) {
  index += 1;
  this.data[index] = newValue;

  const reverseIndex = reverse[index];

  this.heapifyUp(reverseIndex);
  this.heapifyDown(reverseIndex);
};
```

---

**参考资料**

- [数据结构——最大索引堆（C++ 和 Java 实现）](https://www.jianshu.com/p/1e5fdd80f8f6)
