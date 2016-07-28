

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = {};
  obj[k] = v;
  if (this._storage.get(index) === undefined) {
    this._counter ++;
  }
  this._storage.set(index, _.extend({}, this._storage.get(index), obj));
  if (this._counter === this._limit - 4) {
    this._limit = this._limit << 1;
    this.resize();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.retrieve(k)) {
    this._counter --;
  }
  this._storage.set(index, _.omit(this._storage.get(index), k));
  if (this._counter === this._limit >> 1) {
    this._limit = this._limit >> 1;
    this.resize();
  }
};
HashTable.prototype.resize = function() {
  var oldStorage = _.clone(this._storage);
  var insert = this.insert.bind(this);
  this._storage = LimitedArray(this._limit);
  oldStorage.each(function(item) {
    _.each(item, function(value, key) {
      insert(key, value);
    });
  });
 
};
  


/*
 * Complexity: What is the time complexity of the above functions?
  Each one of the functions below is multiplied
  by the time complexity of the hashFunction. Thus, all constant functions have O(n),
  and all quadratic functions become cubic.

  insert(): Best Case(Not resized): Constant, Worst Case(Resized): O(n^2)
  retrieve(): O(1)
  remove():Best Case(Not resized): Constant, Worst Case(Resized): O(n^2)
  resize: O(n^2)

 */


