---
nav:
  title: LeetCode
  order: 3
group:
  title: 动态规划
  order: 23
title: 5545 - 无矛盾的最佳球队
order: 5545
---

# 无矛盾的最佳球队

`动态规划`

假设你是球队的经理。对于即将到来的锦标赛，你想组合一支总体得分最高的球队。球队的得分是球队中所有球员的分数 总和 。

然而，球队中的矛盾会限制球员的发挥，所以必须选出一支 没有矛盾 的球队。如果一名年龄较小球员的分数 严格大于 一名年龄较大的球员，则存在矛盾。同龄球员之间不会发生矛盾。

给你两个列表 scores 和 ages，其中每组 scores[i] 和 ages[i] 表示第 i 名球员的分数和年龄。请你返回 所有可能的无矛盾球队中得分最高那支的分数 。

示例 1：

```plain
输入：scores = [1,3,5,10,15], ages = [1,2,3,4,5]
输出：34
解释：你可以选中所有球员。
```

示例 2：

```plain
输入：scores = [4,5,6,5], ages = [2,1,2,1]
输出：16
解释：最佳的选择是后 3 名球员。注意，你可以选中多个同龄球员。
```

示例 3：

```plain
输入：scores = [1,2,3,5], ages = [8,9,10,1]
输出：6
解释：最佳的选择是前 3 名球员。
```

提示：

- `1 <= scores.length, ages.length <= 1000`
- `scores.length == ages.length`
- `1 <= scores[i] <= 106`
- `1 <= ages[i] <= 1000`

## 解题思路

1. 维护一个二维数组 `tot`，存储每个球员年龄以及所得的分数
2. 将数组排序，以便后续贪心，排序后年龄小的优先在前，年龄相同则分小的在前（排序是为了快速找到转移过来的选择）
3. 维护一个一维数组 `dp` 记录从 0 到 `i` 中，`dp[i]` 表示选取下标 `i` 结尾的球员所能拿到的最大分数
4. 开始贪心，对于下标 `i`，从下标 `i - 1` 开始往前寻找前一个适应球员，并更新最大值，遍历完最后再加上下标 `i` 球员的得分
5. 每次确定 `dp[i]` 的值后，如果 `dp[i] > max`，则更新 `max`，最后返回最大值 `max`

```js
const bestTreamScore = function(scores, ages) {
  const len = scores.length;
  let tot = [];
  let res = 0;
  for (let i = 0; i < len; i++) {
    tot.push([ages[i], scores[i]]);
  }

  // 先按年龄由低至高排序
  // 再按分数由低至高排序
  tot.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return 1;
    }
  });

  let dp = new Array(len).fill(0);

  // 第一层正向遍历
  // 第二层从当前下标前一个下标开始反向遍历
  for (let i = 0; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (tot[i][0] >= tot[j][0] && tot[i][1] >= tot[j][1]) {
        // 先记录只有 j 下标的队员
        dp[i] = Math.max(dp[i], dp[j]);
      }
    }

    dp[i] += tot[i][1];
    res = Math.max(dp[i], res);
  }

  return res;
};
```
