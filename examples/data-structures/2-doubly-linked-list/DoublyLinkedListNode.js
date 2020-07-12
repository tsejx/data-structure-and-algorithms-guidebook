export default class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    // 数据域
    this.value = value;
    // 前驱结点
    this.next = null;
    // 后继结点
    this.previous = null;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
