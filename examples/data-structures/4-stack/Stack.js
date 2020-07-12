import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  // 我们将基于LinkedList链表实现堆栈，因为堆栈本质上就是数组
  // 比较堆栈的Push/Pop操作与LinkedList的Prepend/RemoveHead方法
  constructor() {
    this.linkedList = new LinkedList();
  }
  /**
   * 检测堆栈是否为空
   * @return {boolean}
   */
  isEmpty() {
    // 如果链表没有头节点则说明堆栈为空
    return !this.linkedList.head;
  }
  /**
   * 获取栈顶元素
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.head.value;
  }
  /**
   * 入栈操作
   */
  push(value) {
    // 将值入栈意味着放在栈堆的顶部
    // 因此，我们只需要在链表头部插入新节点
    this.linkedList.prepend(value);
  }
  /**
   * 出栈操作
   */
  pop() {
    // 让我们尝试从链表中删除头节点
    // 如果链表中没有头节点则返回空
    const removeHead = this.linkedList.removeHead();
    return removeHead ? removeHead.value : null;
  }
  /**
   * @return {*[]}
   */
  toArray() {
    return this.linkedList.toArray().map(linkedListNode => linkedListNode.value);
  }
  /**
   * 将堆栈中的节点转化为字符串
   * @param {function} callback 用于将链表节点转化为字符的回调函数
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
