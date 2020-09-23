---
nav:
  title: LeetCode
  order: 3
group:
  title: 字符串
  order: 2
title: 211 - 添加与搜索单词 - 数据结构设计
order: 211
---

# 添加与搜索单词 - 数据结构设计

## 解题思路

### 哈希表

```js
const WordDictionary = function () {
  this.map = {}
}

WordDictionary.prototype.addWord = function (word) {
  // 若该字符串对应长度的数组已经存在，则只做添加
  if (this.map[word.length]) {
    this.map[word.length].push(word)
  } else {
    // 若该字符串对应长度的数组还不存在，则先创建
    this.map[word.length] = [word]
  }
}

WordDictionary.prototype.search = function (word) {
  // 若干该字符串长度在 Map 中对应的数组根本不存在，则可判断该字符串不存在
  if (!this.map[word.length]) {
    return false;
  }

  // 缓存目标字符串的长度
  const len = word.length;

  // 如果字符串中不包含 `.`，那么一定也是普通字符串
  if (word.indexOf('.') === -1) {
    return this.map[len].includes(word)
  }

  const reg = new RegExp(word)

  return this.map[len].some(item => reg.test(item))
}
```

### 字典树

```js
const TrieNode = function () {
  this.next = {}
  this.isEnd = false
}

const WordDictionary = function () {
  this.root = new TrieNode()
}

WordDictionary.prototype.addWord = function() {
  if (!word.length) return;

  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    if (!node.next[word[i]]) {
      node.next[word[i]] = new TrieNode()
    }
    node = node.next[word[i]]
  }

  node.isEnd = true
}

WordDictionary.prototype.search = function () {
  if (!word.length) return false

  return this.dfs(this.root, word)
}

WordDictionary.prototype.dfs = function (root, word) {
  const len = word.length;
  let node = root;

  for (let i = 0; i < len; ++i) {
    const ch = word[i]
    // 若是通配符，则尝试遍历所有的情况（DFS）
    if (ch === '.') {
      const keys = Reflect.ownKeys(node.next);
      for (const key of keys) {
        const found = this.dfs(node.next[key], word.slice(i + 1))
        if (found) return true;
      }
      return false;
    }

    if (!node.next[ch]) {
      return false
    }
    node = node.next[ch]
  }

  return node.isEnd;
}
```