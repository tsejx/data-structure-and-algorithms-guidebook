var MyCircularQueue = function(k) {
  this.capacity = k;
  this.queue = new Array(k);
  this.headIndex = 0;
  this.count = 0;
};

MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false;
  this.queue[(this.headIndex + this.count) % this.capacity] = value;
  this.count += 1;
  return true;
};

MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false;
  this.headIndex = (this.headIndex + 1) % this.capacity;
  this.count -= 1;
  return true;
};

MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) {
    return -1;
  }
  return this.queue[this.headIndex];
};

MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) {
    return -1;
  }
  return this.queue[(this.headIndex + this.count -1) % this.capacity];
};

MyCircularQueue.prototype.isEmpty = function() {
  return this.count == 0;
};

MyCircularQueue.prototype.isFull = function() {
  return this.count == this.capacity;
};

export default MyCircularQueue;