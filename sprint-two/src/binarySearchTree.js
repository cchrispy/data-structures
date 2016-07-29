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
    if (this.value < input) {
      if (this.right === undefined) {
        newChild.maxDepth = newChild.depth;
        this.right = newChild;
        if (this.maxDepth < this.right.maxDepth) { this.maxDepth = this.right.maxDepth; }
      } else {
        this.right.insert(input);
        if (this.maxDepth < this.right.maxDepth) { this.maxDepth = this.right.maxDepth; }
      }
    } else if (this.value > input) {
      if (this.left === undefined) {
        newChild.maxDepth = newChild.depth;
        this.left = newChild;
        if (this.maxDepth < this.left.maxDepth) { this.maxDepth = this.left.maxDepth; }
      } else {
        this.left.insert(input);
        if (this.maxDepth < this.left.maxDepth) { this.maxDepth = this.left.maxDepth; }
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
    if (this.left !== undefined) {
      this.left.depthFirstLog(callback);
    }
    if (this.right !== undefined) {
      this.right.depthFirstLog(callback);
    }
  },
  everyNode: function(callback) {
    callback(this);
    if (this.left !== undefined) {
      this.left.everyNode(callback);
    }
    if (this.right !== undefined) {
      this.right.everyNode(callback);
    }
  },
  breadthFirstLog: function(callback) {
    var layers = {};
    for (var i = 0; i <= this.maxDepth; i++) {
      layers[i] = [];
    }
    this.everyNode(function(node) {
      layers[node.depth].push(node.value);
    });
    _.each(layers, function(depthArray) {
      _.each(depthArray, function(node) {
        callback(node);
      });
    });
  },
  rebalance: function() {
    var nodeVals = [];
    this.depthFirstLog(function(value) {
      nodeVals.push(value);
    });
    nodeVals.sort(function(a, b) { return a - b; });
    var middle = Math.floor(nodeVals.length / 2);
    var newTree = BinarySearchTree(nodeVals[middle]);
    var addTree = function(ValuesToAdd) {
      if (ValuesToAdd.length > 0) {
        middle = Math.floor(ValuesToAdd.length / 2);
        var leftVals = ValuesToAdd.splice(0, middle);
        var rightVals = ValuesToAdd.slice(1);
        var leftMiddle = Math.floor(leftVals.length / 2);
        var rightMiddle = Math.floor(rightVals.length / 2);
        newTree.insert(leftVals[leftMiddle]);
        newTree.insert(rightVals[rightMiddle]);
        addTree(leftVals);
        addTree(rightVals);
      }
    };
    addTree(nodeVals);
    return newTree;
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

