# 并查集

在计算机科学中，**并查集** 是一种树型的数据结构，用于处理一些不交集（Disjoint Sets）的合并及查询问题。有一个**联合-查找算法**（union-find algorithm）定义了两个用于此数据结构的操作：

- Find：确定元素属于哪一个子集。它可以被用来确定两个元素是否属于同一子集。
- Union：将两个子集合并成同一个集合。

由于支持这两种操作，一个不相交集也常被称为**联合-查找数据结构**（union-find data structure）或**合并-查找集合**（merge-find set）。其他的重要方法，MakeSet，用于创建单元素集合。有了这些方法，许多经典的划分问题可以被解决。

为了更加精确的定义这些方法，需要定义如何表示集合。一种常用的策略是为每个集合选定一个固定的元素，称为代表，以表示整个集合。接着，Find(x) 返回 x 所属集合的代表，而 Union 使用两个集合的代表作为参数。

```
并查集 一
    0   1   2   3   4   5   6   7   8   9
    -------------------------------------
id  0   0   0   0   0   1   1   1   1   1

并查集 二
    0   1   2   3   4   5   6   7   8   9
    -------------------------------------
id  0   1   0   1   0   1   0   1   0   1
```

## 并查集实现

- Quick Find
- Quick Union
- 基于 size 的优化
- 基于 rank 的优化
- 路径优化

对于一组数据，主要支持两个动作：

1. `union(a, b)` 合并元素 `a` 和元素 `b` 到相同集合中
2. `find(a)` 查询元素 `a` 在哪个集合中

```js
function UnionFind() {
  this.nodes = new Map();
  this.length = 0;
}

// 判断元素 p 和元素 q 是否在相同集合中
UninonFind.prototype.isConnected = function(a, b) {
    return this.getRoot(this.nodes.get(a)!) === this.getRoot(this.nodes.get(b)!)
};

UnionFind.protoype.insert = function(value) {
    if (this.nodes.has(value)) throw new Error(`${value} already exists.`)

    const node = { size: 1 }
    node.parent = node;

    this.nodes.set(value, node);
    this.length += 1
}

// 将元素 q 和 元素 p 这两个数据以及他们所在的集合合并
UnionFind.prototype.unite = function(a, b) {
    const rootA = this.getRoot(this.getNode(a))
    const rootB = this.getRoot(this.getNode(b))

    if (rootA !== rootB) {
        const newRoot = rootA.size >= rootB.size ? rootA : rootB
        const newChild = newRoot === rootA ? rootB : rootA

        newChild.parent = newRoot
        newRoot.size += newChild.size
        newChild.size = 1
        this.unionLength -= 1
    }
};

// 查找指定元素
UnionFind.prototype.getNode = function(a) {
    if (!this.nodes.has(value)) throw new Error(`${value} is not found.`)

    return this.nodes.get(value)
};

UnionFind.prototype.getRoot = function(node) {
    if (node.parent === node) return node

    node.parent = this.getRoot(node.parent)

    return node.parent
};
```

---

**参考资料：**

- [JavaScript 数据结构解析和算法实现：并查集](https://juejin.im/post/5c92f7d3f265da60ef63494d)
