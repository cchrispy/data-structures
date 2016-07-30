var sort = function(array) {
  array.sort(function(a, b) { return a-b; })
}

var BTree = function(deg) {
  this.degree = deg;
  this.values = _.range(deg).fill(Infinity);
  this.children = _.range(deg).fill(null);
};

BTree.prototype.insert = function(val) {
  // start by inserting into own values;
  this.values.push(val).sort(function(a,b) { return a-b; });
  var curTree = this;

  if (_.every(this.values, function(value) {return Number.isFinite(value);})) {
    var midNum = curTree.values.splice(Math.floor(deg / 2), 1);
    
    curTree.values.forEach(function(item) {

    })


    // curTree.values.sort(function(a,b) {return a-b; });
    // curTree.children[curTree.find(val)] = new BTree(deg);
  } else {
    this.values[deg-1] = val;
    sort(this.values);
  }


  // create children once values.length reaches deg
  // then start pushing to children and do the same checks


  var ind = this.find(val);
  if (this.children
  this.children[ind].insert(val);


  // if we need to insert at this tree, push to this tree's values
  //if we can insert 
  // find which branch to insert val
  // push to that child's values array
  // call rebalance
};

BTree.prototype.remove = function(val) {
  this.values = 
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
// BTree.prototype.rebalance = function() {
//   var full = _.every(this.values, function(item) {
//     return Number.isFinite(item);
//   });


// };
