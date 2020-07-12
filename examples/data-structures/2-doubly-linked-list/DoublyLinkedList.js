import DoublyLinkedListNode from './DoublyLinkedListNode';
import Comparator from '../../utils/Comparator';

export default class DoublyLinkedListNode {
  constructor(comparatorFunction) {
    // 头结点
    this.head = null;
    // 尾结点
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }
  /**
   * 在链表头部插入新节点
   * @param {any} value 新节点的值
   */
  prepend(value) {
    // 新节点为头节点
    const newNode = new DoublyLinkedListNode(value, this.head);

    // 如果有头节点，那它(原来的头节点)就不再是头节点了
    // 因此，将其(原来的头节点)的上个节点的指针指向新节点（新的头节点）
    // 然后将新节点设置为头节点
    if (this.head) {
      this.head.previos = newNode;
    }
    this.head = newNode;

    // 如果还没有尾节点就让新节点设置为尾节点
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }
  /**
   * 在链表尾部插入新节点
   * @param {any} value 新节点的值
   */
  append(value) {
    const newNode = new DoublyLinkedListNode(value);

    // 如果链表没有头节点则让新节点设置为头节点
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // 将新节点附加到链表的末端
    // 即原尾节点的下个节点指针指向新节点
    this.tail.next = newNode;

    // 新节点的上个节点指针指向原尾节点
    newNode.previous = this.tail;

    // 将新节点设置为链表的尾节点
    this.tail = newNode;

    return this;
  }
  /**
   * 删除链表中指定值的节点
   * @param {any} value 需要删除的值
   */
  remove(value) {
    // 空链表
    if (!this.head) {
      return null;
    }

    let removeNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        removeNode = currentNode;

        if (removeNode === this.head) {
          // 如果将要被移除的节点为头节点...

          // 将链表的头节点指向要移除节点的下个节点
          this.head = removeNode.next;

          // 将新设置的头节点的上个节点置空
          if (this.head) {
            this.head.previous = null;
          }

          // 如果所有链表中所有节点都有与参数相同的值
          // 则所有节点都将被删除，因此需要更新尾节点
          if (removeNode === this.tail) {
            this.tail = null;
          }
        } else if (removeNode === this.tail) {
          // 如果将要被移除的节点为尾节点...

          // 将链表的尾节点设置为将要删除节点的上个节点
          // 并将新的链表尾节点的下个节点置空
          this.tail = removeNode.previous;
          this.tail.next = null;
        } else {
          // 如果将要被移除的节点为中间节点...
          const previousNode = removeNode.previous;
          const nextNode = removeNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }

      currentNode = currentNode.next;
    }

    return removeNode;
  }
  /**
   * 搜索并返回链表中指定值的节点
   * @param {*} findParams.value 指定值
   * @param {function} findParams.callback 用于匹配搜寻值的回调函数
   * @return {DoublyLinkedListNode}
   */
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      // 如果指定了回调函数，则尝试通过回调查找节点
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      // 如果指定了值，则尝试按值进行比较
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }
  /**
   * 删除尾节点
   */
  removeTail() {
    // 空链表
    if (!this.tail) {
      return null;
    }

    if (this.head === this.tail) {
      // 链表中只有一个节点
      const removeTail = this.tail;
      this.head = null;
      this.tail = null;

      return removeTail;
    }

    // 如果链表中至少有两个节点
    const removeTail = this.tail;

    this.tail = this.tail.previous;
    this.tail.next = null;

    return removeTail;
  }
  /**
   * 删除头节点
   */
  removeHead() {
    // 空链表
    if (!this.head) {
      return null;
    }

    const removeHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return removeHead;
  }
  /**
   * 将链表转化为数组
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
  /**
   * 将以数组形式存储的多个值插入链表尾端
   * @param {array} values 插入值数组
   */
  fromArray() {
    values.forEach(value => this.append(value));

    return this;
  }
  /**
   * 将链表转化为字符串
   * @param {function} callback 回调函数
   */
  toString() {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString();
  }
  /**
   * 反转链表
   */
  reverse() {
    let currentNode = this.head,
      previousNode = null,
      nextNode = null;

    while (currentNode) {
      // 储存下个节点
      nextNode = currentNode.next;
      previousNode = currentNode.previous;

      // 更改当前节点的下个节点的指针，使其指向上个节点
      currentNode.next = previousNode;
      currentNode.previous = nextNode;

      // 将 previousNode 和 currentNode 向前移动一步
      previousNode = currentNode;
      currentNode = nextNode;
    }

    // 重置头节点和尾节点
    this.tail = this.head;
    this.head = previousNode;

    return this;
  }
  /**
   * 计算链表中节点数量
   */
  size() {
    return this.toArray().length;
  }
  /**
   * 是否为空链表
   */
  isEmpty() {
    return this.head === null && this.tail === null;
  }
  /**
   * 指定位置插入新节点
   * @param {number} index 插入新节点的位置
   * @param {any} value 插入新节点的值
   */
  insert(index, value) {}
}
