---
nav:
  title: 算法
  order: 2
group:
  title: 搜索
  order: 3
title: 列表 - 二分查找法
order: 1
---

# 二分查找法

**二分查找算法**（Binary Search Algorithm），也称 **折半搜索算法**（Half-interval Search Algorithm）、**对数搜索算法**（Logarithmic Search Algorithm），是一种在 <strong style="color: red">有序数组</strong> 中查找某一特定元素的搜索算法。

搜索过程从数组的中间元素开始，如果中间元素正好是要查找的元素，则搜索过程结束；如果某一特定元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半中查找，而且跟开始一样从中间元素开始比较。如果在某一步骤数组为空，则代表找不到。这种搜索算法每一次比较都使搜索范围缩小一半。

- 关键词：排序、搜索
- 模式识别：有序或者部分有序，基本使用二分搜索及其变种
- 算法描述：丢弃一半的数据

<br />

```jsx | inline
import React from 'react';
import img from '../../assets/index/binary-search.jpg';

export default () => <img alt="二分查找法" src={img} width="45%" height="45%" />;
```

<br />

二分查找法的思想不仅仅可以用在 **有序数组** 里元素的查找上。如果是一个问题，待查找的数是整数，且知道范围，大概就可以通过逐步排查，缩小问题的规模的方式找到，这种算法也是二分查找算法。

我们平常写程序，定位问题其实通常也用的是这个思路。在适当的地方做一些代码输出，逐步缩小范围，最后找到了有 BUG 的那一行或几行代码。

初学写二分查找的问题是：跳步厉害，写下 `start = mid` 或者 `end = mid - 1` 等代码的时候，一定要搞清楚是什么意思，必要的时候写上注释，帮助自己思考和以后复查代码。

把 `待搜索的目标值` 留在最后判断，在循环体内不断地把不符合题目要求的子区间排除掉，在退出循环以后，因为只剩下 1 个数没有看到，它要么是目标元素，要么不是目标元素，单独判断即可。

以前有个段子，我记得是奇志和大兵说的：说有个人去看病，他其实只是小感冒，医生让他把除了感冒的病症都检查一遍，什么心肝脾胃肾都让你做检查。这些病你都没有，那不就是得感冒了吗。虽然是个段子，但是这个思想是很朴素的。用在解二分法的问题上，会使得编码更加容易。

用这种思路写二分不容易出错，需要考虑的细节最少。熟悉之后，可以用于写所有的二分问题。而且这种思路也非常符合「二分」的名字，就是把 `待搜索区间` 分为`有目标元素的区间` 和 `不包含目标元素的区间`，排除掉 `不包含目标元素的区间` 的区间，剩下就是 `有目标元素的区间`。

算法问题建议更多地理解思想，思考为什么这样写，而不建议背代码，背模板。即使要用代码和模板，例如并查集、线段树这种，也应该先把它们保存到自己的 Github 代码仓库里，要用的时候去复制粘贴。

## 算法实现

二分查找实现的最简单情况就是有序数组中不存在重复元素，我们在其中用二分查找值等于给定值的数据。

### 遍历实现

```js
const binarySearch = function (arr, target) {
  if (arr.length === 0) return -1;

  let mid,
    start = 0,
    end = arr.length - 1;

  while (start <= end) {
    // （小索引+大索引）除以2，向下取整找到中间值
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < tartget) {
      // 由数组的有序性可知，mid 以及 mid 的左边都小于等于 target
      // 下一轮搜索的范围是 [mid + 1, end]
      start = mid + 1;
    } else {
      // 此时 arr[mid] > target
      // 由数组的有序性可知，mid 以及 mid 的右边都小于等于 target
      // 下一轮搜索的范围是 [start, mid - 1]
      end = mid - 1;
    }
  }

  return -1;
};
```

### 递归实现

```js
const binarySearch = function (arr, target, start, end) {
  start = start || 0;
  end = end || arr.length - 1;

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (target > arr[mid]) {
    return binarySearch(arr, target, mid + 1, end);
  } else {
    return binarySearch(arr, target, start, mid - 1);
  }

  return -1;
};
```

三个容易出错的地方：

1. **循环退出条件**：注意是 `start <= end`，而不是 `start < end`
2. **`mid` 的取值**：改进写法 `(start + (end - start)) / 2`，位运算 `start + ((end - start) >> 1)`
3. **`start` 和 `end` 的更新**：`start = mid + 1` 和 `end = mid - 1`

## 局限性

二分查找的时间复杂度是 `O(log n)`，查找数据的效率非常高。不过，并不是什么情况下都可以用二分查找，它的应用场景是有很大局限性的。

1. 首先，二分查找依赖的是**顺序表结构**，简单点说就是数组。

那二分查找能否依赖其他数据结构呢？比如链表。答案是不可以的，主要原因是二分查找算法需要按照下标随机访问元素。

二分查找只能用在数据是通过顺序表来存储的数据结构上。如果你的数据是通过其他数据结构存储的，则无法应用二分查找。

2. 其次，二分查找针对的是**有序数据**

二分查找对这一点的要求比较苛刻，数据必须是有序的。如果数据没有序，我们需要先排序。前面章节里我们讲到，排序的时间复杂度最低是 O(nlogn)。所以，如果我们针对的是一组静态的数据，没有频繁地插入、删除，我们可以进行一次排序，多次二分查找。这样排序的成本可被均摊，二分查找的边际成本就会比较低。

但是，如果我们的数据集合有频繁的插入和删除操作，要想用二分查找，要么每次插入、删除操作之后保证数据仍然有序，要么在每次二分查找之前都先进行排序。针对这种动态数据集合，无论哪种方法，维护有序的成本都是很高的。

3. 再次，**数据量太小**不适合二分查找

如果要处理的数据量很小，完全没有必要用二分查找，顺序遍历就足够了。比如我们在一个大小为 10 的数组中查找一个元素，不管用二分查找还是顺序遍历，查找速度都差不多。只有数据量比较大的时候，二分查找的优势才会比较明显。

4. 最后，**数据量太大**也不适合二分查找

二分查找的底层需要依赖数组这种数据结构，而数组为了支持随机访问的特性，要求内存空间连续，对内存的要求比较苛刻。比如，我们有 1GB 大小的数据，如果希望用数组来存储，那就需要 1GB 的连续内存空间。

## 常见变形问题

- 查找 **第一个值等于** 给定值的元素
- 查找 **最后一个值等于** 给定值的元素
- 查找 **第一个大于等于** 给定值的元素
- 查找 **最后一个小于等于** 给定值的元素

### 查找第一个值等于给定值的元素

```js
const binarySearch = function (arr, target) {
  if (arr.length === 0) return -1;

  let mid,
    start = 0,
    end = arr.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] > value) {
      end = mid - 1;
    } else if (arr[mid] < value) {
      start = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] !== target) {
        return mid;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};
```

如果我们求解的是任意一个值等于给定值的元素，当 `arr[mid]` 等于要查找的值时，`arr[mid]` 就是我们要查找的元素。

但是，我们要求解的是第一个值等于给定值的元素，当 `arr[mid]` 等于要查找的值时，我们就需要确认一下这个 `arr[mid]` 是不是第一个值等于给定值的元素。

如果 `mid` 等于 0，那么这个元素已经是数组的第一个元素了，那么它肯定是我们要找的；如果 `mid` 不等于 0，但 `arr[mid]` 的前一个元素 `arr[mid - 1]` 不等于 `target`，那么说明 `arr[mid]` 就是我们要找的第一个值等于给定值的元素。

如果经过检查之后发现 `arr[mid]` 前面的一个元素 `arr[mid - 1]` 页等于 `target`，那说明此时的 `arr[mid]` 肯定不是我们要找的第一个值等于给定值的元素。那我们就更新 `end = mid - 1`，因为要找的元素肯定出现在 `[start, mid - 1]` 之间。

### 查找最后一个值等于给定值的元素

```js
const binarySearch = function (arr, target) {
  if (arr.length === 0) return -1;

  let mid,
    start = 0,
    end = arr.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] !== target) {
        return mid;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
};
```

如果 `arr[mid]` 这个元素已经是数组中的最后一个元素了，那它肯定是我们要找的；如果 `arr[mid]` 的后一个元素 `arr[mid+1]` 不等于 `target`，那也说明 `arr[mid]` 就是我们要找的最后一个值等于给定值的元素。

如果我们经过检查之后，发现 `arr[mid]` 后面的一个元素 `arr[mid+1]` 也等于 `target`，那说明但那个钱的这个 `arr[mid]` 并不是最后一个值等于给定值的元素。我们就更新 `start = mid + 1`，因为要找的元素肯定出现在 `[mid + 1, end]` 之间。

### 查找第一个大于等于给定值的元素

这类变形问题与前面两种变形问题的实现思路类似，代码写起来甚至更简洁。

```js
const binarySearch = function (arr, target) {
  if (arr.length === 0) return -1;

  let mid,
    start = 0,
    end = arr.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] >= target) {
      if (mid === 0 || arr[mid - 1] < target) {
        return mid;
      } else {
        end = mid - 1;
      }
    } else {
      start = mid + 1;
    }
  }

  return -1;
};
```

如果 `arr[mid]` 小于要查找的值 `target`，那么查找的值肯定在 `[mid+1, end]` 之间，所以，我们要更新 `start = mid + 1`。

对于 `arr[mi]` 大于等于给定值 `target` 的情况，我们要先看下 `arr[mid]` 前面已经没有元素，或者前面一个元素小于要查找的值 `target`，那么 `arr[mid]` 就是我们要找的元素。

如果 `arr[mid - 1]` 也大于等于要查找的值 `target`，那么说明要查找的元素在 `[start, mid - 1]` 之间，所以，我们要将 `end` 更新为 `mid - 1`。

### 查找最后一个小于等于给定值的元素

这个变形问题与前面的一种情况的实现思路是一样的。

```js
const binarySearch = function (arr, target) {
  if (arr.length === 0) return -1;

  let mid,
    start = 0,
    end = arr.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      if (mid === 0 || arr[mid - 1] < target) {
        return mid;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
};
```

容易出错的细节：**终止条件**、**区间上下界更新方法**、**返回值选择**。

## 减治思想 + 二分查找解题步骤

1. 把循环可以继续的条件写法 `while( start < end )`
2. 写 `if` 和 `else` 语句的时候，思考当 `arr[mid]` 满足什么性质时，`arr[mid]` 不是目标元素，接着判断 `mid` 的左边有没有可能存在目标元素，`mid` 的右边有没有可能存在目标元素

只可能出现以下两种情况：

把待搜索区间分为两个部分：

1. `[start, mid]`，设置边界 `end = mid`
2. `[mid + 1, end]`，设置边界 `start = mid + 1`

```js
if (check(mid)) {
  end = mid;
} else {
  start = mid + 1;
}
```

1. `[start, mid]`，设置边界 `end = mid - 1`
2. `[mid + 1, end]`，设置边界 `start = mid`

```js
if (check(mid)) {
  end = mid + 1;
} else {
  start = mid;
}
```

3. 根据 `边界收缩行为` 修改取中间数的行为

- `const mid = (start + end) / 2` 在 `start` 和 `end` 较大的时候会发生整形溢出（Java）

建议写法 `const mid = start + (end - start) / 2`

- `/` 是整数除法，默认的取整行为是下取整，那么它会带来一个问题

`const mid = start + (end - start) / 2` 永远取不到有边界 `end`

在面对 `start = mid` 和 `end = mid - 1` 这种边界收缩行为时，就有可能产生死循环

`const mid = start + (end - lef) / 2` 这种中间数的取法，由于 `/` 下取整的原因永远取不到 ➡ 右边界。

在待搜索区间只有两个元素，且 `边界收缩行为` 把 `mid` 分到右边子区间的时候，`可能` 会产生死循环。

4. 退出循环以后，看是否需要对 `arr[start]` 是否是目标元素再做一次检查。

解题步骤：

1. 将数据有序排列：先将一个数据集进行有序排列（可根据某种数值的大小降序或升序（当然排序的规则可根据业务规则自定义），前提是需要查找的数据具备该规则同样的属性）
2. 数据分半：就是将排序好的数据集切分成大致相等的两份数据
3. 查找数据：把排序好的数据拆分为个数大致相等的两半,因为有排序，查找的时候先和其中一半数据种的最大或者最小的数进行比较来断定要查找的数据是否会包含被分割后的一半数据种，然后在满足判定条件的数据集中一次获取数据进行比对直到找到数据或者比较完所有数据返回没有该数据，

## 总结

二分查找的核心思想理解起来非常简单，有点类似分治思想。即每次都通过跟区间中的中间元素对比，将待查找的区间缩小为一半，直到找到要查找的元素，或者区间被缩小为 0。但是二分查找的代码实现比较容易写错。你需要着重掌握它的三个容易出错的地方：循环退出条件、`mid` 的取值，`start` 和 `end` 的更新。

## 参考资料

- [维基百科：二分查找算法](https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%90%9C%E5%B0%8B%E6%BC%94%E7%AE%97%E6%B3%95)
