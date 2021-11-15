# DOM

## 统计HTML标签中以某字母开头的标签数量

```js
const tags = document.getElementsByTagName('*')

// 要使用数组的方法必须将类数组转为真正的数组
const arr = [...tags].filter(item => item.tagName.startsWith('B'))

const len = arr.length;
```

或者使用深度遍历：

```js
const collection = [];

function dfs(ele) {
  if (ele.tagName.startsWith('B')) {
    collection.push(ele)
  }
  for (const child of ele.children) {
    dfs(child)
  }
}

dfs(document.documentElement)

const len = collection.length;
```

## 统计HTML标签中出现次数最多的标签

和 `实现一个统计一个字符串中出现字符最多的字符` 及 `统计一篇文章中出现最多的字` 是差不多类型的题。

```js
const tags = document.getElementsByName('*');

let map = new Map();
let maxTag = '';
let maxNum = 0;

for (let i = 0; i < tags.length; i++) {
  const tag = tags[i].tagName;
  const num = map.get(tag)
  if (num) {
    map.set(tag, ++num)
  } else {
    map.set(tag, 1)
  }
  if (num > maxNum) {
    maxNum = num;
    maxTag = tag;
  }
}

console.log('当前文档中出现次数最多的标签名：', maxTag)
console.log('当前文档中出现次数最多的标签的次数：', maxNum)
```