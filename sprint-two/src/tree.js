var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here

  newTree.children = [];

  // newTree.children = null;  // fix me

  return _.extend(newTree, treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  this.children.push(Tree(value));


  // newTree.children = null;  // fix me
};

treeMethods.contains = function(target) {
  return this.find(this, target);
};

treeMethods.find = function(node, target) {
  var result = false;
  node.children.forEach(function(child) {
    if (child.value === target) {
      result = true;
    } else {
      if (!result) {
        result = treeMethods.find(child, target);
      }
    }
  });
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 AddChild() = O(1)
 Find(): O(n)
 contains(): O(n)
 */