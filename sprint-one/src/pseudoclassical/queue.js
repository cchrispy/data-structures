var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.addTo = 1;
  this.removeTo = 1;
  this.storage = {};
};
Queue.prototype.enqueue = function(value) {
  this.storage[this.addTo] = value;
  this.addTo ++;
};
Queue.prototype.dequeue = function() {
  if (this.addTo > this.removeTo) {
    var result = this.storage[this.removeTo];
    delete this.storage[this.removeTo];
    this.removeTo ++;
    return result;
  }
};
Queue.prototype.size = function() {
  return this.addTo - this.removeTo;
};


