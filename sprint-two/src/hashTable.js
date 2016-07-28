

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = {};
  obj[k] = v;
  this._storage.set(index, _.extend({}, this._storage.get(index), obj));
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, _.omit(this._storage.get(index), k));
};
  


/*
 * Complexity: What is the time complexity of the above functions?
 storage = [{val1: 1, val2: nextvalue} , undefined, blah, 2]
           undefined[steven]
 */


