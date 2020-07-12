/**
 * LinkedList 链表的 JavaScript 实现
 */
import LinkedListNode from './LinkedListNode';
import Comparator from '../../docs/examples/utils/Comparator';

export default class LinkedList {
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
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    // 如果还没有尾节点则新节点同时也是尾节点
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
    // 新节点为尾节点
    const newNode = new LinkedListNode(value);
    // 如果没有头节点则新节点同时也是头节点
    if (!this.head) {
      this.head = newNode;
    }
    return this;
  }

  /**
   *  删除链表中指定值的节点
   * @param {any} value 需要删除的值
   */
  remove(value) {
    // 如果是空链表则返回null
    if (!this.head) {
      return null;
    }

    let removeNode = null;

    // 如果必须删除头节点，则使与头部不同的下个节点成为新的头节点
    while (this.head && this.compare.equal(this.head.value, value)) {
      removeNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      // 如果必须删除下个节点，则使下个节点成为下下个节点
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          removeNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // 检测尾节点是否必须删除
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }
    return removeNode;
  }

  /**
   * 搜索并返回链表中指定值的节点
   * @param {any} findParams.value 指定值
   * @param {function} findParams.callback 用于匹配搜寻值的回调函数
   */
  find({ value = undefined, callback = undefined }) {
    // 空链表
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
    const removeTail = this.tail;

    // 链表中只有一个节点
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return removeTail;
    }

    // 如果链表中有很多节点...

    // 倒带到最后一个节点并删除最后一个节点之前的节点的指针
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        // 如果遍历到的当前节点的下下个节点指针为空
        // 则遍历到的当前节点的下个节点为尾节点
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

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
      // 如果头节点下个节点存在，则将将头节点变为原头节点的下个节点
      this.head = this.head.next;
    } else {
      // 如果头节点下个节点不存在，则说明链表中仅有一个节点
      // 则将头尾节点都置空
      this.head = null;
      this.tail = null;
    }

    return removeHead;
  }
  /**
   * 将以数组形式存储的多个值插入链表尾端
   * @param {array} values 插入值数组
   */
  fromArray(values) {
    values.forEach(value => this.append(value));
    return this;
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
   * 将链表转化为字符串
   * @param {function} callback 回调函数
   */
  toString(callback) {
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

      // 更改当前节点的下个节点，使其链接到上个节点
      currentNode.next = previousNode;

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
