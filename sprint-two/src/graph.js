

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push({value: node, refs: []});
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.some(this.nodes, function(eachNode){
    return eachNode.value === node;
  });
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var func = this.removeEdge.bind(this);
  _.each(this.nodes[this.findNode(node)].refs, function(edgeVal) {
    func(node, edgeVal);
  });
  this.nodes = _.filter(this.nodes, function(eachNode) {
    return eachNode.value !== node;
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[this.findNode(fromNode)].refs.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  this.nodes[this.findNode(fromNode)].refs.push(toNode);

  this.nodes[this.findNode(toNode)].refs.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var i = this.nodes[this.findNode(fromNode)].refs.indexOf(toNode);
  this.nodes[this.findNode(fromNode)].refs.splice(i, 1);
  var j = this.nodes[this.findNode(toNode)].refs.indexOf(fromNode);
  this.nodes[this.findNode(toNode)].refs.splice(j, 1);
};

Graph.prototype.findNode = function(value) {
  return this.nodes.findIndex(function(node) {
    return node.value === value;
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node) {
    cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
