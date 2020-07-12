import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    // 基于链表实现队列，因为两者结构非常相似
    // 也就是说，他们都基于在开始节点和结束节点
    // 将队列的enqueue/dequeue和链表的append/preprnd比较
    this.linkedList = new LinkedList();
  }
  /**
   * 是否是空队列
   * @return {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }
  /**
   * 读取队列头部的节点但是不删除它
   */
  peek() {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }
  /**
   * 添加新结点到队列末尾
   */
  enqueue() {
    this.linkedList.append(value);
  }
  /**
   * 移除队列头部的节点
   */
  dequeue() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }
  /**
   * 将堆栈中的节点转化为字符串
   * @param {function} callback 用于将链表节点转化为字符的回调函数
   */
  toString() {
    return this.linkedList.toString(callback);
  }
}
