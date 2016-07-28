

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(key) {
  this.nodes[key] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(key) {
  return this.nodes[key] !== undefined;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var remove = this.removeEdge.bind(this);
  _.each(this.nodes[node], function(item) {
    remove(node, item);
  });
  delete this.nodes[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode][toNode] !== undefined;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  this.nodes[fromNode][toNode] = toNode;
  this.nodes[toNode][fromNode] = fromNode;

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];


};



// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(node, key) {
    cb(key);
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
  AddNode(): O(1)
  contains(): O(1)
  removeNode(): O(n)
  hasEdge(): O(1)
  addEdge(): O(1)
  forEachNode(): O(n)

 */
