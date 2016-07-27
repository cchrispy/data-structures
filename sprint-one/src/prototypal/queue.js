var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  return instance;
};

var queueMethods = {
  storage: {},
  addTo: 1,
  removeTo: 1,
  enqueue: function(value) {
    this.storage[this.addTo] = value;
    this.addTo++;
  },
  dequeue: function() {
    if (this.addTo > this.removeTo) {
      var result = this.storage[this.removeTo];
      delete this.storage[this.removeTo];
      this.removeTo++;
      return result;
    }
  },
  size: function() {
    return this.addTo - this.removeTo;
  }
};


