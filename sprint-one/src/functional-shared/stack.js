var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    counter: 0
  };


  return _.extend(instance, stackMethods);
};

var stackMethods = {
  push: function(value) {
    this.counter++;
    this.storage[this.counter] = value;
  },
  pop: function() {
    if (this.counter) {
      var result = this.storage[this.counter];
      delete this.storage[this.counter];
      this.counter--;
      return result;
    }
  },
  size: function() {
    return this.counter;
  }
};
