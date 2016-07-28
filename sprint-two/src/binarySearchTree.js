var BinarySearchTree = function(value) {
  this.tree = {
    value: value,
    right: undefined,
    left: undefined
  };




  return _.extend(tree, BinarySearchTreeMethods);
};
var BinarySearchTreeMethods = {
  insert: function(input) {
    if (this.value < input) {
      if (this.right === undefined) {
        this.right = BinarySearchTree(input);
      } else {
        this.right.insert(input);
      }
    } else if (this.value > input) {
      if (this.left === undefined) {
        this.left = BinarySearchTree(input);
      } else {
        this.left.insert(input);
      }
    }
  },
  contains: function(input) {
    if (input === this.value) {
      return true;
    } else if (input > this.value) {
      if (this.right === undefined) {
        return false;
      }
      return this.right.contains(input);
    } else if (input < this.value) {
      if (this.left === undefined) {
        return false;
      }
      return this.left.contains(input);
    }
  },
  depthFirstLog: function(callback) {
    callback(this.value);
    if (this.right !== undefined) {
      this.right.depthFirstLog(callback);
    }
    if (this.left !== undefined) {
      this.left.depthFirstLog(callback);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert(): O(log(n))
 contains(): O(log(n))
 depthFirstLog(): O(n)
 */
