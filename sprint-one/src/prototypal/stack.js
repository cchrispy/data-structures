var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);

  return instance;
};

var stackMethods = {
  counter: 0,
  storage: {},
  push: function(value) {
    this.counter ++;
    this.storage[this.counter] = value;
  },
  pop: function() {
    if (this.counter > 0) {
      var result = this.storage[this.counter];
      delete this.storage[this.counter];
      this.counter --;
      return result;
    }
  },
  size: function() {
    return this.counter;
  }
};


// return Object.create(stackMethods);
