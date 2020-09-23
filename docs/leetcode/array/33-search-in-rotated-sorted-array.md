---
nav:
  title: LeetCode
  order: 3
group:
  title: 数组
  order: 1
title: 33 - 搜索旋转排序数组
order: 33
---

# 搜索旋转排序数组

`数组` `二分查找`

假设按照升序排序的数组在预先未知的某个点上进行了旋转。

例如，数组 `[0,1,2,4,5,6,7]` 可能变为 `[4,5,6,7,0,1,2]`。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 `O(log n)` 级别。

**示例 1:**

```plain
输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
```

**示例 2:**

```plain
输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1
```

## 解题思路

### 二分查找

- 关键字：排序、搜索
- 模式识别：有序或者部分有序，基本使用二分搜索及其变种
- 算法描述：丢弃一半的数据

```js
const search = function (nums, target) {
  let mid, start = 0, end = nums.length - 1;

  // 递归出口
  // 对于二分查找法，一旦左下标小于等于右下标，搜索结束
  while (start <= end) {
    // 找观测点
    mid = start + ((end - start) >> 1);

    if (nums[mid] === target) return mid;

    // 比较端点数据判断哪边是有序的
    if (nums[mid] >= nums[start]) {
      // 如果左端点小于中点，那么左半边有序
      // 若目标值在有序区间范围内，搜索有序侧，否则搜索无序侧
      if (target >= nums[start] && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // 同理，对于右边有序的情况也是类似处理
      if (target >= nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}
```

复杂度分析：

- 时间复杂度：`O(logn)`
- 空间复杂度：`O(1)`

---

**参考资料：**

- [LeetCode 力扣官方题解：搜索旋转排序数组](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/sou-suo-xuan-zhuan-pai-xu-shu-zu-by-leetcode-solut/)