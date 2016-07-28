var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.iterate = function(node, target) {
    if (node.next === null) {
      node.next = target;
    } else {
      this.iterate(node.next);
    }
  };
  

  list.addToTail = function(value) {
    this.tail = Node(value);
    if (this.head === null) {
      this.head = Node(value);
    } else {
      this.iterate(this.head, Node(value));
    }
  };

  list.removeHead = function() {
    if (this.head !== null) {
      var result = this.head.value;
      this.head = this.head.next;
      return result;
    }
  };

  list.contains = function(target) {
    return this.find(this.head, target);
  };
  
  list.find = function(node, target) {
    if (node.value === target) {
      return true;
    } else if (node.next === null) {
      return false;
    } else {
      return this.find(node.next, target);
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// {head: somenode,
// tail: somenode}

// {head:
//   next: {value: 
//     next :{value: value,
//       next: {
//         value: value,
//         next: null
//       }
//     }
//   },
//  tail: lastNode
// }
