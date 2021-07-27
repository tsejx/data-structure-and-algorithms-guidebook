---
nav:
  title: 数据结构
  order: 1
group:
  title: 树
  order: 7
title: 红黑树
order: 5
---

# 红黑树

一种自平衡二叉查找树, 通过对任何一条从根到叶子的路径上各个节点着色的方式的限制,红黑树确保从根到叶子节点的最长路径不会是最短路径的两倍，用非严格的平衡来换取增删节点时候旋转次数的降低，任何不平衡都会在三次旋转之内解决

使用场景：

红黑树多用于搜索、插入、删除操作多的情况下：

红黑树应用比较广泛：

1. 广泛用在 C++的 STL 中。map 和 set 都是用红黑树实现的。
2. 著名的 linux 进程调度 Completely Fair Scheduler,用红黑树管理进程控制块。
3. epoll 在内核中的实现，用红黑树管理事件块
4. Nginx 中，用红黑树管理 timer 等

原因：

红黑树的查询性能略微逊色于 AVL 树，因为比 AVL 树会稍微不平衡最多一层，也就是说红黑树的查询性能只比相同内容的 AVL 树最多多一次比较，但是，红黑树在插入和删除上完爆 AVL 树，AVL 树每次插入删除会进行大量的平衡度计算，而红黑树为了维持红黑性质所做的红黑变换和旋转的开销，相较于 AVL 树为了维持平衡的开销要小得多

性质：

1. 节点是红色或黑色。
2. 根节点是黑色。
3. 每个叶子节点都是黑色的空节点（NIL 节点）。
4. 每个红色节点的两个子节点都是黑色。（从每个叶子到根的所有路径上不能有两个连续的红色节点）
5. 从任一节点到其每个叶子的所有路径都包含相同数目的黑色节点。

---

**参考资料：**

- [📝 从 libuv 源码中学习红黑树](https://zhuanlan.zhihu.com/p/91359420)
- [百图详解红黑树，想不理解都难](https://zhuanlan.zhihu.com/p/97523789)
- [面试阿里，字节跳动，美团必问到的红黑树原来这么简单](https://zhuanlan.zhihu.com/p/142652411)
- [为什么要有红黑树？什么是红黑树？画了 20 张图，看完这篇你就明白了](https://zhuanlan.zhihu.com/p/104048881)
- [深入理解红黑树（数据结构）](https://zhuanlan.zhihu.com/p/61895842)
- [我画了近百张图来理解红黑树](https://juejin.im/post/5df4aaefe51d45581269a6d2)
- [常用数据结构——树](https://www.jianshu.com/p/912357993486)