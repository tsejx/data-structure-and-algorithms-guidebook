---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 1370 - 上升下降字符串
order: 1370
---

# 上升下降字符串

给你一个字符串  s ，请你根据下面的算法重新构造字符串：

1. 从 `s`  中选出 **最小** 的字符，将它 接在 结果字符串的后面。
2. 从 `s` 剩余字符中选出 **最小** 的字符，且该字符比上一个添加的字符大，将它 接在 结果字符串后面。
3. 重复步骤 2 ，直到你没法从 s  中选择字符。
4. 从 `s`  中选出 最大   的字符，将它 接在   结果字符串的后面。
5. 从 `s`  剩余字符中选出   最大   的字符，且该字符比上一个添加的字符小，将它 接在 结果字符串后面。
6. 重复步骤 5 ，直到你没法从 `s` 中选择字符。
7. 重复步骤 1 到 6 ，直到 `s` 中所有字符都已经被选过。

在任何一步中，如果最小或者最大字符不止一个  ，你可以选择其中任意一个，并将其添加到结果字符串。

请你返回将  s  中字符重新排序后的 结果字符串 。

示例 1：

```plain
输入：s = "aaaabbbbcccc"
输出："abccbaabccba"
解释：第一轮的步骤 1，2，3 后，结果字符串为 result = "abc"
第一轮的步骤 4，5，6 后，结果字符串为 result = "abccba"
第一轮结束，现在 s = "aabbcc" ，我们再次回到步骤 1
第二轮的步骤 1，2，3 后，结果字符串为 result = "abccbaabc"
第二轮的步骤 4，5，6 后，结果字符串为 result = "abccbaabccba"
```

示例 2：

```plain
输入：s = "rat"
输出："art"
解释：单词 "rat" 在上述算法重排序以后变成 "art"
```

示例 3：

```plain
输入：s = "leetcode"
输出："cdelotee"
```

示例 4：

```plain
输入：s = "ggggggg"
输出："ggggggg"
```

示例 5：

```plain
输入：s = "spo"
输出："ops"
```

提示：

- `1 <= s.length <= 500`
- `s` 只包含小写英文字母。

## 解题思路

从题目中获取信息：

1. 字符之间比较大小的通常转化为 ASCII 码比较比较好
2. 步骤 1、2、3 是从小开始选择，步骤 4、5、6 是从最大开始选择，可以推敲出可能需要两个循环

### 桶计数

1. 字符串需要统计子字符出现次数的时候，应该联想到使用桶排序 `Array(26).fill(0)`
2. 利用 `for of` 循环，结合 `index = subCharString.charCodeAt(0) - 97` 统计每个字符的出现次数（小写字母 `a` 的 ASCII 码为 97，大写字母 `A` 的 ASCII 码为 65）
3. 因为是前后拼接，联想到 `result += string` 的方法拼接字符，需要变量接收返回值
4. 由题干得知需要不停地旧字符中抽离子字符，所以需要变量控制循环的退出
5.

```js
const sortString = function(s) {
  const arr = new Array(26).fill(0);
  // 统计每个字母的出现次数
  for (let char of s) {
    arr[char.codePointAt(0) - 97]++;
  }

  let result = '',
    len = s.length;

  while (true) {
    if (len === 0) break;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        result += String.fromCodePoint(97 + i);
        arr[i]--;
        len--;
      }
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] !== 0) {
        result += String.fromCodePoint(97 + i);
        arr[i]--;
        len--;
      }
    }
  }

  return result;
};
```
