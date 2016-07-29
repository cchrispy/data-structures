var BinarySearchTree = function(value) {
  this.tree = {
    depth: 0,
    maxDepth: 0,
    value: value,
    right: undefined,
    left: undefined
  };




  return _.extend(tree, BinarySearchTreeMethods);
};
var BinarySearchTreeMethods = {
  insert: function(input) {
    var newChild = BinarySearchTree(input);
    newChild.depth = this.depth + 1;
    this.maxDepth = (this.maxDepth > newChild.depth ? this.maxDepth : newChild.depth);
    if (this.value < input) {
      if (this.right === undefined) {
        this.right = newChild;
      } else {
        this.right.insert(input);
      }
    } else if (this.value > input) {
      if (this.left === undefined) {
        this.left = newChild;
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
  },
  breadthFirstLog: function(callback) {
    var layers = {};
    for (var i = 0; i < this.maxDepth; i++) {
      layers[i] = [];
    }
    depthFirstLog(function(node) {
      layers[node.depth].push(node);
    });
    _.each(layers, function(depthArray) {
      depthArray.each(function(node) {
        callback(node.value);
      });
    });
  }  

};

/*
 * Complexity: What is the time complexity of the above functions?
 insert(): O(log(n))
 contains(): O(log(n))
 depthFirstLog(): O(n)
 */
/*
1 2 4 8 16 32



*/
// this.left                                this.right
// this.left.left      this.left.right      this.right.left     this.right.right
// LLL LLR LRL LRR RLL RLR RRL RRL

//0 1
//00 01 10 11
//000 001 010 011 100 101 110 111
// L( ) R( )

/*
1: L    R
2: L(1) R(1)
3: L(2) R(2)
4: L(3) R(3)
*/

