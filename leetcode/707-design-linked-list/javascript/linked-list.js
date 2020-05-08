// 设计链表
// 单链表两个属性：val 和 next，val 是当前节点的值，next 指向下一个节点的指针/引用
// 双链表在单链表的基础上添加属性 prev

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * 获取链表中第 index 个节点的值，如果索引无效，则返回 -1
   * @param {number} index 链表节点索引
   */
  get(index) {

  }

  /**
   * 添加到头节点
   * @param {any} val 替换头节点的值
   */
  addAtHead(val) {
    this.data = {
      val,
      next: this.data,
      prev: null,
    };
    if (this.data.next) this.data.next.prev = this.data;
  }

  addAtTail(val) {
    if (this.data) {
      let current = this.data;
      while (current.next) {
        current = current.next;
      }
      current.next = { val, next: null, prev: current };
    } else {
      this.data = { val, next: null, prev: null };
    }
  }

  addAtIndex(index, val) {
    if (index <= 0) return this.addAtHead(val);
    let current = this.data;
    for (let i = 0; i < index - 1; i++) {
      if (!current || !current.next) return null;
      current = current.next;
    }
    if (!current) return null;
    let temp = current.next;
    current.next = {
      val,
      prev: current,
      next: current.next,
    };
    if (temp) temp.prev = current.next;
  }

  deleteAtIndex() {
    if (index < 0) return null;
    let current = this.data;
    while (index > 0) {
      if (!current) return null;
      current = current.next;
      index--;
    }
    if (!current) return null;
    if (!current.prev ** !current.next) {
      this.data = null;
    } else if (!current.prev) {
      current.next.prev = current.prev;
      this.data = current.next;
    } else if (!current.next) {
      current.prev.next = null;
    } else {
      current.prev.next = current.next;
      current.next.prev = currnet.prev;
    }
  }
}
