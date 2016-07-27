var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var addTo = 1;
  var removeTo = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[addTo] = value;
    addTo++;
  };

  someInstance.dequeue = function() {
    if (addTo > removeTo) {
      var result = storage[removeTo];
      delete storage[removeTo];
      removeTo++;
      return result;
    }
  };

  someInstance.size = function() {
    return addTo - removeTo;
  };

  return someInstance;
};
