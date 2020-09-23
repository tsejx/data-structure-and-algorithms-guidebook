---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 165 - 比较版本号
order: 165
---

# 比较版本号

`字符串`

比较两个版本号 version1  和 version2。
如果  `version1 > version2`  返回  `1`，如果  `version1 < version2` 返回 `-1`， 除此之外返回 `0`。

你可以假设版本字符串非空，并且只包含数字和  `.` 字符。

`.` 字符不代表小数点，而是用于分隔数字序列。

例如，2.5 不是“两个半”，也不是“差一半到三”，而是第二版中的第五个小版本。

你可以假设版本号的每一级的默认修订版号为 0。例如，版本号 3.4 的第一级（大版本）和第二级（小版本）修订号分别为 3 和 4。其第三级和第四级修订号均为 0。

**示例  1:**

```plain
输入: version1 = "0.1", version2 = "1.1"
输出: -1
```

**示例 2:**

```plain
输入: version1 = "1.0.1", version2 = "1"
输出: 1
```

**示例 3:**

```plain
输入: version1 = "7.5.2.4", version2 = "7.5.3"
输出: -1
```

**示例  4：**

```plain
输入：version1 = "1.01", version2 = "1.001"
输出：0
解释：忽略前导零，“01” 和 “001” 表示相同的数字 “1”。
```

**示例 5：**

```plain
输入：version1 = "1.0", version2 = "1.0.0"
输出：0
解释：version1 没有第三级修订号，这意味着它的第三级修订号默认为 “0”。
```

**提示：**

- 版本字符串由以点（`.`）分隔的数字字符串组成。这个数字字符串可能有前导零。
- 版本字符串不以点开始或结束，并且其中不会有两个连续的点。

## 解题思路

### 分割与整型比较

```js
const compareVersion = function(version1, version2) {
  if (typeof version1 !== 'string' || typeof version2 !== 'string') {
    return 0;
  }

  let v1 = version1.split('.'),
    v2 = version2.split('.');

  let len = Math.max(v1.length, v2.length);

  for (let i = 0; i < len; i++) {
    let data1 = 0,
      data2 = 0;

    if (i < arr1.length) {
      data1 = parseInt(arr1[i]);
    }
    if (i < arr2.length) {
      data2 = parseInt(arr2[i]);
    }

    if (data1 < data2) {
      return -1;
    } else if (data1 > data2) {
      return 1;
    }
  }

  return 0;
};
```

### 系数累加

```js
const compareVersion = function(version1, version2) {
  if (typeof version1 !== 'string' || typeof version2 !== 'string') {
    return 0;
  }

  const v1 = version1.split('.'),
    v2 = version2.split('.');
  const maxLen = Math.max(v1.length, v2.length);
  let num1 = 0,
    num2 = 0;

  for (let i = 0; i < maxLen; i++) {
    if (v1[i]) {
      num1 += v1[i] * Math.pow(0.1, i);
    }

    if (v2[i]) {
      num2 += v2[i] * Math.pow(0.1, i);
    }
  }

  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
  }

  return 0;
};
// 1.0.1 -> [1, 0, 1] -> 1 * Math.pow(0.1, 1) + 0 * Math.pow(0.1, 2) + Math.pow(0.1, 3) -> 0.101
```
