---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 1616 - 分割两个字符串得到回文串
order: 1616
---

# 分割两个字符串得到回文串

`字符串`

给你两个字符串 `a` 和 `b`，它们长度相同。请你选择一个下标，将两个字符串都在   相同的下标 分割开。由 `a`  可以得到两个字符串：`aprefix`  和  `asuffix`，满足 `a = aprefix + asuffix`，同理，由 `b` 可以得到两个字符串 `bprefix` 和  `bsuffix`，满足 `b = bprefix + bsuffix`。请你判断 `aprefix + bsuffix` 或者 `bprefix + asuffix`  能否构成回文串。

当你将一个字符串 `s`  分割成 `sprefix` 和  `ssuffix`  时，`ssuffix` 或者 `sprefix` 可以为空。比方说，`s = "abc"`  那么  `"" + "abc"`，`"a" + "bc"`，`"ab" + "c"` 和 `"abc" + ""`  都是合法分割。

如果 能构成回文字符串 ，那么请返回 `true`，否则返回 `false`。

请注意， `x + y`  表示连接字符串  `x` 和  `y` 。

示例 1：

```plain
输入：a = "x", b = "y"
输出：true
解释：如果 a 或者 b 是回文串，那么答案一定为 true ，因为你可以如下分割：

aprefix = "", asuffix = "x"
bprefix = "", bsuffix = "y"
那么 aprefix + bsuffix = "" + "y" = "y" 是回文串。
```

示例 2：

```plain
输入：a = "ulacfd", b = "jizalu"
输出：true
解释：在下标为 3 处分割：
aprefix = "ula", asuffix = "cfd"
bprefix = "jiz", bsuffix = "alu"
那么 aprefix + bsuffix = "ula" + "alu" = "ulaalu" 是回文串。
```

提示：

- `1 <= a.length, b.length <= 105`
- `a.length == b.length`
- `a` 和  `b`  都只包含小写英文字母

## 解题思路

### 双指针

题目要点：

1. 两个相同长度的字符
2. 在指定相同的下标对两个字符分割，分割后 `A` 字符的前缀字符和 `B` 字符的后缀字符组合，`B` 字符的前缀字符和 `A` 字符的后缀字符组合，组合的字符是否为回文字符

要使组合后的字符串为回文字符，那么分别从 `A` 字符开端和 `B` 字符末端向内收缩，必然有一段子字符是必然相同的。

找到 `A` 和 `B` 相同公共字符的索引后，在用这两个索引在各自字符串内遍历收缩，直至两个索引指向的字符不相等为止。

如果判断为不相等的字符的两个索引已经超越边界，例如 `end < start`，那么表明到达不相等索引之前的遍历字符都是相等的。

这里需要分别对 `A` 和 `B` 进行一次检验，因为有可能是 `A` 的 `start` 向后推，也有可能是 `B` 的 `end` 向前推。

```js
const checkPalindromeFormation = function(a, b) {
  function isPalindrome(a, b) {
    let start = 0,
      end = a.length - 1,
      i,
      j;

    // 第一步：找到两个字符各自两端最长公共回文子字符的下标
    while (start < end) {
      if (a[start] === b[end]) {
        start++;
        end--;
        continue;
      }

      break;
    }

    i = start;
    j = end;

    // 第二步：重置 i 和 j 遍历字符串 b
    while (i < j) {
      if (b[i] === b[j]) {
        i++;
        j--;
        continue;
      }

      break;
    }

    if (i >= j) return true;

    i = start;
    j = end;

    // 第三步：重置 i 和 j 遍历字符串 a
    while (i < j) {
      if (a[i] === a[j]) {
        i++;
        j--;
      }
    }

    if (i >= j) return true;

    return false;
  }

  return isPalindrome(a, b) || isPalindrome(b, a);
};
```

---

参考资料：

- [T.Smart - 相遇问题](https://leetcode-cn.com/problems/split-two-strings-to-make-palindrome/solution/xiang-yu-wen-ti-on-by-tsmart/)
