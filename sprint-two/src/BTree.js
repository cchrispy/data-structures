var BTree = function(deg) {
  this.degree = deg;
  this.values = [];
  this.children = _.range(deg).fill(null);
};

BTree.prototype.insert = function(val) {

};

BTree.prototype.remove = function(val) {

};

BTree.prototype.contains = function(val) {
  var found = _.some(this.values, function(eachVal) {
    return eachVal === val;
  });
  if (found === false) {
    found = this.children[this.find(val)].contains(val);
  }
  return found;
};

BTree.prototype.find = function(val) {
  values = _.clone(this.values);
  values.push(val);
  values.sort(function(a, b) {
    return a - b;
  });
  return values.indexOf(val);
};