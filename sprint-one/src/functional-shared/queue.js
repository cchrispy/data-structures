var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    len: 0
  };
  return _.extend(instance, queueMethods);
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.len] = value;
    this.len ++;
  },
  dequeue: function() {
    if (this.len > 0) {
      var result = this.storage[0];
      for (var key in this.storage) {
        if (key > 0) {
          this.storage[key - 1] = this.storage[key];
        }
      }
      this.len--;
      delete this.storage[this.len];
      return result;
    }
  },
  size: function() {
    return this.len;
  }
};


