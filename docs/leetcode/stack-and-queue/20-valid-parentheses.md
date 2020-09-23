---
nav:
  title: LeetCode
  order: 3
group:
  title: 栈和队列
  order: 4
title: 20 - 有效的括号
order: 20
---

# 有效的括号

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'`  的字符串，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

示例 1:

```plain
输入: "()"
输出: true
```

示例 2:

```plain
输入: "()[]{}"
输出: true
```

示例 3:

```plain
输入: "(]"
输出: false
```

示例 4:

```plain
输入: "([)]"
输出: false
```

示例 5:

```plain
输入: "{[]}"
输出: true
```

## 解题思路

### 辅助栈

利用栈。

- 遇到左括号，一律推入栈中。
- 遇到右括号，将栈顶部元素拿出，如果不匹配则返回 false，如果匹配则继续循环。

为了提高性能, 在循环前进行这一步：`let len = s.length` 是非常关键的，减少了计算次数。

为了提高执行时间，这一步 `if (s.length % 2) return false` 是非常关键的，减少了不必要的计算。

```js
var isValid = function(s) {
  if (s === '') return true;
  if (!s.length || s.length % 2 === 1) return false;

  const stack = s.split(''),
    rightStack = [];

  while (stack.length) {
    const top = stack.pop();

    if (top === ')' || top === ']' || top === '}') {
      rightStack.push(top);
      continue;
    }

    const right = rightStack.pop();
    if (
      (top === '(' && right !== ')') ||
      (top === '[' && right !== ']') ||
      (top === '{' && right !== '}')
    )
      return false;
  }

  return true;
};
```

#### 复杂度分析

- 时间复杂度：`O(n)`，因为我们一次只遍历给定的字符串中的一个字符并在栈上进行 `O(1)` 的推入和弹出操作
- 空间复杂度：`O(n)`

### 哈希表

```js
var isValid = function(s) {
  if (s === '') return true;
  if (!s.length || s.length % 2 === 1) return false;

  let map = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else if (s[i] !== map[stack.pop()]) {
      return false;
    }
  }
  return stack.length === 0;
};
```

#### 复杂度分析

- 时间复杂度：`O(n)`
- 空间复杂度：`O(n)`
