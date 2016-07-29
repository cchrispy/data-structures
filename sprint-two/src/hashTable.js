

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [];
  tuple[0] = k;
  tuple[1] = v;
  this._counter ++;
  if (this.retrieve(k)) {
    this.remove(k);  
  }
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  this._storage.get(index).push(tuple);
  if (this._counter >= this._limit * 0.75) {
    this._limit = this._limit << 1;
    this.resize();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    var tuple = bucket.find(function(tuple) {
      return tuple[0] === k;
    });
    return tuple ? tuple[1] : undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.retrieve(k)) {
    this._counter --;
  }
  this._storage.get(index).splice(this._storage.get(index).findIndex(function(tuple) {
    return tuple[0] === k;
  }), 1);
  if (this._counter < this._limit * 0.25) {
    this._limit = this._limit >> 1;
    this.resize();
  }
};
HashTable.prototype.resize = function() {
  var oldStorage = _.clone(this._storage);
  var insert = this.insert.bind(this);
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
  oldStorage.each(function(tupleSets) {
    if (tupleSets) {
      tupleSets.forEach(function(tuple) {
        insert(tuple[0], tuple[1]);
      });
    }
  });
};
  


/*
 * Complexity: What is the time complexity of the above functions?
  Each one of the functions below is multiplied
  by the time complexity of the hashFunction. Thus, all constant functions have O(n),
  and all quadratic functions become cubic.

  insert(): O(1)
  retrieve(): O(1)
  remove(): O(1)
  resize: O(n)

 */


