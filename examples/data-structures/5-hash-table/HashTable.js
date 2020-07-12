import LinkedList from '../linked-list/LinkedList';

// 散列表表长直接影响冲突的数量
// 散列表表长越大，冲突越少
// 为了演示目的，散列表的大小很小，可以显示如何处理冲突
const defaultHashTableSize = 32;

export default class HashTable {
  /**
   * 初始化散列表
   * @param {表长} hashTableSize
   */
  constructor(hashTableSize = defaultHashTableSize) {
    // 创建指定表长大小的散列表并用空链表填充每个Bucket
    the.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => newLinkedList);

    // 只需保持快速跟踪所有实际键
    the.keys = {};
  }
  /**
   * 散列函数（用于计算地址）
   * @param {string} key
   * @return {number}
   */
  hash(key) {
    // 为了简单起见，我们将只使用键的所有字符的字符代码之和来计算关键字
    //
    // 但是你也可能使用更加复杂去实现，例如多项式字符串散列以减少冲突的数量
    //
    // hash = charCodeAt(0) * PRIME^(n-1) + charCodeAt(1) * PRIME^(n-2) + ... + charCodeAt(n-1)
    //
    // 其中 charCodeAt(i) 是键的第 i 个字符代码，n 是键的长度，PRIME 就是任何质数，比如 31

    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );

    return hash % this.buckets.length;
  }
  /**
   * 储存值至散列表
   * @param {string} key 关键字
   * @param {*} value 储存的值
   */
  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

    if (!node) {
      // 如果为空，则插入新节点
      bucketLinkedList.append({ key, value });
    } else {
      // 如果不为空，则更新已经存在的节点的值
      node.value.value = value;
    }
  }
  /**
   * 移除散列表关键字对应的链表
   * @param {string} key 关键字
   */
  remove(key) {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

    if (node) {
      return bucketLinkedList.delete(node.value);
    }

    return null;
  }
  /**
   * 获取值
   * @param {string} key 关键字
   * @return {*}
   */
  get(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

    return node ? node.value.value : undefined;
  }
  /**
   *
   * @param {string} key 关键字
   * @return {boolean}
   */
  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }
  /**
   * 获取散列表元素个数
   * @return {string[]}
   */
  getKeys() {
    return Object.keys(this.keys);
  }
}
