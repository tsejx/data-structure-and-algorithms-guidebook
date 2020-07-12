var MyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

var listNode = function(val) {
  this.val = val;
  this.next = null;
};

MyLinkedList.prototype.get = function(index) {
  if (index >= 0 && index < this.length) {
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }
    return current.val;
  } else {
    return -1;
  }
};

MyLinkedList.prototype.addAtHead = function (val) {
  const lastHead = this.head;
}