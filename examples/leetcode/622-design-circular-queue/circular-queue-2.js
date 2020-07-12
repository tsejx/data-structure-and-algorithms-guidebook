var MyCircularQueue = function(k) {
  this.capacity = k;
  this.headIndex = -1;
  this.tailIndex = -1;
  this.queue = new Array(k);
};

MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false;
  if (this.isEmpty()) {
    this.headIndex = 0;
  }
  this.tailIndex = (this.tailIndex + 1) % this.capacity;
  this.queue[this.tailIndex] = value;
  return true;
};

MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false;
  if (this.headIndex == this.tailIndex) {
    this.headIndex = -1;
    this.tailIndex = -1;
    return true;
  }
  this.headIndex = (this.headIndex + 1) % this.capacity;
  return true;
};

MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) return -1;
  this.queue[this.headIndex];
};

MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) return -1;
  this.queue[this.tailIndex];
};

MyCircularQueue.prototype.isEmpty = function() {
  return this.headIndex == -1;
};

MyCircularQueue.prototype.isFull = function() {
  return (this.tailIndex + 1) % this.capacity == this.headIndex;
};
