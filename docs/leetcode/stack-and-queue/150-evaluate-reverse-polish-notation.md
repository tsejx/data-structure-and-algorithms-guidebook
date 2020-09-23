---
nav:
  title: LeetCode
  order: 3
group:
  title: 栈和队列
  order: 4
title: 150 - 逆波兰表达式求值
order: 150
---

# 逆波兰表达式求值

根据 [逆波兰表示法](https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F/128437)，求表达式的值。

有效的运算符包括  `+`, `-`, `*`, `/` 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

说明：

- 整数除法只保留整数部分。
- 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

示例 1:

```plain
输入: ["2", "1", "+", "3", "*"]
输出: 9
解释: ((2 + 1) * 3) = 9
```

示例 2:

```plain
输入: ["4", "13", "5", "/", "+"]
输出: 6
解释: (4 + (13 / 5)) = 6
```

示例 3:

```plain
输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
输出: 22
解释:
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

## 解题思路

### 逆序递归法

```js
var evalRPN = function(tokens) {
  let rec = function() {
    let char = tokens.pop();
    let res;
    switch (char) {
      case '+':
        return rec() + rec();
      case '-':
        res = rec();
        return rec() - res;
      case '*':
        return rec() * rec();
      case '/':
        res = rec();
        return parseInt(rec() / res, 10);
      default:
        return parseInt(char, 10);
    }
  };

  return rec();
};
```

### 逆序递归法（简洁版）

```js
var evalRPN = function() {
  const map = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => parseInt(a / b, 10);
  }

  const rec = function () {
    const char = tokens.pop();
    if (map[char]) {
      let num = rec();
      return map[char](rec(), num);
    } else {
      return parseInt(char, 10);
    }
  }
}
```

### 栈实现

实现思路：

1. 遇到数字推入栈
2. 遇到符号则从栈中取出最顶栈两位进行运算符操作

```js
var evalRPN = function() {
  let stack = [];
  let num;

  for (let char of tokens) {
    switch (char) {
      case '+':
        stack.push(stack.pop() + stack.pop());
        break;
      case '-':
        num = stack.pop();
        stack.push(stack.pop() - num);
        break;
      case '*':
        stack.push(stack.pop() * stack.pop());
        break;
      case '/':
        num = stack.pop();
        stack.push(parseInt(stack.pop() / num, 10));
        break;
      default:
        stack.push(parseInt(char, 10));
    }
  }
  return stack.pop();
};
```
